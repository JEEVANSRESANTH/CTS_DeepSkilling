#!/usr/bin/env bash
# HOL 1: Git Configuration, init, add, commit, push
echo "=== Check Git installation ==="
git --version

echo "=== Configure user identity ==="
git config --global user.name  "Jeevan"
git config --global user.email "jeevan@example.com"

echo "=== Verify configuration ==="
git config --list

# Optionally set Notepad++ as editor (uncomment after installing Notepad++)
# git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

echo "=== Initialise local repository ==="
mkdir -p ~/GitDemo && cd ~/GitDemo
git init
echo "# GitDemo Project" > README.md
git add README.md
git commit -m "Initial commit: Add README"

# Replace <your-gitlab-url> with your project remote URL
# git remote add origin <your-gitlab-url>
# git push -u origin main

git status
git log --oneline
