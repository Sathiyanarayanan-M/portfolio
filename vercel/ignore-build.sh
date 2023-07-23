#!/bin/bash

echo "VERCEL_ENV: $VERCEL_ENV"

# Check if there are changes in the 'packages/server' folder
if git diff --name-only HEAD@{1}..HEAD | grep -q "^packages/server"; then
    echo "🔍 - Found changes in 'packages/server' folder."
    
    if [[ "$VERCEL_ENV" == "production" ]]; then
        # Proceed with the build for production
        echo "✅ - Build can proceed"
        exit 0;
    else
        # Don't build for non-production environments
        echo "🛑 - Build cancelled. Only building for production."
        exit 1;
    fi

else
    echo "🛑 - No changes in 'packages/server' folder. Build cancelled."
    exit 1;
fi
