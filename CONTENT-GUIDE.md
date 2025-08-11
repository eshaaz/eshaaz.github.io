# Content Management Guide

This guide explains how to update your Eshaaz website content using the `data.json` file.

## 📝 Quick Start

1. Open `data.json` in any text editor
2. Make your changes
3. Save the file
4. Commit and push to GitHub (or upload to your hosting)
5. Your website updates automatically!

## 📋 Content Sections

### 🏠 Site Information
```json
"site": {
  "title": "Page title that appears in browser tab",
  "brand": {
    "name": "Your Brand Name",
    "tagline": "Your Brand Tagline",
    "logo": "path/to/logo.png"
  },
  "navigation": [
    { "name": "Menu Item", "href": "#section" }
  ],
  "socialMedia": {
    "facebook": "https://facebook.com/yourpage",
    "instagram": "https://instagram.com/yourpage"
  }
}
```

### 🎯 Hero Section (Main Banner)
```json
"hero": {
  "title": "Main headline text",
  "subtitle": "Description text below headline",
  "ctaText": "Button text",
  "ctaLink": "Button link (# for placeholder)"
}
```

### 📖 About Section
```json
"about": {
  "title": "Section title",
  "content": [
    "First paragraph text...",
    "Second paragraph text...",
    "Add more paragraphs as needed..."
  ],
  "image": "https://image-url.jpg",
  "imageAlt": "Image description for accessibility"
}
```

### 👗 Product Collection
```json
"collection": {
  "title": "Section title",
  "subtitle": "Section description",
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 3500,
      "image": "https://image-url.jpg",
      "alt": "Product image description",
      "link": "https://facebook.com/product-link"
    }
  ]
}
```

### ⭐ Features Section (Why Choose Us)
```json
"features": {
  "title": "Section title",
  "subtitle": "Section description",
  "items": [
    {
      "icon": "fas fa-star",
      "title": "Feature title",
      "description": "Feature description text"
    }
  ]
}
```

### 📞 Contact Section
```json
"contact": {
  "title": "Contact section title",
  "subtitle": "Contact section description",
  "followText": "Text above social media icons"
}
```

### 🦶 Footer
```json
"footer": {
  "brandName": "Brand name in footer",
  "copyright": "© 2025 Your Brand. All rights reserved.",
  "links": [
    { "name": "Link Text", "href": "https://link-url.com" }
  ]
}
```

## 🎨 Common Updates

### Adding a New Product
1. Find the `"products"` array in `data.json`
2. Add a new product object:
```json
{
  "id": 9,
  "name": "New Product Name",
  "price": 4200,
  "image": "https://new-image-url.jpg",
  "alt": "New product description",
  "link": "https://facebook.com/new-product"
}
```

### Changing Prices
Find the product and update the price:
```json
"price": 4500
```

### Updating Social Media Links
```json
"socialMedia": {
  "facebook": "https://facebook.com/your-actual-page",
  "instagram": "https://instagram.com/your-actual-page"
}
```

### Changing About Text
```json
"content": [
  "Your new first paragraph here...",
  "Your new second paragraph here..."
]
```

### Updating Images
Replace image URLs with new ones:
```json
"image": "https://new-image-url.jpg"
```

## 🖼️ Image Guidelines

### Product Images
- **Size**: 400x400 pixels minimum
- **Format**: JPG or PNG
- **Quality**: High resolution, web-optimized
- **Style**: Consistent lighting and background

### About Section Image
- **Size**: 1000x800 pixels minimum
- **Format**: JPG or PNG
- **Content**: Should represent your brand/culture

### Image Sources
- **Unsplash**: https://unsplash.com (free stock photos)
- **Pexels**: https://pexels.com (free stock photos)
- **Your own photos**: Upload to image hosting service

## 💰 Currency and Pricing

The currency symbol is controlled by:
```json
"currency": "৳"
```

Change to:
- `"$"` for US Dollars
- `"€"` for Euros
- `"₹"` for Indian Rupees
- Any other currency symbol

## 🎯 FontAwesome Icons

For the features section, use FontAwesome icon classes:
- `"fas fa-star"` - Star icon
- `"fas fa-gem"` - Gem icon
- `"fas fa-shipping-fast"` - Shipping icon
- `"fas fa-heart"` - Heart icon
- `"fas fa-shield-alt"` - Shield icon
- `"fas fa-award"` - Award icon

Browse more icons at: https://fontawesome.com/icons

## ✅ Validation Tips

### JSON Syntax Rules
1. **Commas**: Every item except the last needs a comma
2. **Quotes**: Always use double quotes `"` not single quotes `'`
3. **Brackets**: Make sure all `{` have matching `}`
4. **Arrays**: Use `[` and `]` for lists

### Check Your JSON
Use online JSON validators:
- https://jsonlint.com
- https://jsonformatter.curiousconcept.com

### Common Mistakes
❌ Wrong: `"name": 'Product Name',`
✅ Right: `"name": "Product Name",`

❌ Wrong: `"price": "3500"`
✅ Right: `"price": 3500`

❌ Wrong: Missing comma after item
✅ Right: Add comma after each item except the last

## 🚀 Publishing Changes

### Method 1: GitHub Web Interface
1. Go to your repository on GitHub
2. Click on `data.json`
3. Click the edit button (pencil icon)
4. Make your changes
5. Click "Commit changes"
6. Your site updates automatically!

### Method 2: Local Editing
1. Edit `data.json` on your computer
2. Use Git to commit and push:
```bash
git add data.json
git commit -m "Update product prices"
git push
```

## 🆘 Troubleshooting

### Website not updating?
1. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Check that your JSON syntax is correct
3. Wait a few minutes for GitHub Pages to rebuild

### JSON errors?
1. Use a JSON validator to check syntax
2. Look for missing commas or quotes
3. Make sure all brackets are properly closed

### Images not showing?
1. Check that image URLs are accessible
2. Make sure URLs start with `http://` or `https://`
3. Test image URLs in a browser

## 📞 Need Help?

If you need assistance:
1. Check the JSON syntax with an online validator
2. Compare your changes with the original structure
3. Revert to a working version and try smaller changes

Remember: Always make small changes and test them before making larger updates!
