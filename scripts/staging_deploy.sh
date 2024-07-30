#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker pull hngdevops/nextjs-boilerplate:staging
docker compose --project-name staging-nextjs -f docker/staging/docker-compose.yml up -d
