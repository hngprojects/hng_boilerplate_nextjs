#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin main
docker compose --project-name prod-nextjs -f docker/prod/docker-compose.yml up -d
