#!/usr/bin/env bash
# HOL 2: .gitignore - ignore .log files and log/ folders
cd ~/GitDemo

touch app.log error.log
mkdir -p log && touch log/debug.log log/error.log

echo "=== Status BEFORE .gitignore ==="
git status

cat > .gitignore << 'IGNORE'
*.log
log/
IGNORE

echo "=== Status AFTER .gitignore (.log and log/ should not appear) ==="
git status

git add .gitignore
git commit -m "Add .gitignore: exclude .log files and log/ folders"
git status
