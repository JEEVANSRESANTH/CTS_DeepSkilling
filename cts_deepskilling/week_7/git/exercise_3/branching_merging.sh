#!/usr/bin/env bash
# HOL 3: Create branch, commit changes, merge to master, delete branch
cd ~/GitDemo

echo "--- Create GitNewBranch ---"
git branch GitNewBranch
git branch -a

echo "--- Switch to GitNewBranch ---"
git checkout GitNewBranch

echo "--- Add feature file and commit ---"
echo "Feature work in branch" > feature.txt
git add feature.txt
git commit -m "Add feature.txt in GitNewBranch"
git status

echo "--- Switch back to master ---"
git checkout master

echo "--- CLI diff between master and branch ---"
git diff master..GitNewBranch

echo "--- Merge GitNewBranch into master ---"
git merge GitNewBranch -m "Merge GitNewBranch into master"

echo "--- Log after merge ---"
git log --oneline --graph --decorate

echo "--- Delete merged branch ---"
git branch -d GitNewBranch
git branch -a
