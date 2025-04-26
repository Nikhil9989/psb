# SKILL BRIDGE

SKILL BRIDGE is an innovative domain-based learning platform designed to bridge the gap between theoretical education and practical industry skills. The platform focuses on providing a comprehensive learning experience through integrated domain learning, particularly targeting students in tier-2 and tier-3 cities in India.

## Key Features

- **Domain-Based Progressive Learning**: Learn complete domains instead of isolated technologies through our progressive 0→70→90% mastery approach.
- **Hybrid Learning Model**: Combine online content with physical infrastructure through institutional partnerships in tier-2/3 cities.
- **Project-Based Learning**: Apply skills to real-world projects that integrate multiple technologies for practical experience.
- **Industry Alignment**: Curriculum constantly validated against industry needs with capstone projects reviewed by hiring managers.
- **1:1 Mentorship**: Personalized guidance from industry experts to accelerate learning and career development.
- **Flexible Payment Models**: Choose from subscription-based or Income Sharing Agreements (ISA) to make quality education accessible.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: Frontend library for building user interfaces
- **TypeScript**: Static typing for safer code development
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library for React applications

## Domains Offered

- **Web Development**: Full-stack development with front-end, back-end, databases, and deployment
- **Data Science & Analytics**: Data analysis, machine learning, and business intelligence
- **Cloud Computing & DevOps**: Cloud platforms, infrastructure automation, and CI/CD pipelines

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured to build static exports for GitHub Pages:

```bash
npm run build
```

The build output will be generated in the `out` directory.

## Deployment

For automatic deployment to GitHub Pages, you can set up a GitHub Actions workflow:

1. Create a `.github/workflows/deploy.yml` file
2. Add the following workflow configuration:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies 📦
        run: npm ci

      - name: Build 🔧
        run: npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```

## Project Structure

```
/app                  - Next.js app directory with pages and layouts
/components           - Reusable React components
  /layout             - Layout components including header and footer
  /ui                 - UI components like buttons, cards, etc.
/public               - Static assets like images and fonts
```

## Design Features

- Responsive design for all screen sizes
- Consistent color scheme with indigo and yellow accents
- Animated elements for better user engagement
- Mobile-optimized navigation
- Accessible to all users following WCAG guidelines
