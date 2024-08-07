#!/bin/bash

set -e


echo "something something something"

cd "$(git rev-parse --show-toplevel)"
git pull origin staging
docker compose --project-name staging-nextjs -f docker/staging/docker-compose.yml up -d
