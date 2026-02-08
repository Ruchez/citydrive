# Features & Architecture Deep-Dive

## 🛡️ Admin Dashboard 2.0
The Admin system was redesigned to offer an "Apple-like" experience for managing dealership inventory.

### Hamburger & Sidebar Logic
- Uses `useState` for `sidebarOpen` in the `AdminLayout`.
- Sidebar is fixed at 260px on desktop but collapses into a left-aligned overlay on mobile.
- Utilizes `backdrop-filter: blur(4px)` to give depth when the menu is active on small screens.

### Stat Card Architecture
- Built with a grid system that adapts from 4-columns (desktop) to 2-columns (tablet) and 1-column (mobile).
- Uses `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions to mimic Apple's smooth OS feel.

---

## 🚙 Responsive Hero Architecture
The Hero section utilizes the HTML5 `<picture>` tag to swap source images based on viewport width without JavaScript overhead.

### Perfect Fit Technique
- **Desktop Source**: `hero-desktop.jpg` (White Prado)
- **Mobile Source**: `hero-mobile.jpg` (Black Prado)
- **CSS Logic**:
  - `object-fit: cover` ensures no empty spaces are visible.
  - `object-position: center 30%` for desktop focuses on the car's fascia.
  - `object-position: center center` for mobile ensures centering on smaller screens.

---

## 🌗 Theme Strategy
The application uses a primary/secondary theme toggle system, with one critical exception:

### Dark Mode Lock
The `Navbar` and `Hero` are hardcoded with Dark Theme variables via the `.hero-dark-mode-forced` and `.navbar` CSS scope. This ensures the "Impact Zone" (The first thing a user sees) maintains high-contrast premium aesthetics regardless of whether the user prefers light or dark for the gallery content.

---

## 💾 Data Modeling (Supabase)
Vehicles are modeled in a PostgreSQL table with the following schema:
- `id`: UUID (Primary Key)
- `name`: string
- `brand`: string
- `model`: string
- `year`: integer
- `price`: bigint
- `mileage`: integer
- `availability`: enum ('Available', 'Reserved', 'Sold')
- `images`: text[] (URLs to Supabase Storage)

---

## 📏 Layout Standards
- **Baseline Container**: 1140px.
- **Section Gaps**: 8rem (Desktop) / 4rem (Mobile).
- **Typography Baseline**: Inter for UI, Outfit for luxury brand headers.
