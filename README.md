# ErtixNodes - Premium Hosting Solutions

A modern, responsive website for ErtixNodes hosting service with a Linux terminal theme.

## Features

- Dark theme with terminal-inspired design
- Responsive layout for all devices
- Interactive terminal elements
- Animated sections with AOS (Animate on Scroll)
- Particle.js background effects
- Swiper.js for testimonials slider
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Animate on Scroll](https://michalsnik.github.io/aos/) - Scroll animation library
- [Swiper](https://swiperjs.com/) - Modern mobile touch slider
- [Particles.js](https://vincentgarreau.com/particles.js/) - Lightweight particle animation
- [Font Awesome](https://fontawesome.com/) - Icon library

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ertixnodes.git
cd ertixnodes
```

2. Open the project in your code editor.

3. Install a local development server (if needed):
```bash
npm install -g live-server
```

4. Run the development server:
```bash
live-server
```

5. Open your browser and navigate to `http://localhost:8080`

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `main.js` - JavaScript functionality
- `assets/` - Images and other assets

## Customization

### Colors

The color scheme can be modified in the `:root` section of the CSS file:

```css
:root {
    /* Primary Colors */
    --primary-dark: #0d1117;
    --primary-light: #f0f6fc;
    --accent-color: #58a6ff;
    --accent-glow: rgba(88, 166, 255, 0.15);
    
    /* More variables... */
}
```

### Fonts

The website uses JetBrains Mono as the primary font for the terminal theme. You can change it in the CSS:

```css
:root {
    /* Font */
    --font-mono: 'Your Font', 'JetBrains Mono', monospace;
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern terminal interfaces
- Icons provided by Font Awesome
- Background effects by Particles.js 