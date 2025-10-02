# Script to upload Z-I-V portfolio to GitHub
# Run this after installing Git

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Z-I-V Portfolio - GitHub Upload" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. Install with default settings" -ForegroundColor Yellow
    Write-Host "3. Open a NEW PowerShell window" -ForegroundColor Yellow
    Write-Host "4. Run this script again" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit
}

Write-Host ""
Write-Host "Preparing to upload build to GitHub..." -ForegroundColor Yellow
Write-Host ""

# Navigate to the build directory
Set-Location "C:\Users\omerz\OneDrive\Documents\Projects\Z-I-V\out"

Write-Host "Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Initialize Git
Write-Host "→ Initializing Git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "→ Adding all files..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "→ Committing files..." -ForegroundColor Yellow
git commit -m "Initial commit - Z-I-V Portfolio build"

# Set branch to main
Write-Host "→ Setting branch to main..." -ForegroundColor Yellow
git branch -M main

# Add remote
Write-Host "→ Adding GitHub remote..." -ForegroundColor Yellow
git remote add origin https://github.com/omerzilber1403/ziv-edits.git

# Push to GitHub
Write-Host "→ Pushing to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "You may be prompted to login to GitHub..." -ForegroundColor Cyan
Write-Host ""

git push -u origin main

Write-Host ""
Write-Host "==================================" -ForegroundColor Green
Write-Host "✓ Upload Complete!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your portfolio is now on GitHub:" -ForegroundColor Cyan
Write-Host "https://github.com/omerzilber1403/ziv-edits" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next step: Connect to Netlify" -ForegroundColor Yellow
Write-Host "1. Go to: https://app.netlify.com/" -ForegroundColor Yellow
Write-Host "2. Add new site → Import from GitHub" -ForegroundColor Yellow
Write-Host "3. Select 'ziv-edits' repository" -ForegroundColor Yellow
Write-Host "4. Leave build settings empty" -ForegroundColor Yellow
Write-Host "5. Deploy!" -ForegroundColor Yellow
Write-Host ""

Read-Host "Press Enter to exit"

