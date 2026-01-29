# Nader Mnejli - Portfolio

A modern, responsive portfolio website built with Angular 19, showcasing my skills, experience, and projects as a Full-Stack Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and interactive elements
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Header**: Navigation menu with smooth scrolling links
2. **Hero**: Introduction with profile image and social links
3. **About**: Personal information, stats, and interests
4. **Experience**: Professional experience timeline with detailed descriptions
5. **Skills**: Technical skills organized by categories with progress bars
6. **Projects**: Featured projects with descriptions and technologies used
7. **Education**: Academic background and qualifications
8. **Contact**: Contact form and contact information
9. **Footer**: Additional links and information

## 🛠️ Technologies Used

- **Frontend**: Angular 19, TypeScript, SCSS
- **Styling**: Custom SCSS with CSS Grid and Flexbox
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nader-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎨 Customization

### Colors
The main color scheme uses a gradient from `#667eea` to `#764ba2`. You can customize colors in the SCSS files:

```scss
// Primary gradient
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
Update the following files to customize content:
- `src/app/components/hero/hero.component.html` - Hero section content
- `src/app/components/about/about.component.html` - About section content
- `src/app/components/experience/experience.component.ts` - Experience data
- `src/app/components/skills/skills.component.ts` - Skills data
- `src/app/components/projects/projects.component.ts` - Projects data
- `src/app/components/education/education.component.ts` - Education data

### Images
Replace placeholder images:
- Profile image: Update the URL in `hero.component.html`
- Project images: Update URLs in `projects.component.ts`

## 📧 Contact Form

The contact form is currently set up with a mock submission. To integrate with a real backend:

1. Update the `onSubmit()` method in `contact.component.ts`
2. Replace the mock implementation with actual HTTP calls
3. Add proper error handling and validation

## 🔧 Development

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── experience/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── education/
│   │   ├── contact/
│   │   └── footer/
│   ├── app.component.*
│   └── app.config.ts
├── assets/
├── styles.scss
└── index.html
```

### Adding New Sections

1. Generate a new component:
   ```bash
   ng generate component components/new-section
   ```

2. Add the component to `app.component.html`
3. Import the component in `app.component.ts`
4. Style the component in its SCSS file

## 🚀 Deployment

### GitHub Pages
1. Install Angular GitHub Pages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   ng build --configuration production
   npx angular-cli-ghpages --dir=dist/nader-portfolio
   ```

### Netlify
1. Build the project:
   ```bash
   ng build --configuration production
   ```

2. Deploy the `dist/nader-portfolio` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Set build command: `ng build --configuration production`
3. Set output directory: `dist/nader-portfolio`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nader Mnejli**
- Email: nadermnejli77@gmail.com
- LinkedIn: [linkedin.com/in/nader-mnejli](https://linkedin.com/in/nader-mnejli)
- GitHub: [github.com/nadermnejli](https://github.com/nadermnejli)
- Phone: +216 96 605 573
- Location: Ariana, Tunisia

---

Built with ❤️ using Angular