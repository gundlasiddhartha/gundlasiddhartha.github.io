# Siddhartha Gundla - Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, skills, resume, and projects. Built with Bootstrap 4 and custom SCSS styling, featuring smooth animations and an elegant design.

![Portfolio Preview](img/person1.png)

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices (desktop, tablet, mobile)
- **Single Page Application**: Smooth navigation with Bootstrap collapse components for different sections
- **Animated Sections**: Eye-catching wave animations and timeline effects
- **Multiple Sections**:
  - Home/About
  - Skills showcase with icon display
  - Professional Resume/Experience timeline
  - Work/Projects portfolio
  - Contact form
- **Custom Styling**: Unique color scheme with custom SCSS components
- **Interactive UI**: Hover effects and smooth transitions throughout the site

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup for content structure
- **CSS3**: Advanced styling with animations and transitions
- **JavaScript (ES6)**: Interactive functionality and DOM manipulation
- **Bootstrap 4**: Responsive grid system and UI components
- **SCSS/Sass**: CSS preprocessing for better maintainability

### Libraries & Tools
- **Font Awesome 5.0.13**: Icon library for social media and UI icons
- **Google Fonts (Lato & Poppins)**: Custom typography
- **jQuery 3.3.1**: DOM manipulation and Bootstrap component functionality
- **Popper.js**: Tooltip and popover positioning
- **Node.js & npm**: Package management
- **node-sass**: SCSS compilation

## 📁 Project Structure

```
gundlasiddhartha.github.io/
├── css/
│   ├── bootstrap.css      # Compiled Bootstrap with custom variables
│   └── style.css          # Additional custom styles
├── img/
│   ├── background.jpg     # Header background image
│   ├── circuit.png        # Content section background
│   └── person1.png        # Profile photo
├── js/
│   └── timeline.js        # Timeline animation logic
├── scss/
│   ├── _basic.scss        # Basic styles (if exists)
│   ├── _timeline.scss     # Timeline component styles
│   ├── _wave.scss         # Wave animation styles
│   └── main.scss          # Main SCSS file with imports
├── index.html             # Main HTML file
├── package.json           # npm package configuration
├── package-lock.json      # npm dependency lock file
└── .gitignore            # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v12.0 or higher)
- **npm** (usually comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gundlasiddhartha/gundlasiddhartha.github.io.git
   cd gundlasiddhartha.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile SCSS to CSS** (if making style changes)
   ```bash
   npm run compile:sass
   ```
   This will watch for changes in your SCSS files and automatically compile them to CSS.

### Running the Website

Simply open `index.html` in your web browser:

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server for better experience:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server (install globally with: npm install -g http-server)
http-server
```

Then open `http://localhost:8000` in your browser.

## 💻 Development

### Customizing Styles

The project uses SCSS for styling. To customize the appearance:

1. Edit SCSS files in the `scss/` directory:
   - `main.scss`: Main styles and Bootstrap variable overrides
   - `_wave.scss`: Wave animation styles
   - `_timeline.scss`: Timeline component styles

2. Run the SCSS compiler in watch mode:
   ```bash
   npm run compile:sass
   ```

3. The compiled CSS will be automatically generated in `css/bootstrap.css`

### Color Scheme

The website uses a custom color palette defined in `scss/main.scss`:

- **Primary**: `#2b668ac5` - Blue with transparency
- **Secondary**: `#007cc7` - Lighter Blue
- **Warning**: `#4da8da` - Lightest Blue

### Key Sections

- **Header**: Profile image, name, and navigation menu
- **Home**: Welcome message and skills overview
- **Skills**: Technology stack with animated boxes
- **Resume**: Professional experience timeline
- **Work**: Project showcase section
- **Contact**: Contact form for reaching out

## 🌐 Deployment

This website is hosted on **GitHub Pages**. Any push to the `main` branch will automatically deploy the site.

### Manual Deployment

The site is automatically deployed via GitHub Pages at:
```
https://gundlasiddhartha.github.io
```

### Deployment Steps

1. Make your changes and test locally
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
3. Push to the main branch:
   ```bash
   git push origin main
   ```
4. GitHub Pages will automatically deploy your changes within a few minutes

## 📝 Customization Guide

### Updating Personal Information

1. **Profile Photo**: Replace `img/person1.png` with your photo
2. **Name & Title**: Edit the `<h1>` and `<p>` tags in the header section of `index.html`
3. **Skills**: Update the skill boxes in the skills section
4. **Resume**: Modify the timeline entries in the resume section
5. **Contact Form**: Configure form submission endpoint if needed

### Adding New Sections

1. Add a new collapse div in the content area
2. Create a navigation item in the header
3. Style the section using SCSS if needed

## 🤝 Contributing

This is a personal portfolio website. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **ISC License**.

## 👤 Author

**Siddhartha Gundla**
- Full Stack Web Developer
- 8+ Years of experience in designing and developing enterprise-level applications

## 🙏 Acknowledgments

- Bootstrap team for the excellent framework
- Font Awesome for the comprehensive icon library
- Google Fonts for beautiful typography
- The open-source community for inspiration and tools

## 📧 Contact

Feel free to reach out through the contact form on the website or connect via social media.

---

**Note**: This portfolio is continuously evolving. Check back often for updates and new projects!
