#!/bin/bash

set -e

# ─── Config ──────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATES_DIR="$SCRIPT_DIR/../templates"

AVAILABLE_TEMPLATES=$(ls -1 "$TEMPLATES_DIR" 2>/dev/null | tr '\n' ', ' | sed 's/,$//')

# ─── Usage ───────────────────────────────────────────────────────────

usage() {
  echo "Usage: $0 <template> <project-name>"
  echo ""
  echo "Available templates: $AVAILABLE_TEMPLATES"
  echo ""
  echo "Examples:"
  echo "  $0 ecommerce my-store"
  echo "  $0 dashboard admin-panel"
  echo "  $0 landing my-landing-page"
  exit 1
}

# ─── Validate Args ───────────────────────────────────────────────────

if [ $# -lt 2 ]; then
  usage
fi

TEMPLATE="$1"
PROJECT_NAME="$2"
TEMPLATE_DIR="$TEMPLATES_DIR/$TEMPLATE"

if [ ! -d "$TEMPLATE_DIR" ]; then
  echo "Error: Template '$TEMPLATE' not found."
  echo "Available templates: $AVAILABLE_TEMPLATES"
  exit 1
fi

if [ -d "$PROJECT_NAME" ]; then
  echo "Error: Directory '$PROJECT_NAME' already exists."
  exit 1
fi

# ─── Scaffold ────────────────────────────────────────────────────────

echo "Creating project '$PROJECT_NAME' from '$TEMPLATE' template..."

cp -r "$TEMPLATE_DIR" "$PROJECT_NAME"

# Replace placeholder values
find "$PROJECT_NAME" -type f -name "*.json" -exec sed -i '' "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" {} + 2>/dev/null || \
find "$PROJECT_NAME" -type f -name "*.json" -exec sed -i "s/{{PROJECT_NAME}}/$PROJECT_NAME/g" {} +

# Copy .env.example to .env
if [ -f "$PROJECT_NAME/.env.example" ]; then
  cp "$PROJECT_NAME/.env.example" "$PROJECT_NAME/.env"
  echo "Created .env from .env.example — update it with your values."
fi

# Initialize git repo
cd "$PROJECT_NAME"
git init -q
git add .
git commit -q -m "init: scaffold from $TEMPLATE template"

# Install dependencies
if command -v npm &>/dev/null; then
  echo "Installing dependencies..."
  npm install --silent
else
  echo "npm not found. Run 'npm install' manually."
fi

echo ""
echo "Done! Your project is ready."
echo ""
echo "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  # Update .env with your configuration"
echo "  npm run dev"
echo ""
