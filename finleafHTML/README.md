# FinLeaf - CA & Legal Consultancy Website

A professional website for FinLeaf, a leading CA (Chartered Accountant) and legal consultancy firm based in Vasundhara, India.

## 🚀 Features

- **Professional Design**: Modern, responsive design optimized for all devices
- **Service Showcase**: Comprehensive display of CA, CS, and legal services
- **Interactive Elements**: Sliders, flip cards, and animated counters
- **Contact Integration**: Direct appointment booking via Calendly
- **SEO Optimized**: Built with SEO best practices

## 📁 Project Structure

```
finleafHTML/
├── css/           # Stylesheets
├── js/            # JavaScript files
├── images/        # Website images
├── fonts/         # Custom fonts
├── index.html     # Main homepage
├── vercel.json    # Vercel configuration
└── README.md      # This file
```

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (jQuery)
- Elementor (WordPress page builder)
- Responsive design principles

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `finleaf-website` (or your preferred name)
   - Directory: `./` (current directory)

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/finleaf-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Click "Deploy"

### Option 3: Drag & Drop Deployment

1. **Zip your project**:
   - Select all files in your project folder
   - Create a ZIP archive

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in to your account
   - Click "New Project"
   - Choose "Upload" option
   - Drag and drop your ZIP file
   - Click "Deploy"

## ⚙️ Configuration

The `vercel.json` file includes:
- Static site configuration
- Security headers
- Cache optimization for static assets
- Proper routing

## 🔧 Customization

### Updating Content
- Edit `index.html` for main content changes
- Modify CSS files in the `css/` directory for styling
- Update images in the `images/` directory

### Domain Configuration
After deployment, you can:
1. Add a custom domain in Vercel dashboard
2. Configure DNS settings
3. Enable HTTPS (automatic with Vercel)

## 📱 Performance Optimization

The deployment includes:
- **Caching**: Static assets cached for 1 year
- **Compression**: Automatic gzip compression
- **CDN**: Global content delivery network
- **Security**: XSS protection and content type headers

## 🆘 Support

For deployment issues:
1. Check Vercel deployment logs
2. Verify all file paths are correct
3. Ensure `index.html` is in the root directory
4. Contact Vercel support if needed

## 📄 License

This project is proprietary to FinLeaf. All rights reserved.

---

**FinLeaf**: Where Expertise Meets Excellence in CA, CS, & Legal Consultancy
