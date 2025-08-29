# PowerShell script to update URLs in index.html
# Replace the old domain with your new Vercel domain

$oldDomain = "https://finleaf.in"
$newDomain = "https://finleaf-html-5ucl0p3fh-passionatesandy2004s-projects.vercel.app"

Write-Host "Updating URLs from $oldDomain to $newDomain..." -ForegroundColor Yellow

# Read the HTML file
$content = Get-Content "index.html" -Raw -Encoding UTF8

# Replace all occurrences
$updatedContent = $content -replace [regex]::Escape($oldDomain), $newDomain

# Write back to file
$updatedContent | Set-Content "index.html" -Encoding UTF8

Write-Host "URLs updated successfully!" -ForegroundColor Green
Write-Host "You can now redeploy with: vercel --prod" -ForegroundColor Cyan
