#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "Usage: $0 {next|remix}"
  exit 1
fi

if [ "$1" == "next" ]; then
  cd /home/nextjs/dev/hng_boilerplate_nextjs
  git pull origin dev
  docker compose -f docker/development/docker-compose.yml build
  docker compose -f docker/development/docker-compose.yml up -d
elif [ "$1" == "remix" ]; then
  cd /home/remixjs/dev/hng_boilerplate_remix
  git pull origin dev
  docker compose -f docker/development/docker-compose.yml build
  docker compose -f docker/development/docker-compose.yml up -d
else
  echo "Invalid argument. Use 'next' or 'remix'."
  echo "Usage: $0 {next|remix}"
  exit 1
fi

