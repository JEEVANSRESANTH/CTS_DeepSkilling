#!/usr/bin/env bash
# HOL 5: Pull from remote and push pending local changes
cd ~/GitDemo

echo "=== Verify master is clean ==="
git status

echo "=== List all branches ==="
git branch -a

echo "=== Pull from remote repository ==="
git pull origin main
# Use 'master' if your default branch is master: git pull origin master

echo "=== Push pending commits to remote ==="
git push origin main

echo "=== Last 5 commits ==="
git log --oneline -5
echo "Visit your GitLab/GitHub repo URL in the browser to confirm."
