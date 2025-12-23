# Kosha Project Structure and File Details

This document provides a comprehensive overview of all files in the Kosha React application, including their purposes, locations, and roles in the project.

## Root Directory Files

### Configuration Files

- **.gitignore**: Specifies files and directories that Git should ignore (e.g., node_modules, dist, .env files). Prevents unnecessary files from being committed to version control.

- **bun.lockb**: Lock file for Bun package manager, ensuring consistent dependency versions across environments.

- **components.json**: Configuration file for ShadCN UI components, defining component settings and paths.

- **eslint.config.js**: Configuration for ESLint, defining JavaScript/TypeScript linting rules for code quality.

- **package-lock.json**: Lock file for npm, ensuring exact dependency versions for reproducible builds.

- **package.json**: Defines project metadata, dependencies, scripts, and configuration. Includes scripts like "dev", "build", "lint".

- **postcss.config.js**: Configuration for PostCSS, used for CSS processing and Tailwind CSS.

- **tailwind.config.ts**: Configuration for Tailwind CSS, defining custom themes, colors, and responsive breakpoints.

- **tsconfig.app.json**: TypeScript configuration for the application code.

- **tsconfig.json**: Main TypeScript configuration file.

- **tsconfig.node.json**: TypeScript configuration for Node.js-related files.

- **vite.config.ts**: Configuration for Vite build tool, including plugins, aliases, and server settings.

### Main Files

- **index.html**: The main HTML template. Entry point for the application, contains the root div and meta tags.

- **README.md**: Project documentation, including setup instructions, features, and deployment info.

## Public Directory

Files in `public/` are served statically and copied to the build output.

- **_redirects**: Netlify-specific file for SPA routing. Redirects all routes to index.html for client-side routing.

- **placeholder.svg**: Placeholder SVG image, used as a fallback or default image.

- **robots.txt**: Instructions for web crawlers about which pages to index.

### Pictures Directory (`public/pictures/`)

Contains all static images and videos used in the application:

- **accessories.PNG**: Image of accessories for the website.

- **blouse.jpg**: Image of blouse products.

- **customize blouses.PNG**: Image for blouse customization feature.

- **customize outfits.jpg**: Image for outfit customization.

- **download (1).jpg, download (2).jpg, download (3).jpg, download.jpg**: General download or placeholder images.

- **dress material .PNG**: Image of dress materials.

- **fabric1.JPG to fabric12.JPG**: Collection of fabric sample images.

- **hand embroidery.JPG**: Image showcasing hand embroidery work.

- **home.jpg**: Hero or home page image.

- **IMG_3314.JPG**: Additional product image.

- **kurties.jpg**: Image of kurtis.

- **saree.jpg, sarres.JPG**: Images of sarees.

- **video.mp4, video1.mp4, video3.mp4**: Video files for showcasing products or processes.

These assets are used throughout the components to display products, fabrics, and brand imagery.

## Source Directory (`src/`)

Contains the application source code.

### Main Application Files

- **App.css**: Global CSS styles for the application.

- **App.tsx**: Main application component, sets up routing and global providers (QueryClient, Toaster, etc.).

- **index.css**: Base CSS styles, including Tailwind imports.

- **main.tsx**: Application entry point, renders the App component into the DOM.

- **vite-env.d.ts**: TypeScript declarations for Vite environment.

### Components Directory (`src/components/`)

Reusable React components:

- **ArtisanalExcellence.tsx**: Component showcasing artisanal craftsmanship.

- **DividerBand.tsx**: Visual divider component.

- **FabricArtistry.tsx**: Component displaying fabric collections.

- **FacesOfKosha.tsx**: Component featuring team or brand faces.

- **FeaturedCollection.tsx**: Highlights featured products.

- **Footer.tsx**: Site footer with links and information.

- **Header.tsx**: Site header with navigation.

- **HeroSection.tsx**: Main hero/banner section.

- **JourneySection.tsx**: Component about the brand journey.

- **MapSection.tsx**: Interactive map component.

- **NavLink.tsx**: Navigation link component.

- **ReviewsSection.tsx**: Customer reviews display.

- **Sidebar.tsx**: Mobile navigation sidebar.

- **StorySection.tsx**: Brand story component.

- **WatchFinest.tsx**: Component for showcasing finest products.

- **WhatsAppButton.tsx**: Floating WhatsApp contact button.

### UI Components (`src/components/ui/`)

ShadCN UI components (pre-built, customizable components):

- **accordion.tsx**: Collapsible content component.

- **alert-dialog.tsx**: Modal alert dialog.

- **alert.tsx**: Alert/notification component.

- **aspect-ratio.tsx**: Maintains aspect ratio for images/videos.

- **avatar.tsx**: User avatar component.

- **badge.tsx**: Status/label badges.

- **breadcrumb.tsx**: Navigation breadcrumbs.

- **button.tsx**: Customizable buttons.

- **calendar.tsx**: Date picker calendar.

- **card.tsx**: Content cards.

- **carousel.tsx**: Image/content carousel.

- **chart.tsx**: Data visualization charts.

- **checkbox.tsx**: Form checkboxes.

- **collapsible.tsx**: Collapsible content.

- **command.tsx**: Command palette component.

- **context-menu.tsx**: Right-click context menus.

- **dialog.tsx**: Modal dialogs.

- **drawer.tsx**: Slide-out drawers.

- **dropdown-menu.tsx**: Dropdown menus.

- **form.tsx**: Form handling components.

- **hover-card.tsx**: Hover-triggered cards.

- **input-otp.tsx**: OTP input fields.

- **input.tsx**: Form input fields.

- **label.tsx**: Form labels.

- **menubar.tsx**: Application menubars.

- **navigation-menu.tsx**: Navigation menus.

- **pagination.tsx**: Page navigation.

- **popover.tsx**: Popover components.

- **progress.tsx**: Progress bars.

- **radio-group.tsx**: Radio button groups.

- **resizable.tsx**: Resizable panels.

- **scroll-area.tsx**: Custom scrollbars.

- **select.tsx**: Dropdown selects.

- **separator.tsx**: Visual separators.

- **sheet.tsx**: Slide-out sheets.

- **sidebar.tsx**: Application sidebars.

- **skeleton.tsx**: Loading skeleton components.

- **slider.tsx**: Range sliders.

- **sonner.tsx**: Toast notifications.

- **switch.tsx**: Toggle switches.

- **table.tsx**: Data tables.

- **tabs.tsx**: Tabbed interfaces.

- **textarea.tsx**: Multi-line text inputs.

- **toast.tsx**: Toast notifications.

- **toaster.tsx**: Toast container.

- **toggle-group.tsx**: Toggle button groups.

- **toggle.tsx**: Toggle buttons.

- **tooltip.tsx**: Hover tooltips.

- **use-toast.ts**: Toast hook utilities.

### Hooks Directory (`src/hooks/`)

Custom React hooks:

- **use-mobile.tsx**: Hook for detecting mobile devices.

- **use-toast.ts**: Hook for managing toast notifications.

### Library Directory (`src/lib/`)

Utility functions:

- **utils.ts**: Common utility functions, including class name merging for Tailwind.

### Pages Directory (`src/pages/`)

Page components for routing:

- **Index.tsx**: Main page component, assembles all sections.

- **NotFound.tsx**: 404 error page component.

## Build Output (dist/)

When `npm run build` is run, Vite generates the `dist/` directory with optimized production files:

- **index.html**: Optimized HTML with asset links.

- **assets/**: Contains compiled CSS, JS bundles, and optimized images.

- **_redirects**: Copied from public for Netlify routing.

The dist folder is what gets deployed to hosting platforms like Netlify or GitHub Pages.

## File Purposes Summary

- **Source files (.tsx, .ts, .js)**: Define application logic, components, and configuration.
- **Asset files (.jpg, .png, .svg, .mp4)**: Provide visual content and media.
- **Configuration files**: Set up build tools, linting, styling, and dependencies.
- **Lock files**: Ensure consistent dependency installation.
- **Documentation**: Guide development and usage.
- **Build output**: Optimized files for production deployment.

This structure follows modern React/Vite best practices, separating concerns and enabling scalable development.