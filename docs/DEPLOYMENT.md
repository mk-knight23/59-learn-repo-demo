# The Learning Museum - Deployment Guide

A comprehensive guide for deploying the Vue 3 Learning Museum application with 90s retro web aesthetic.

## Table of Contents

1. [Local Development](#local-development)
2. [Vercel Deployment](#vercel-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [GitHub Pages Deployment](#github-pages-deployment)
5. [Production Considerations](#production-considerations)
6. [90s Web Features Guide](#90s-web-features-guide)

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Vue CLI (optional)
- git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mk-knight23/30-repo-demo-v1.git
   cd 30-repo-demo-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser.

### Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Vercel Deployment

### Prerequisites

- Vercel account
- Vercel CLI installed

### Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```
   Follow the prompts to link your repository and deploy.

3. **Environment Variables**
   - Add `NODE_ENV` with value `production`

### Automatic Deployment

Vercel will automatically deploy on:
- Push to main branch
- Pull request merges
- Tag releases

## Netlify Deployment

### Prerequisites

- Netlify account
- Git repository connected

### Steps

1. **Connect GitHub repository**
   - Go to Netlify dashboard
   - "New site from Git"
   - Select your repository

2. **Build Settings**
   ```yaml
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   ```
   NODE_ENV: production
   ```

4. **Deploy**
   - Click "Deploy site"

### Manual Deployment

Deploy directly via Git:
```bash
git add .
git commit -m "Deploy to Netlify"
git push origin main
```

## GitHub Pages Deployment

### Prerequisites

- GitHub account
- Repository configured for GitHub Pages

### Steps

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/59-starter-repo-demo/',
     // ... rest of config
   })
   ```

2. **Install GitHub Pages dependency**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Add scripts to package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist",
     "predeploy": "npm run build"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages section
   - Source: GitHub Actions
   - Branch: gh-pages

## Production Considerations

### Performance Optimization

1. **Build Optimization**
   ```bash
   # Build optimized
   npm run build

   # Analyze bundle
   npm run analyze
   ```

2. **Caching**
   - Enable static asset caching
   - Use CDN for distribution
   - Implement proper cache headers

3. **Code Splitting**
   - Lazy load components
   - Route-based splitting
   - Dynamic imports

### 90s Web Features

The museum recreates authentic 90s web elements:

#### Intentional Design Choices

- **Color Palette**: Authentic 90s colors with modern accessibility adjustments
- **Animations**: CSS-based, no JavaScript frameworks for retro feel
- **Typography**: Courier and Times New Roman for that authentic look
- **Layout**: Tables and fixed-width designs

#### Authentic 90s Elements

1. **Hit Counters**
   - Static display (for aesthetic)
   - Classic 7-segment display font
   - Increment animation on page load

2. **Under Construction Badges**
   - Animated "Under Construction" text
   - Classic construction theme
   - Retro color scheme

3. **Marquee Headers**
   - Scrolling text
   - Classic HTML marquee effect
   - 90s-style typography

4. **Guestbook**
   - Local storage persistence
   - Classic form styling
   - Retro timestamp format

### Security

1. **Environment Variables**
   ```bash
   # Create .env.production
   NODE_ENV=production
   DEBUG=false
   ```

2. **Security Headers**
   - Content Security Policy allows only inline styles and scripts
   - Frame options for security
   - XSS protection

### Deployment Scripts

Create `scripts/deploy.sh`:
```bash
#!/bin/bash

# Build and deploy script
echo "Building Learning Museum..."
npm run build

echo "Deploying to production..."
npm run deploy

echo "Deployment complete! Enjoy the 90s nostalgia!"
```

## Screenshots

### Key Features

1. **Main Museum Entrance**
   - Welcome message with blinking cursor
   - Navigation to galleries
   - Retro counter display

2. **Intro Gallery**
   - Vue 3 composition API examples
   - Interactive demonstrations
   - Retro styling

3. **Components Gallery**
   - Component showcase
   - Props and examples
   - Classic UI elements

4. **Patterns Gallery**
   - Real-world examples
   - Best practices
   - 90s-inspired solutions

### Responsive Design

While embracing 90s aesthetics, the site includes:
- Mobile-friendly navigation
- Accessible color combinations
- Readable text sizes
- Touch-friendly interactions

## Testing

### Run Tests

```bash
# Frontend tests
npm test

# E2E tests (Playwright)
npm run test:e2e

# Component tests
npm run test:components
```

### Test Coverage

```bash
# Generate coverage report
npm run test:coverage

# Upload to codecov
npm run test:codecov
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version
   - Verify dependencies installed
   - Check TypeScript errors

2. **Deployment Errors**
   - Verify environment variables
   - Check build logs
   - Ensure correct build command

3. **Runtime Errors**
   - Check console errors
   - Verify Vue components
   - Check network requests

### 90s Web Specific Issues

1. **Font Loading**
   - Ensure web-safe fonts load
   - Fallback for custom fonts
   - Cross-browser compatibility

2. **Animation Issues**
   - Test CSS animations
   - Check mobile compatibility
   - Verify performance

3. **Local Storage**
   - Check browser support
   - Handle storage limits
   - Provide fallback options

## Contributing

### Before Deploying

1. Test all interactive features
2. Verify 90s aesthetic consistency
3. Check mobile responsiveness
4. Run tests
5. Build project

### Deployment Checklist

- [ ] All Vue components working
- [ ] 90s styling consistent
- [ ] Interactive features functional
- [ ] Build successful
- [ ] Tests passing
- [ ] Environment variables set
- [ ] Documentation updated

## Support

If you encounter issues during deployment:

1. Check the troubleshooting section
2. Review GitHub issues
3. Create a new issue with:
   - Deployment platform
   - Error messages
   - Steps to reproduce
   - Browser and device info

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [90s Web Design Inspiration](https://web.archive.org/web/19991231023941/http://www.geocities.com/)

## License

MIT - Feel free to use and modify for your own 90s web projects!

---

*Best viewed in Netscape Navigator or Internet Explorer 4.0 for full authenticity.*