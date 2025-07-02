# Modern Portfolio with React & Material-UI

A beautiful, modern portfolio website built with React and Material-UI. Features smooth animations, responsive design, and a clean, professional look.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Material-UI components
- **Responsive**: Works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Gradient Theme**: Beautiful purple/blue gradient color scheme
- **Interactive Elements**: Hover effects and smooth transitions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Material-UI (MUI) 5** - Professional UI components
- **Framer Motion** - Smooth animations
- **React Scroll** - Smooth scrolling navigation
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors & Theme
Edit the theme in `src/App.js`:
```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea', // Your primary color
      light: '#f093fb',
      dark: '#764ba2',
    },
    // ... more colors
  },
});
```

### Content
Update your information in the component files:
- `src/components/Hero.js` - Your name and title
- `src/components/About.js` - About section content
- `src/components/Experience.js` - Work experience
- `src/components/Education.js` - Education details
- `src/components/Projects.js` - Your projects
- `src/components/Skills.js` - Your skills
- `src/components/Contact.js` - Contact form
- `src/components/Footer.js` - Social links

### Images
Replace images in the `public/images/` folder:
- `lead-bg.jpg` - Hero background image
- `project.jpg` - Project thumbnails

## 📱 Sections

1. **Hero** - Eye-catching introduction with gradient background
2. **About** - Personal information and background
3. **Experience** - Work history with timeline
4. **Education** - Academic background
5. **Projects** - Portfolio of your work
6. **Skills** - Technical skills and technologies
7. **Contact** - Contact form and information
8. **Footer** - Social links and copyright

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build your project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub. 