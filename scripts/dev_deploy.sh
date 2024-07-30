#!/bin/bash

set -e

cd "$(git rev-parse --show-toplevel)"
git pull origin dev
docker pull hngdevops/nextjs-boilerplate:dev
docker compose --project-name dev-nextjs -f docker/development/docker-compose.yml up -d
