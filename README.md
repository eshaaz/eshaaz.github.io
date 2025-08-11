# Eshaaz - Bengali Women's Fashion Brand Website

A responsive single-page landing website for Eshaaz, an online women's clothing brand based in Bangladesh, specializing in Bengali fashion and culture-inspired designs.

## 🌟 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Bengali Cultural Aesthetics**: Design inspired by Bengali patterns and traditional motifs
- **Modern Tech Stack**: Built with HTML5, CSS3, Bootstrap 5, FontAwesome, and JavaScript
- **Interactive Elements**: Smooth scrolling, form validation, hover effects, and animations
- **Brand Integration**: Custom logo integration and brand color scheme (#94303d)

## 📱 Sections

1. **Navigation Bar**: Sticky navbar with brand logo and responsive hamburger menu
2. **Hero Section**: Full-width banner with cultural background patterns and call-to-action
3. **About Section**: Brand story and mission with high-quality imagery
4. **Collection Section**: 8-product grid showcase with pricing in Bangladeshi Taka (৳)
5. **Why Choose Us**: Feature highlights with FontAwesome icons
6. **Contact Section**: Contact form with JavaScript validation and social media links
7. **Footer**: Brand information and social media links

## 🎨 Design Elements

- **Primary Color**: #94303d (Brand Color)
- **Fonts**: Playfair Display (headings) and Open Sans (body text)
- **Images**: High-quality stock images from Unsplash showcasing Bengali fashion
- **Patterns**: Subtle Bengali-inspired background patterns using CSS
- **Animations**: Smooth transitions, hover effects, and scroll-triggered animations

## 🖼️ Stock Images Used

The website uses carefully selected stock images from Unsplash that represent:

- Traditional Bengali sarees and cultural attire
- Women in traditional South Asian clothing
- Fashion photography with warm, cultural tones
- High-resolution images optimized for web performance

### Image Sources:
- About section: Bengali woman in traditional attire
- Product cards: Various traditional and modern Bengali fashion pieces
- All images are properly attributed and optimized for fast loading

## 🚀 Technologies Used

- **HTML5**: Semantic structure and accessibility features
- **CSS3**: Custom styling with advanced features like gradients, animations, and flexbox
- **Bootstrap 5**: Responsive grid system and components
- **FontAwesome 6**: Free icons for enhanced visual appeal
- **JavaScript**: Form validation, smooth scrolling, and interactive features
- **Google Fonts**: Playfair Display and Open Sans font families

# Eshaaz - Bengali Women's Fashion Brand Website

A responsive single-page landing website for Eshaaz, an online women's clothing brand based in Bangladesh, specializing in Bengali fashion and culture-inspired designs.

## 🌟 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views
- **Bengali Cultural Aesthetics**: Design inspired by Bengali patterns and traditional motifs
- **Modern Tech Stack**: Built with HTML5, CSS3, Bootstrap 5, FontAwesome, and JavaScript
- **Interactive Elements**: Smooth scrolling, form validation, hover effects, and animations
- **Brand Integration**: Custom logo integration and brand color scheme (#94303d)
- **🆕 JSON-Based Content Management**: Easy content updates through `data.json` file
- **🆕 GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages

## 📱 Sections

1. **Navigation Bar**: Sticky navbar with brand logo and responsive hamburger menu
2. **Hero Section**: Full-width banner with cultural background patterns and call-to-action
3. **About Section**: Brand story and mission with high-quality imagery
4. **Collection Section**: 8-product grid showcase with pricing in Bangladeshi Taka (৳)
5. **Why Choose Us**: Feature highlights with FontAwesome icons
6. **Contact Section**: Contact form with JavaScript validation and social media links
7. **Footer**: Brand information and social media links

## 🎨 Design Elements

- **Primary Color**: #94303d (Brand Color)
- **Fonts**: Playfair Display (headings) and Open Sans (body text)
- **Images**: High-quality stock images from Unsplash showcasing Bengali fashion
- **Patterns**: Subtle Bengali-inspired background patterns using CSS
- **Animations**: Smooth transitions, hover effects, and scroll-triggered animations

## 🆕 Easy Content Management with JSON

All website content is now managed through the `data.json` file, making it incredibly easy to update without touching any code!

### � How to Update Content:

1. **Edit `data.json`** - All text, images, prices, and links are stored here
2. **Commit changes** - Push to GitHub repository
3. **Automatic update** - GitHub Pages will automatically rebuild your site

### 🏗️ JSON Structure:

```json
{
  "site": {
    "title": "Your Site Title",
    "brand": { "name": "Brand Name", "tagline": "Your Tagline" },
    "navigation": [...],
    "socialMedia": { "facebook": "link", "instagram": "link" }
  },
  "hero": { "title": "...", "subtitle": "...", "ctaText": "..." },
  "about": { "title": "...", "content": [...], "image": "..." },
  "collection": { "products": [...] },
  "features": { "items": [...] },
  "contact": { "title": "...", "subtitle": "..." },
  "footer": { "brandName": "...", "copyright": "..." }
}
```

### ✏️ Common Updates:

**Update Product Information:**
```json
{
  "name": "New Product Name",
  "price": 4500,
  "image": "https://new-image-url.jpg",
  "link": "https://facebook.com/your-page"
}
```

**Change Contact Information:**
```json
{
  "socialMedia": {
    "facebook": "https://facebook.com/eshaaz",
    "instagram": "https://instagram.com/eshaaz"
  }
}
```

**Update About Content:**
```json
{
  "about": {
    "content": [
      "New first paragraph...",
      "New second paragraph..."
    ]
  }
}
```

## 🚀 Technologies Used

- **HTML5**: Semantic structure with data attributes for dynamic content
- **CSS3**: Custom styling with advanced features like gradients, animations, and flexbox
- **Bootstrap 5**: Responsive grid system and components
- **FontAwesome 6**: Free icons for enhanced visual appeal
- **JavaScript**: Form validation, smooth scrolling, interactive features, and JSON data loading
- **Google Fonts**: Playfair Display and Open Sans font families
- **JSON**: Centralized content management

## �📁 File Structure

```
eshaaz.github.io/
├── index.html          # Main HTML file with data attributes
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript with JSON loading functionality
├── data.json           # 🆕 All website content (EDIT THIS FILE)
├── static/
│   └── images/
│       └── EshaazNewLogo.png  # Brand logo
└── README.md           # This file
```

## � GitHub Pages Deployment

### Option 1: Direct Upload
1. Create a new repository named `yourusername.github.io`
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose `main` branch
5. Your site will be live at `https://yourusername.github.io`

### Option 2: Custom Domain
1. Follow Option 1 steps
2. Add a `CNAME` file with your domain name
3. Configure your domain's DNS settings
4. Enable HTTPS in repository settings

## 🛠️ Local Development

### Setup:
```bash
# Clone the repository
git clone https://github.com/yourusername/eshaaz.github.io.git
cd eshaaz.github.io

# Start local server
python3 -m http.server 8000
# OR
npx http-server

# Visit: http://localhost:8000
```

### Making Changes:
1. **Edit `data.json`** for content changes
2. **Edit `styles.css`** for design changes
3. **Edit `script.js`** for functionality changes
4. **Test locally** before pushing to GitHub

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## ✨ Key Features

### Interactive Elements:
- Smooth scrolling navigation
- Form validation with real-time feedback
- Hover effects on product cards and buttons
- Social media integration placeholders
- Loading animations for sections
- Dynamic content loading from JSON

### Performance Optimizations:
- Optimized images for fast loading
- Debounced scroll events
- Efficient CSS animations
- Clean, semantic HTML structure
- Minimal JavaScript for fast page loads

## 🎯 Brand Focus

Eshaaz celebrates the timeless beauty of Bengali heritage through contemporary fashion, creating clothing that honors traditional Bengali aesthetics while embracing modern design sensibilities.

## 📞 Contact & Social Media

- **Tagline**: "Elegance of Bengali Womanhood"
- **Primary Sales Channel**: Facebook (with upcoming e-commerce)
- **Social Media**: Facebook and Instagram integration ready
- **Easy Updates**: Change social links in `data.json`

## 🔧 Customization Guide

### 1. **Content Updates** (Most Common):
- Edit `data.json` - No coding required!
- Update product names, prices, descriptions
- Change contact information and social links
- Modify about content and hero text

### 2. **Design Updates**:
- Edit CSS variables in `styles.css`:
  ```css
  :root {
    --primary-color: #94303d; /* Your brand color */
    --secondary-color: #d4af37; /* Accent color */
  }
  ```

### 3. **Image Updates**:
- Replace logo: Update file in `static/images/`
- Product images: Change URLs in `data.json`
- About image: Update URL in `data.json`

### 4. **Advanced Customization**:
- Modify layout in `index.html`
- Add new sections by extending the HTML and JSON structure
- Enhance functionality in `script.js`

## 📈 SEO & Performance

- **Semantic HTML5** structure for better SEO
- **Meta tags** for social media sharing
- **Optimized images** with proper alt text
- **Fast loading** with minimal dependencies
- **Mobile-first** responsive design

## 📝 License

This project is created for Eshaaz brand. All rights reserved.

---

**🚀 Now with easy JSON-based content management - Perfect for GitHub Pages!**

**Developed with ❤️ for Bengali fashion and culture**

## 📝 License

This project is created for Eshaaz brand. All rights reserved.

---

**Developed with ❤️ for Bengali fashion and culture**
