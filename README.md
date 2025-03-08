# App Name Landing Page

A modern landing page built with Next.js, TypeScript, and Tailwind CSS for showcasing your app or service.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Fully Responsive**: Looks great on all devices from mobile to desktop
- **Dark Mode Support**: Automatically adapts to user preferences
- **Fast Performance**: Optimized for speed with Next.js App Router
- **SEO Ready**: Proper metadata structure for better search engine visibility
- **Easy Deployment**: Ready to deploy on Vercel with zero configuration

## Pages

- **Landing Page**: Showcase your app's features and benefits
- **Terms of Service**: Legal terms and conditions
- **Privacy Policy**: Privacy information for users

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd your-app-name
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # App Router route structure
│   │   ├── page.tsx    # Landing page
│   │   ├── layout.tsx  # Root layout
│   │   ├── terms/      # Terms of Service page
│   │   └── privacy/    # Privacy Policy page
│   └── components/     # Reusable UI components (add as needed)
├── package.json        # Project dependencies and scripts
├── next.config.ts      # Next.js configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## Customization

1. **App Information**: Update metadata in `src/app/layout.tsx` with your app's information.
2. **Content**: Replace placeholder content in all pages with your actual content.
3. **Styling**: Adjust the Tailwind theme in `tailwind.config.ts` to match your brand.
4. **Images**: Add your logo and other images to the `public/` directory.

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Import your project on Vercel.
3. Vercel will detect that you're using Next.js and will enable the correct settings automatically.
4. Your app will be deployed and available at a Vercel URL.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [Vercel Deployment Documentation](https://vercel.com/docs) - learn about Vercel deployment features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Image Assets

To complete the KIN landing page, please add the following image assets:

### App Screenshot
1. Prepare a screenshot of your app (recommended size: 400x700px)
2. Save it as `app-screenshot.png` in the `public` folder
3. Open `src/app/page.tsx` and replace the placeholder image element with:
   ```jsx
   <img 
     src="/app-screenshot.png" 
     alt="KIN App Screenshot" 
     className="rounded-xl shadow-lg w-full h-auto"
   />
   ```

### Founder Team Image
1. Prepare an image of your team (recommended size: 600x400px)
2. Save it as `founder-team.jpg` in the `public` folder
3. No code changes required - it will automatically use your image
