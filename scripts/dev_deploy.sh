#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin dev
docker compose --project-name dev-nextjs -f docker/development/docker-compose.yml up -d
