#!/usr/bin/env bash
# Local publish helper. Publishes the runtime first (so the generator's emitted
# imports resolve), then the generator.
#
# Usage:
#   ./scripts/publish.sh                   # publish whatever version is in package.json
#   ./scripts/publish.sh --dry-run         # dry run for both packages
#   ./scripts/publish.sh --tag next        # publish under a dist-tag
#
# Pre-flight:
#   - npm login   (or NODE_AUTH_TOKEN set)
#   - working tree clean (we abort if not, unless --allow-dirty)
set -euo pipefail

DRY_RUN=""
TAG=""
ALLOW_DIRTY=""
OTP=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN="--dry-run"; shift ;;
    --tag) TAG="--tag $2"; shift 2 ;;
    --allow-dirty) ALLOW_DIRTY="1"; shift ;;
    --otp) OTP="--otp $2"; shift 2 ;;
    *) echo "Unknown arg: $1" >&2; exit 1 ;;
  esac
done

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Working-tree check
if [[ -z "$ALLOW_DIRTY" ]] && [[ -n "$(git -C "$ROOT" status --porcelain)" ]]; then
  echo "Working tree is dirty. Commit or pass --allow-dirty." >&2
  git -C "$ROOT" status --short >&2
  exit 1
fi

echo "==> Building runtime"
cd "$ROOT/packages/runtime"
yarn install --frozen-lockfile
yarn build

echo "==> Building generator"
cd "$ROOT/packages/generator"
yarn install --frozen-lockfile
yarn build
yarn test

# Publish runtime first — generator's emitted code imports from it at user-end.
echo "==> Publishing runtime"
cd "$ROOT/packages/runtime"
npm publish $DRY_RUN $TAG $OTP

echo "==> Publishing generator"
cd "$ROOT/packages/generator"
npm publish $DRY_RUN $TAG $OTP

echo "==> Done"
