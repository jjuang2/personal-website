# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your personal website to GitHub Pages, even if you're not a coder!

## 📋 Prerequisites

Before we start, make sure you have:
- A GitHub account (free)
- Git installed on your computer
- Node.js installed (download from [nodejs.org](https://nodejs.org/))

## 🎯 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" button in the top right corner
3. Select "New repository"
4. Name your repository: `personal-website` (or your preferred name)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. Check "Add a README file"
7. Click "Create repository"

### Step 2: Upload Your Code to GitHub

#### Option A: Using GitHub Desktop (Easiest for non-coders)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "Clone a repository from the Internet"
4. Select your `personal-website` repository
5. Choose a local folder to save it
6. Copy all your website files into this folder
7. In GitHub Desktop, you'll see all your files listed
8. Add a commit message like "Initial website upload"
9. Click "Commit to main"
10. Click "Push origin" to upload to GitHub

#### Option B: Using Command Line (if you're comfortable)
```bash
# Navigate to your project folder
cd /path/to/your/personal-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial website upload"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: 

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### Step 4: Deploy Your Website

#### Using GitHub Actions (Recommended - Automatic)

1. In your repository, go to "Actions" tab
2. Click "New workflow"
3. Click "set up a workflow yourself"
4. Replace the content with this code:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Click "Start commit"
6. Add a commit message like "Add GitHub Pages deployment"
7. Click "Commit new file"

#### Manual Deployment (Alternative)

If you prefer manual control:

1. Open terminal/command prompt in your project folder
2. Run these commands:

```bash
# Build your website
npm run build

# Create a .nojekyll file (tells GitHub Pages to not use Jekyll)
touch out/.nojekyll

# Add the build files to git
git add out/
git commit -m "Deploy to GitHub Pages"

# Create and switch to gh-pages branch
git checkout -b gh-pages

# Push the gh-pages branch
git push origin gh-pages

# Switch back to main branch
git checkout main
```

### Step 5: Access Your Website

1. Go to your repository settings
2. Scroll to "Pages" section
3. Your website will be available at: `https://YOUR_USERNAME.github.io/personal-website/`

## 🔧 Customizing Your Website

### Updating Content

1. Edit files in your project folder
2. Commit and push changes to GitHub
3. If using GitHub Actions, your site will automatically update
4. If using manual deployment, repeat the deployment steps

### Adding New Blog Posts

1. Create a new file in `app/blog/[slug]/page.tsx`
2. Add the post data to the `blogPosts` object
3. Update the blog listing in `app/blog/page.tsx`
4. Deploy your changes

### Changing Colors and Styling

1. Edit `app/globals.css` for global styles
2. Edit individual page files for specific styling
3. The website uses Tailwind CSS for styling

## 🎨 Design Elements Explained

### Color Scheme
- **Sage Green**: Professional, nature-inspired
- **Warm Oat**: Soft, welcoming background
- **Charcoal**: High contrast text
- **Off White**: Clean, modern background

### Layout Structure
- **Header**: Navigation with your logo
- **Hero Section**: Eye-catching introduction
- **Content Sections**: Organized information
- **Footer**: Contact links and copyright

### Responsive Design
- Works on desktop, tablet, and mobile
- Images and text scale appropriately
- Navigation adapts to screen size

## 🚨 Troubleshooting

### Common Issues

**Website not loading:**
- Check that your repository is public
- Verify GitHub Pages is enabled in settings
- Wait 5-10 minutes after deployment

**Images not showing:**
- Make sure image paths start with `/`
- Check that images are in the `public` folder
- Verify file names match exactly

**Styling looks wrong:**
- Clear your browser cache
- Check that all CSS files are included
- Verify Tailwind CSS is working

**Build errors:**
- Check the Actions tab for error messages
- Make sure all dependencies are installed
- Verify file paths are correct

### Getting Help

1. Check the GitHub Actions logs for error messages
2. Search for similar issues on GitHub
3. Ask for help in GitHub Discussions
4. Contact the developer who set this up

## 🎉 Congratulations!

Your personal website is now live! You can:
- Share the URL with potential employers
- Update content whenever you want
- Add new projects and blog posts
- Customize the design to match your style

Remember to keep your content updated and professional, as this represents you online!


