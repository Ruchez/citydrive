# CityDrive 🏎️✨

**Kenya's Premium Destination for Certified, Clean Vehicles.**

CityDrive is a high-end, "Museum-Grade" digital automotive gallery designed for the serious buyer in the Kenyan market. It moves away from cluttered, jargon-heavy traditional classifieds toward a clinical, architectural, and immersive experience.

---

## 🏛️ Design Philosophy: "Clinical Gallery"

The application is built on the **Simplicity 4.0** aesthetic framework:
- **Architectural Breathing**: Massive 8rem gaps on desktop for focus.
- **Museum-Grade Typography**: High-contrast, direct, and jargon-free.
- **Obsidian Vault Aesthetics**: A deep dark theme preserved for the Hero and Navbar for maximum brand impact.
- **Glassmorphism**: Subtle, translucent interfaces that feel airy and modern.

---

## 🚀 Key Features

### 💎 Public Experience
- **Immersive Hero**: A responsive dual-image system with a "Perfect Fit" White Prado TX-L for desktop and Black Prado for mobile.
- **The CAR Collection**: A high-performance filtering engine with real-time text search and budget chips.
- **Boutique Listing**: Every vehicle has its own dedicated editorial-style details page with high-res galleries and technical deep-dives.
- **Architectural Sell Flow**: A narrative-driven appraisal request system for owners looking to list their vehicles.

### 🛡️ Admin Dashboard 2.0 (Apple-Inspired)
- **Premium Interface**: A completely redesigned backend with soft shadows, 12px rounded corners, and smooth transitions.
- **Collapsible Sidebar**: A desktop-and-mobile-ready navigation with a functional hamburger menu.
- **Inventory Management**: Full CRUD (Create, Read, Update, Delete) for vehicle listings, integrated with Supabase.
- **Real-time Stats**: Instant overview of Total, Available, Sold, and Reserved vehicles.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Vanilla CSS (Custom Architected System)
- **Backend/Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (for high-resolution vehicle imagery)
- **State Management**: React Context API
- **Routing**: React Router 6

---

## 🏗️ Getting Started

### 1. Installation
```bash
git clone https://github.com/Ruchez/citydrive.git
cd citydrive
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup
Run the SQL migration located in `src/db/reset_schema.sql` within your Supabase SQL Editor to set up the `vehicles` table and necessary triggers.

### 4. Running Locally
```bash
npm run dev
```

---

## 📁 Project Structure

```text
src/
├── assets/           # High-res branding and UI icons
├── components/       # Architectural UI components
│   ├── admin/        # Premium Admin-specific components
│   └── ...
├── contexts/         # Authentication and Global state
├── lib/              # Supabase client and external libs
├── pages/            # Page-level route components
│   ├── admin/        # Admin-only views
│   └── ...
├── App.css           # Global "Clinical Gallery" design tokens
└── admin-premium.css # Apple-inspired admin styling
```

---

## 🏁 Final Verification
The application has been audited for:
- **Horizontal Overflow**: 100% eliminated for smooth mobile swiping.
- **Responsive Symmetry**: Perfect fit across 3 distinct breakpoints.
- **Theme Integrity**: Hero/Navbar are locked in Dark Mode to preserve brand identity.

**Built with purpose. Driven by quality.**
