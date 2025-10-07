@echo off
echo Deploying to GitHub Pages...
call build-github.bat
git add out/
git commit -m "Deploy: Update site"
git push origin main
echo Deploy completed!




