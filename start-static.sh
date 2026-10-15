#!/bin/sh
set -eu
case "$(printf '%s' "${DEMO_MODE:-off}" | tr '[:upper:]' '[:lower:]')" in
  on|true|1) flag=true ;;
  *) flag=false ;;
esac
printf 'window.__SITE_DEMO_ENABLED__ = %s;\n' "$flag" > /srv/runtime-config.js
exec caddy file-server --root /srv --listen :8080
