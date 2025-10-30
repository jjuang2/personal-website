# 🌟 Jason Juang's Personal Website

A modern, professional personal website built with Next.js and designed for GitHub Pages hosting.

## 🎯 What This Website Includes

### 📄 **Landing Page** (`/`)
- Professional hero section with your photo and introduction
- Clear call-to-action buttons to explore your work
- Responsive design that looks great on all devices

### 👨‍💼 **About Page** (`/about`)
- Detailed professional biography
- Academic achievements and recognition
- Links to your research and publications
- Professional photo and personal touch

### 🚀 **Projects Page** (`/projects`)
- **Featured Research & Publications**: Your Nature Scientific Reports paper and other academic work
- **Professional Writing**: Blog posts and articles you've written
- **Competition Projects & Recognition**: Awards and notable achievements
- Interactive cards with links to full papers and articles

### 📝 **Blog Page** (`/blog`)
- Clean, searchable blog interface
- Category filtering (Climate Research, Personal Reflections, Taiwan Life, Writing)
- Recent posts sidebar
- Individual blog post pages with full content
- Professional typography and reading experience


## 🎨 Design Features

### **Color Palette**
- **Sage Green** (`#9CAF88`): Professional, nature-inspired primary color
- **Warm Oat** (`#F5F1E8`): Soft, welcoming background
- **Charcoal** (`#2C2C2C`): High contrast text
- **Off White** (`#FAFAFA`): Clean, modern background

### **Typography**
- **Inter Font**: Modern, highly readable typeface
- **Light weights**: Clean, professional appearance
- **Responsive sizing**: Scales beautifully across devices

### **Layout**
- **Mobile-first design**: Works perfectly on phones, tablets, and desktops
- **Clean navigation**: Easy-to-use menu system
- **Consistent spacing**: Professional, organized appearance
- **High-quality images**: Optimized for fast loading

## 🛠️ Technical Details

### **Built With**
- **Next.js 15**: Modern React framework for fast, SEO-friendly websites
- **TypeScript**: Type-safe JavaScript for reliability
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Beautiful, consistent icons
- **Static Export**: Optimized for GitHub Pages hosting

### **Features**
- ✅ **Fully Responsive**: Works on all screen sizes
- ✅ **SEO Optimized**: Search engine friendly
- ✅ **Fast Loading**: Optimized images and code
- ✅ **Accessible**: Follows web accessibility guidelines
- ✅ **Modern Design**: Clean, professional appearance
- ✅ **Easy to Update**: Simple content management

## 📁 File Structure

```
personal-website/
├── app/                    # Main application pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   ├── projects/          # Projects portfolio
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Main layout wrapper
│   └── page.tsx           # Landing page
├── components/            # Reusable components
│   ├── navigation.tsx     # Navigation menu
│   └── ui/               # UI components (buttons, cards, etc.)
├── public/               # Static assets (images, icons)
├── styles/               # Additional stylesheets
└── DEPLOYMENT_GUIDE.md   # Step-by-step deployment instructions
```

## 🚀 Getting Started

### **For Development** (if you want to make changes)
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Open terminal/command prompt in this folder
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start development server
5. Open [http://localhost:3000](http://localhost:3000) in your browser

### **For Deployment** (to make it live on the internet)
Follow the detailed instructions in `DEPLOYMENT_GUIDE.md` - it's designed for non-coders!

## 📝 Customizing Your Content

### **Personal Information**
- **Name**: Update in `app/layout.tsx` and throughout the site
- **Bio**: Edit the content in `app/about/page.tsx`
- **Social Links**: Update URLs in navigation and footer components

### **Projects & Research**
- **Add New Projects**: Edit the arrays in `app/projects/page.tsx`
- **Update Publications**: Modify the featured research section
- **Add Achievements**: Update the accolades section

### **Blog Posts**
- **Add New Posts**: Create new files in `app/blog/[slug]/page.tsx`
- **Update Blog List**: Modify the `blogPosts` array in `app/blog/page.tsx`
- **Categories**: Add new categories as needed

### **Images**
- **Profile Photos**: Replace images in the `public/` folder
- **Project Images**: Add your own project screenshots
- **Blog Images**: Add featured images for blog posts

## 🎯 Professional Tips

### **Content Strategy**
1. **Keep it updated**: Regularly add new projects and blog posts
2. **Be authentic**: Let your personality shine through
3. **Show your work**: Include specific examples and results
4. **Tell your story**: Explain your journey and motivations

### **SEO Optimization**
- The site is already optimized for search engines
- Use descriptive titles and descriptions
- Include relevant keywords naturally
- Add alt text to images

### **Professional Presentation**
- Use high-quality images
- Keep content concise but informative
- Proofread everything carefully
- Keep your social media links updated

## 🆘 Need Help?

### **Common Questions**
- **"How do I add a new blog post?"** → Check the blog section in `DEPLOYMENT_GUIDE.md`
- **"How do I change my photo?"** → Replace the image files in the `public/` folder
- **"How do I update my bio?"** → Edit the content in `app/about/page.tsx`
- **"My website isn't loading!"** → Check the troubleshooting section in `DEPLOYMENT_GUIDE.md`

### **Getting Support**
1. Check the `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Look at the file structure to understand how things are organized
3. Ask for help from someone technical if needed
4. The code is well-commented and organized for easy understanding

## 🎉 You're All Set!

Your personal website is professionally designed and ready to showcase your work. The clean, modern design will make a great impression on potential employers, collaborators, and anyone interested in your research and writing.

Remember: This website represents you online, so keep it updated and professional. Good luck with your career in climate research and environmental policy!

