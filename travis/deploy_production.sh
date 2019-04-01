#!/bin/bash

set -ev

# Only:
# - Tagged commits
# - Security env variables are available.
if [ -n "$LATEST_TAG" ] && [ -n "$PROD_DEPLOYMENT_HOOK_TOKEN" ] && [ -n "$PROD_DEPLOYMENT_HOOK_URL_DOMAIN" ]
then
  # Print only the request response code
  curl --silent --output /dev/null --write-out "%{http_code}" -X POST \
     -F token="$PROD_DEPLOYMENT_HOOK_TOKEN" \
     -F ref=master \
     -F "variables[TRIGGER_RELEASE_COMMIT_TAG]=$LATEST_TAG" \
     -F "variables[TRIGGER_TRAVIS_COMMIT]=$TRAVIS_COMMIT" \
     -F "variables[TRIGGER_TRAVIS_BUILD_WEB_URL]=$TRAVIS_BUILD_WEB_URL" \
      "$PROD_DEPLOYMENT_HOOK_URL_DOMAIN"
else
  echo "[ERROR] Production deployment could not be prepared"
fi
