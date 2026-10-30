# Armand’s Garage — Modern Website Concept (Yuma, AZ)

A mobile-first, responsive website concept created by a freelance web developer for **Armand’s Garage**, an independent auto repair shop located in Yuma, Arizona.

---

## 🛠️ Tech Stack

- **React 19** + **Vite**
- **JavaScript** (ES Modules)
- **Tailwind CSS** (Custom dark charcoal, warm off-white, and garage amber palette)
- **Lucide React** icons
- **Google Fonts**: Barlow & Barlow Condensed

---

## 🎨 Brand Direction

- **Backgrounds**: Charcoal and near-black surfaces (`#0c0d0f`, `#131417`, `#1b1d22`)
- **Accents**: Muted automotive amber (`#d97706`, `#f59e0b`, `#e07a28`)
- **Surfaces**: Crisp, high-contrast industrial cards with warm off-white and zinc text
- **Photography**: High-resolution, authentic mechanic workshop and automotive imagery (all tested and active)
- **Design Philosophy**: Rugged, dependable, utilitarian yet premium craftsmanship—no generic AI template tropes.

---

## 📁 Project Structure

```text
d:/demos/
├── index.html                    # SEO title, meta descriptions, Open Graph & Barlow fonts
├── vite.config.js                # Vite build configuration
├── tailwind.config.js            # Custom garage colors, fonts, and theme extensions
├── postcss.config.js             # PostCSS setup
├── public/
│   └── favicon.svg               # Custom automotive wrench icon
└── src/
    ├── main.jsx                  # React application entry point
    ├── App.jsx                   # Layout coordinator & mobile sticky call bar
    ├── index.css                 # Tailwind directives & industrial scrollbars/textures
    ├── data/
    │   └── garageData.js         # Single source of truth for all business details,
    │                             # service offerings, hours, directory notes, and phone numbers
    └── components/
        ├── ProposalBanner.jsx    # Freelance proposal disclosure banner & concept modal
        ├── Header.jsx            # Sticky navigation, utility bar & mobile hamburger drawer
        ├── Hero.jsx              # Workshop hero, "Honest Auto Care" headline, dual CTAs
        ├── ServicesSection.jsx   # 6 core service cards with unverified offering disclaimer
        ├── ServiceDetailModal.jsx# Interactive modal with symptoms & diagnostic checklists
        ├── AboutSection.jsx      # Local Yuma narrative, 1956 directory disclosure, craftsmanship
        ├── WhyChooseUs.jsx       # 4 grounded value propositions & interactive local FAQ
        ├── ContactSection.jsx    # Address, click-to-call, hours, map card & demo inquiry form
        └── Footer.jsx            # Comprehensive footer with links & freelance disclaimer
```

---

## ⚙️ Centralized Data Configuration

To edit any business information, service descriptions, hours, or unverified notes, edit a single file:
👉 [`src/data/garageData.js`](file:///d:/demos/src/data/garageData.js)

- **Phone Number**: Change `businessInfo.contact.phone`
- **Address**: Change `businessInfo.contact.address`
- **Hours**: Update `businessInfo.schedule.hoursList`
- **Services**: Add or modify items in `serviceCategories`
- **Unverified Disclosures**: Configured in `businessInfo.notices`

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
