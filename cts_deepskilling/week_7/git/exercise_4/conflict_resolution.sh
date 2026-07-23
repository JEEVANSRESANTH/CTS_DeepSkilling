#!/usr/bin/env bash
# HOL 4: Simulate and resolve a merge conflict
cd ~/GitDemo

echo "=== Create GitWork branch and add hello.xml ==="
git checkout -b GitWork
cat > hello.xml << 'XML'
<greeting>
  <message>Hello from GitWork branch!</message>
</greeting>
XML
git add hello.xml
git commit -m "Add hello.xml in GitWork"

echo "=== Switch to master and add conflicting hello.xml ==="
git checkout master
cat > hello.xml << 'XML'
<greeting>
  <message>Hello from MASTER branch!</message>
</greeting>
XML
git add hello.xml
git commit -m "Add hello.xml in master"

echo "=== Log before merge ==="
git log --oneline --graph --decorate --all

echo "=== Attempt merge — will produce conflict ==="
git merge GitWork || echo "CONFLICT in hello.xml — resolving..."

echo "=== Resolved file (accept both changes) ==="
cat > hello.xml << 'XML'
<greeting>
  <message>Hello from MASTER branch!</message>
  <message>Hello from GitWork branch!</message>
</greeting>
XML

git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Add *.orig to .gitignore after conflict resolution"

git branch -d GitWork
echo "=== Final log ==="
git log --oneline --graph --decorate
