import * as fs from 'fs'
import * as path from 'path'
import { execFileSync } from 'child_process'

const FIXTURE_DIR = path.resolve(__dirname, 'fixtures')

function runGenerate(fixture: string, outName: string): string {
  const schemaPath = path.join(FIXTURE_DIR, fixture)
  const outDir = path.join(FIXTURE_DIR, outName)
  if (fs.existsSync(outDir)) fs.rmSync(outDir, { recursive: true, force: true })
  execFileSync('npx', ['prisma', 'generate', `--schema=${schemaPath}`], {
    cwd: FIXTURE_DIR,
    stdio: 'pipe',
    env: { ...process.env, DEBUG: '' },
  })
  return outDir
}

function listGeneratedFiles(dir: string): string[] {
  const out: string[] = []
  const walk = (p: string) => {
    for (const entry of fs.readdirSync(p, { withFileTypes: true })) {
      const full = path.join(p, entry.name)
      if (entry.isDirectory()) walk(full)
      else out.push(path.relative(dir, full))
    }
  }
  walk(dir)
  return out.sort()
}

describe('generator', () => {
  it('produces a stable file tree for a basic schema', () => {
    const out = runGenerate('basic.prisma', 'out-basic')
    expect(listGeneratedFiles(out)).toMatchSnapshot()
  })

  it('honors @HideField, @SoftDelete, @ReadOnly, @Crud directives', () => {
    const out = runGenerate('directives.prisma', 'out-directives')
    expect(listGeneratedFiles(out)).toMatchSnapshot()
    // Soft-delete propagates into the service constructor call
    const articleCrud = fs.readFileSync(path.join(out, 'article', 'article.crud.ts'), 'utf-8')
    expect(articleCrud).toMatch(/softDelete: true/)
    // @Crud(only) restricts to listed ops only
    const logCrud = fs.readFileSync(path.join(out, 'publicLog', 'publicLog.crud.ts'), 'utf-8')
    expect(logCrud).toMatch(/findManyPublicLog/)
    expect(logCrud).toMatch(/findUniquePublicLog/)
    expect(logCrud).not.toMatch(/createPublicLog/)
    expect(logCrud).not.toMatch(/deletePublicLog/)
    // @HideField removes field from the model output type
    const articleModel = fs.readFileSync(path.join(out, 'models', 'article.model.ts'), 'utf-8')
    expect(articleModel).not.toMatch(/password/)
  })

  it('handles self-relation / composite key / implicit m:n / dual-relation without silent failure (#142)', () => {
    const out = runGenerate('complex.prisma', 'out-complex')
    const files = listGeneratedFiles(out)
    expect(files).toMatchSnapshot()
    // Each repro model has a crud file
    for (const model of ['category', 'membership', 'group', 'tag', 'conversation', 'account']) {
      expect(files.some((f) => f === `${model}/${model}.crud.ts`)).toBe(true)
    }
  })
})
