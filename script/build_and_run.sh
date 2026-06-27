#!/usr/bin/env sh
set -eu

run_expo() {
  if command -v pnpm >/dev/null 2>&1; then
    pnpm exec expo "$@"
  elif command -v npx >/dev/null 2>&1; then
    npx expo "$@"
  else
    echo "pnpm or npm/npx is required to run Expo." >&2
    exit 1
  fi
}

case "${1:-}" in
  --android)
    run_expo start --android
    ;;
  --ios)
    run_expo start --ios
    ;;
  --web)
    run_expo start --web
    ;;
  --dev-client)
    run_expo start --dev-client
    ;;
  --tunnel)
    run_expo start --tunnel
    ;;
  --export-web)
    run_expo export --platform web
    ;;
  --help|-h)
    echo "Usage: ./script/build_and_run.sh [--android|--ios|--web|--dev-client|--tunnel|--export-web]"
    ;;
  "")
    run_expo start
    ;;
  *)
    echo "Unknown option: $1" >&2
    echo "Usage: ./script/build_and_run.sh [--android|--ios|--web|--dev-client|--tunnel|--export-web]" >&2
    exit 2
    ;;
esac
