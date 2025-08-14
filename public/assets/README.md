
# Assets Directory

This directory is for storing project assets like images, fonts, and other static files.

## Structure

- `/images` - For image assets
- `/fonts` - For custom font files (if not using Google Fonts)
- `/icons` - For custom icons
- `/videos` - For video files

## Usage

When adding new images or assets, please follow these guidelines:

1. Use descriptive filenames
2. Optimize images before adding them (compress when possible)
3. For product images, use consistent dimensions
4. Organize in relevant subfolders when appropriate

## Image Recommendations

- Product images: 1000x1000px, square format
- Hero images: 1920x1080px minimum (16:9 ratio)
- Thumbnail images: 300x300px
- Banner images: 1200x400px

## Adding New Assets

Simply place your files in the appropriate directory and they will be available to import in your components.

Example usage in components:
```jsx
import logoImage from '../assets/images/logo.png';

function MyComponent() {
  return <img src={logoImage} alt="Company Logo" />;
}
```
