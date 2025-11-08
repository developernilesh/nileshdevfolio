# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js 14, TypeScript, and Framer Motion featuring smooth animations and a responsive design.

## 🚀 Key Features

• Modern UI/UX with interactive animations, parallax effects, and smooth scrolling
• Fully responsive design with mobile-first approach and dark theme
• Interactive sections: Hero, About, Skills, Projects, Experience Timeline, and Contact
• Custom animated components using Framer Motion
• Server-side rendered pages with Next.js App Router
• Contact form with email integration via Nodemailer
• TypeScript for type safety and better developer experience

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, React, TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **UI Components**: Radix UI primitives
- **Email**: Nodemailer
- **Styling**: TailwindCSS with custom configuration
- **Fonts**: Geist Sans & Geist Mono
## 🔧 Getting Started

1. Clone the repository:
```bash
git clone <https://github.com/developernilesh/nileshdevfolio>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:
```bash
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_email
SMTP_PASS=your_password
```

4. Run the development server
```bash
npm run dev
```

5. Open `http://localhost:3000` to view the website.


📁 Project Structure
````
This is the code block that represents the suggested code change:
```markdown
src/
├── app/                # Next.js app router pages
├── components/
│   ├── layout/         # Layout components
│   ├── sections/       # Main page sections
│   └── ui/             # Reusable UI components
├── constants/          # Constants and data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── types/              # TypeScript types
```
````

🔥 Key Components:
- `Hero`: Interactive hero section with 3D hover effects
- `About`: Personal information with animated skills
- `TechStack`: Technologies showcase with categorized skills
- `Projects`: Portfolio projects with filtering
- `Timeline`: Interactive experience timeline
- `Contact`: Contact form with email integration

🎨 Customization:
- Update personal information in data.ts
- Modify theme colors in tailwind.config.js
- Add/modify sections in sections
- Update content and styling in individual components