#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

# Check if the current branch is "production"
if git diff --quiet --exit-code -- packages/server ; then
  # Check if there are changes in the "packages/server" folder
  exit 1;
  # if [[ "$VERCEL_ENV" == "production" ]] ; then
  #   # No changes in "packages/server" folder, so cancel the build
  #   echo "🛑 - Build cancelled for non-production environment."
  #   exit 0;
  # else
  #   # Proceed with the build since there are changes in "packages/server" folder
  #   echo "✅ - Build can proceed"
  #   exit 1;
  fi
else
  # Don't build for non-production environments
  echo "🛑 - No changes in 'packages/server' folder. Build cancelled."
  exit 0;
fi
