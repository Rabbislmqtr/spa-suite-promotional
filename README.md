# 💆 Spa Suite — Promotional Materials Kit

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Spa%20Suite-4f7b57?style=for-the-badge&labelColor=274b35" alt="Spa Suite">
  <img src="https://img.shields.io/badge/Market-Qatar%20%7C%20GCC-c79a45?style=for-the-badge&labelColor=274b35" alt="Market">
  <img src="https://img.shields.io/badge/Language-EN%20%7C%20AR-4f7b57?style=for-the-badge&labelColor=274b35" alt="Languages">
  <img src="https://img.shields.io/badge/License-Private-red?style=for-the-badge" alt="License">
</p>

<p align="center">
  <b>The complete promotional toolkit for Spa Suite — social media posts, landing pages, marketing copy, ad banners, and AI image prompts.</b>
</p>

---

## 📁 Repository Structure

```
spa-suite-promotional/
├── 📄 README.md                    ← You are here
├── 📄 .gitignore
│
├── 📂 docs/                        ← Website pages (GitHub Pages root)
│   ├── index.html                  ← Main promotional landing page
│   ├── about.html                  ← About Us page
│   ├── support.html                ← Support & FAQ page
│   ├── contact.html                ← Contact page with WhatsApp form
│   ├── privacy.html                ← Privacy policy
│   ├── terms.html                  ← Terms of Service
│   ├── refunds.html                ← Refunds & cancellation
│   ├── 📂 ar/                    ← Arabic (right-to-left) pages
│   │   ├── index.html            ← Arabic landing page
│   │   ├── privacy.html          ← الخصوصية
│   │   ├── terms.html            ← شروط الخدمة
│   │   └── refunds.html          ← الاسترداد والإلغاء
│   └── assets/                     ← site.css, site-rtl.css and site.js, shared
│
├── 📂 images-english/              ← Social media image templates (EN)
│   ├── social-media-posts.html     ← 8 Instagram/Facebook posts (1080×1080)
│   └── whatsapp-stories.html       ← 5 WhatsApp Status stories (9:16)
│
├── 📂 images-arabic/               ← Social media image templates (AR)
│   ├── social-media-posts-ar.html  ← 10 Arabic Instagram/Facebook posts
│   └── whatsapp-stories-ar.html    ← 5 Arabic WhatsApp stories
│
├── 📂 ads/                         ← Display ad banners
│   ├── banner-ads.html             ← Google Ads & Facebook Ads banners
│   └── image-prompts.md            ← AI image generation prompts
│
├── 📂 copy/                        ← Marketing copy & captions
│   ├── marketing-copy.md           ← English captions, emails, WhatsApp, hashtags
│   └── marketing-copy-ar.md        ← Arabic captions, emails, WhatsApp, hashtags
│
└── 📂 research/                    ← Business research
    └── pricing-analysis.md         ← Competitor pricing analysis & recommendations
```

---

## 🚀 Quick Start

### 1. Open in Browser
```bash
# Open the landing page (now index.html for GitHub Pages)
open docs/index.html

# Open social media post templates
open images-english/social-media-posts.html

# Open banner ads
open ads/banner-ads.html
```

### 2. Export Images
1. Open any `.html` file in Chrome
2. Press `F12` → Toggle Device Toolbar
3. Set viewport to `1080×1080` (Instagram) or `1080×1920` (Stories)
4. Screenshot each post design

### 3. Deploy Landing Page
```bash
# Already deployed to GitHub Pages!
# Your site: https://rabbislmqtr.github.io/spa-suite-promotional/

# To update after changes:
git add .
git commit -m "Update promotional materials"
git push
```

### 4. Generate AI Images
1. Open `ads/image-prompts.md`
2. Copy any prompt
3. Paste into ChatGPT, Canva AI, or Leonardo AI
4. Download and add text overlays in Canva

---

## 📱 What's Included

### Website Pages (11 pages across two languages)
| Page | File | Description |
|------|------|-------------|
| Landing | `docs/index.html` | Full promotional page with features, pricing, CTA |
| About Us | `docs/about.html` | Company story, values, journey timeline |
| Support | `docs/support.html` | FAQ, help options, getting started guide |
| Contact | `docs/contact.html` | Contact form (auto-sends to WhatsApp) |
| Privacy | `docs/privacy.html` | What is stored, where it sits, cookies, retention |
| Terms | `docs/terms.html` | Terms of Service for the subscription |
| Refunds | `docs/refunds.html` | Refunds and cancellation policy |

### Arabic Pages (4 pages, `docs/ar/`)

Same design, right-to-left, with `docs/assets/site-rtl.css` on top of the shared
stylesheet. It swaps in Amiri for display and IBM Plex Sans Arabic for body and
labels, drops the mono letter-spacing that would break Arabic letter joins, and
mirrors the physical-direction rules in `site.css`. The switch in the header is a
sibling of the nav, so it stays reachable on a phone where the nav is collapsed.

| Page | File | Description |
|------|------|-------------|
| Arabic landing | `docs/ar/index.html` | الصفحة الرئيسية بالعربية |
| الخصوصية | `docs/ar/privacy.html` | Privacy policy in Arabic |
| شروط الخدمة | `docs/ar/terms.html` | Terms of Service in Arabic |
| الاسترداد والإلغاء | `docs/ar/refunds.html` | Refunds and cancellation in Arabic |

`about.html`, `support.html` and `contact.html` are English only so far; the switch
on those three points Arabic readers at the Arabic landing page.

### Social Media Templates (18 posts)
| Platform | English | Arabic |
|----------|---------|--------|
| Instagram/Facebook | 8 posts (1080×1080) | 10 posts (1080×1080) |
| WhatsApp Stories | 5 stories (9:16) | 5 stories (9:16) |

### Display Ad Banners (5 sizes)
- Leaderboard: 728×90
- Medium Rectangle: 300×250
- Mobile Banner: 320×50
- Skyscraper: 160×600
- Facebook Feed: 1200×628

### Marketing Copy
- 10 Instagram captions (English + Arabic)
- 2 LinkedIn posts
- 2 email templates
- 3 WhatsApp cold outreach messages
- 8 taglines
- Hashtag sets
- Weekly posting schedule

### Research
- Competitor pricing analysis (20+ platforms)
- GCC market data
- Pricing recommendations
- 20+ AI image generation prompts

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Spa Green | `#4f7b57` | Primary brand color |
| Dark Green | `#274b35` | Headers, dark backgrounds |
| Deep Green | `#2f5f3d` | Gradient accents |
| Spa Gold | `#c79a45` | CTAs, highlights, premium feel |
| Gold Light | `#e4bb67` | Accents on dark backgrounds |
| Light Green | `#f0f5f1` | Card backgrounds |

---

## 📋 Contact Information

| Channel | Details |
|---------|---------|
| WhatsApp | [+974 3992 9558](https://wa.me/97439929558) |
| Email | [rabbilslmqtr@gmail.com](mailto:rabbilslmqtr@gmail.com) |
| Location | Doha, Qatar |

---

## 💰 Pricing (Recommended)

| Plan | Monthly (QAR) | Yearly (QAR) | Features |
|------|---------------|--------------|----------|
| Starter | 129 | 1,299 | 1 location, up to 3 staff, POS, bookings |
| Professional | 249 | 2,499 | Unlimited staff, loyalty, wallet passes |
| Multi-Branch | 449 | 4,499 | Unlimited locations, consolidated reports |

---

## 📝 Before Publishing

1. **Fill the identity placeholders.** The three legal pages and every footer carry
   these tokens, and the site should not be published while any remain:

   | Token | What it becomes |
   |-------|-----------------|
   | `{{LEGAL_ENTITY}}` | Registered company name |
   | `{{CR_NUMBER}}` | Commercial registration number |
   | `{{REGISTERED_ADDRESS}}` | Registered address |
   | `{{HOSTING_REGION}}` | Region your hosting sits in (privacy page only) |
   | `{{HOSTING_PROVIDER}}` | Hosting provider, if you host it for customers (privacy page only) |

   The Arabic pages carry the same tokens. Check both trees with

2. **Replace placeholders** in all files:
   - `97439929558` → Your WhatsApp number ✅ (already set)
   - `rabbilslmqtr@gmail.com` → Your email ✅ (already set)

3. **Add your logo** to exported images

4. **Generate AI images** using prompts in `ads/image-prompts.md`

5. **Follow the posting schedule** in `copy/marketing-copy.md`

---

## 🇶🇦 Market Focus

This promotional kit is designed specifically for:
- **Primary Market:** Qatar (Doha)
- **Secondary Market:** GCC (UAE, Saudi Arabia, Kuwait, Oman, Bahrain)
- **Currency:** Qatari Riyal (QAR)
- **Languages:** English + Arabic
- **Timezone:** Asia/Qatar

---

## 📄 License

This repository contains private promotional materials for Spa Suite.
Not for distribution without permission.

---

<p align="center">
  Built with 💚 for Spa Suite · Made in Qatar 🇶🇦
</p>
