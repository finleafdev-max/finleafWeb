# 🚀 FinLeaf Website Deployment Guide

## Quick Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Open Command Prompt/Terminal** in your project folder (`d:\finleafHTML`)

2. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

3. **Login to Vercel**:
   ```bash
   vercel login
   ```

4. **Deploy**:
   ```bash
   vercel
   ```

5. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `finleaf-website`
   - Directory: `./` (press Enter)

### Method 2: Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in** with your account
3. **Click "New Project"**
4. **Choose "Upload"**
5. **Select all files** in your `finleafHTML` folder and create a ZIP
6. **Drag and drop** the ZIP file
7. **Click "Deploy"**

### Method 3: GitHub Integration

1. **Create a GitHub repository**
2. **Upload your files** to GitHub
3. **Connect Vercel to GitHub**
4. **Import the repository**
5. **Deploy automatically**

## ⚠️ Important Notes

### URL Updates Needed
After deployment, you'll need to update the absolute URLs in `index.html`:

**Current URLs to Update:**
- `https://finleaf.in/` → Your new Vercel URL
- `https://finleaf.in/about-us/` → `https://your-domain.vercel.app/about-us/`
- `https://finleaf.in/services/` → `https://your-domain.vercel.app/services/`
- etc.

### Quick URL Update Script
You can use this PowerShell script to update URLs:

```powershell
# Replace 'your-domain.vercel.app' with your actual Vercel domain
$newDomain = "your-domain.vercel.app"
$content = Get-Content "index.html" -Raw
$content = $content -replace "https://finleaf\.in", "https://$newDomain"
$content | Set-Content "index.html"
```

## 🎯 After Deployment

1. **Get your Vercel URL** (e.g., `https://finleaf-website.vercel.app`)

2. **Update URLs** in `index.html`:
   - Replace all `https://finleaf.in` with your Vercel URL
   - Update canonical URLs
   - Update meta tags

3. **Redeploy** if needed:
   ```bash
   vercel --prod
   ```

4. **Add Custom Domain** (Optional):
   - Go to Vercel Dashboard
   - Project Settings → Domains
   - Add your custom domain

## 🔧 Troubleshooting

### Common Issues:

1. **Images not loading**: Check file paths are relative
2. **CSS/JS not working**: Verify all files are in correct folders
3. **Links broken**: Update absolute URLs to your domain

### File Structure Check:
```
finleafHTML/
├── index.html ✅
├── css/ ✅
├── js/ ✅
├── images/ ✅
├── fonts/ ✅
├── vercel.json ✅
└── README.md ✅
```

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

**Your FinLeaf website will be live at**: `https://your-project-name.vercel.app`
