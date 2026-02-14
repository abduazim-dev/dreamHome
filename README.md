# Dream Home Website

Modern va professional ko'ko'lam uy-joy sayti (Real Estate Website)

## Xususiyatlari

- 🏠 Bosh sahifa (Home) - Hero, Help Section, Why Choose Us, Popular Residences, Testimonials
- 🏘️ Properties sahifasi - The Best Cities, California houses, Miami houses bo'limlari bilan
- 🎨 Zamonaviy va professional dizayn
- 📱 To'liq responsive (mobile, tablet, desktop)
- ⚡ React Router bilan sahifalar orasida navigatsiya
- 🎯 Silliq animatsiyalar va hover effektlari

## O'rnatish

1. Kerakli paketlarni o'rnatish:
```bash
npm install
```

2. Loyihani ishga tushirish:
```bash
npm start
```

Brauzer avtomatik ravishda `http://localhost:3000` da ochiladi.

## Loyiha Strukturasi

```
dream-home-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── HelpSection/
│   │   ├── WhyChooseUs/
│   │   ├── PopularResidences/
│   │   ├── Testimonials/
│   │   ├── Footer/
│   │   └── Properties/      # Yangi Properties sahifasi
│   ├── data/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Navigatsiya

- **Home** - Bosh sahifa (`/`)
- **Products** - Properties sahifasi (`/properties`)
- **Agents** - Agentlar (kelgusida qo'shiladi)
- **Contact** - Kontakt (kelgusida qo'shiladi)

## Texnologiyalar

- React 18.2.0
- React Router DOM 6.20.0
- CSS3 (Flexbox, Grid, Animations)
- Modern ES6+ JavaScript

## Build

Production uchun build yaratish:
```bash
npm run build
```

## Muallif

Professional React Developer

## Litsenziya

MIT
