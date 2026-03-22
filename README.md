# 📱 iOS 18 Portfolio

A highly interactive, deeply personalized developer portfolio mimicking the native aesthetic, motion design, and user experience of an iPhone running iOS. Built for Full Stack Engineers to natively showcase their projects, experience, and system-level monitoring directly on a "simulated device".

**Live Demo**: [akashkhurana.github.io/ios-portfolio](https://akashkhurana.github.io/ios-portfolio)

## ✨ Core Features

- **Hyper-Realistic Device Shell**: A responsive iPhone shell complete with a Dynamic Island, realistic hardware buttons (titanium styling), a glassmorphism dock, and a functioning Status Bar (simulated WiFi, Cellular, Battery).
- **Native iOS Animations**: Powered by `framer-motion`, utilizing `layoutId` to achieve continuous, butter-smooth app opening/closing sequences identical to the native Spring transitions on iOS.
- **Interactive App Ecology**:
  - `Mail`: A fully featured mail app with integrated `mailto:` links allowing recruiters to reach out instantly.
  - `Experience` & `Education`: Sleek, floating Apple-style summary lists highlighting work history and educational background.
  - `Projects`: Interactive, nested 3-dimensional project presentations featuring direct GitHub deep-links.
  - `Resume`: Embedded static PDF renderer right inside the app, with direct download buttons styled recursively like Apple native actions.
- **Smart Data Widgets**:
  - Live **GitHub Contributions Widget**: Fully integrated API call that dynamically paints your real-time GitHub "grass" (commit history) in the native iOS dark-mode aesthetic directly onto the home screen.
  - Generative **Calendar** & **Weather** widgets mimicking real iOS defaults.
- **Strict OS Emulation**: Draggable lock screens, functioning unlocking layers, responsive clock sequences, and global context (`OSProvider`) that manages active apps preventing state leakage.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Static Export)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using native deep CSS nesting and custom `globals.css` overrides)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (`layoutId` layout animations)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Configured for automated static deployment via `gh-pages`.

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akashkhurana/ios-portfolio.git
   cd ios-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser!

## 📦 Deploying

This project comes with continuous deployment configs built-in for GitHub Pages.
Executing the following command will automatically run `next build`, statically render the files, configure safe relative paths, construct the `.nojekyll` pipeline, and publish to the `gh-pages` branch.

```bash
npm run deploy
```

> Ensure your GitHub repository **Actions / Settings -> Pages -> Source** is pointing exclusively to your `gh-pages` branch!

## 🤝 Customizing

- **Apps & Widgets:** Look inside `src/components/HomeScreen.tsx` to configure which apps are visible, badge counts, and the widget grid layouts.
- **Icon Colors:** The iOS aesthetic heavily leans on gradient layering. You can adjust the `color` variables traversing Tailwind gradient stops (`from-...` to `to-...`).
- **Device UI:** The physical device shell (bezel, Dynamic Island, hardware buttons) is located inside `src/components/DeviceShell.tsx`.

---
*Created by Akash Khurana.*
