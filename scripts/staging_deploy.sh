#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 {next|remix}"
  exit 1
fi

if [ "$1" == "next" ]; then
  cd /home/nextjs/staging/hng_boilerplate_nextjs
  git pull origin staging
  docker compose -f docker/staging/docker-compose.yml build
  docker compose -f docker/staging/docker-compose.yml up -d
elif [ "$1" == "remix" ]; then
  cd /home/remixjs/staging/hng_boilerplate_remix
  git pull origin staging
  docker compose -f docker/staging/docker-compose.yml build
  docker compose -f docker/staging/docker-compose.yml up -d
else
  echo "Invalid argument. Use 'next' or 'remix'."
  echo "Usage: $0 {next|remix}"
  exit 1
fi
