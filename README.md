# Prasanth Babu - Digital NFC Business Card

A one-page digital business card for **Prasanth Babu** (Founder & CEO, Silverwings Hotel Consultancy), designed to fit in a single mobile viewport with **zero scrolling and zero sliding**.

---

## 📱 Features

- **Exact Reference Match**: Modeled directly after the luxury branding of Silverwings Hotel Consultancy.
- **Fixed Single Viewport**: Built with `100dvh` flex layout and fluid `clamp()` responsive units to guarantee a fixed single view without scrollbars or sliding across all smartphone screens (iPhone, Samsung Galaxy, Pixel, etc.).
- **Interactive Action Cards**:
  1. **Phone**: Tap to call `+91 9446 443221` or tap the copy button to copy to clipboard.
  2. **Email**: Tap to write to `silverwingsideas@gmail.com` or tap the copy button to copy to clipboard.
  3. **Website**: Tap to visit `www.silverwingsideas.com`.
  4. **Office Address**: Tap to open Chowallur Tower in Google Maps.
  5. **Instagram**: Tap to open `@silverwings_ideas`.
  6. **Facebook**: Tap to open the official Silverwings page.
- **vCard (.vcf) Integration**: Includes a downloadable contact file (`prasanth-babu.vcf`) allowing recipients to save Prasanth's contact directly to iOS Contacts or Google Contacts.
- **Toast Feedback & Haptics**: Interactive notifications and haptic vibration feedback on tap.

---

## 📂 Project Structure

```
prasanth-babu/
│
├── index.html                  # Main responsive single-page web card
├── style.css                   # Responsive styles, clamp typography & gold accents
├── script.js                   # Clipboard handlers, toast messages & haptic feedback
├── prasanth-babu.vcf           # vCard 3.0 contact file for iOS / Android
├── README.md                   # Documentation & NFC deployment guide
└── assets/
    ├── silverwings-logo-transparent.png  # High-res transparent brand logo
    ├── profile.jpg                       # Executive portrait of Prasanth Babu
    ├── brand.png                         # Hospitality Dining Solutions artwork
    └── reference.jpg                     # Design reference mockup
```

---

## 📡 NFC Tag Programming Guide

To write this digital business card to a physical NFC card/tag:

1. **Deploy the Site**:
   - Host this folder on any web host or static hosting provider (e.g. GitHub Pages, Netlify, Cloudflare Pages, Vercel, or custom domain `card.silverwingsideas.com`).
2. **Download an NFC Writer App**:
   - **NFC Tools** (available free on iOS App Store & Google Play Store).
3. **Write the URL**:
   - Open **NFC Tools** > Select **Write** > **Add a record** > **URL / URI**.
   - Paste your deployed link (e.g. `https://card.silverwingsideas.com` or `https://yourdomain.com/prasanth-babu/`).
   - Tap **Write** and bring your NFC card near the back of your phone.
4. When any NFC-enabled smartphone taps the card, it will instantly display this card.

