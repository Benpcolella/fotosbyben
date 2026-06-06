# Notes from City — Editorials Setup

## Overview
A complete editorial series landing page and individual destination pages have been created for your photography portfolio. All 9 destinations are ready with linked navigation, minimal design matching your portfolio aesthetic.

## File Structure Created

```
editorials/
├── index.html                    # Landing page with grid of all 9 issues
├── destinations/
│   ├── yinchuan/
│   │   └── index.html           # Issue 01: Where ancient Silk Roads meet urban energy
│   ├── hong-kong/
│   │   └── index.html           # Issue 02: Vertical city of contrasts and tradition
│   ├── tokyo/
│   │   └── index.html           # Issue 03: Neon lights and ancient temples
│   ├── xining/
│   │   └── index.html           # Issue 04: Gateway to the Tibetan plateau
│   ├── chengdu/
│   │   └── index.html           # Issue 05: Land of abundant resources and culture
│   ├── chongqing/
│   │   └── index.html           # Issue 06: Mountain city shrouded in mist
│   ├── hanoi/
│   │   └── index.html           # Issue 07: A thousand years of history
│   ├── kuala-lumpur/
│   │   └── index.html           # Issue 08: Modern towers and colonial charm
│   └── zhangye/
│       └── index.html           # Issue 09: Rainbow mountains in the desert
└── images/
    └── editorials/
        ├── yinchuan-cover.jpg
        ├── hong-kong-cover.jpg
        ├── tokyo-cover.jpg
        ├── xining-cover.jpg
        ├── chengdu-cover.jpg
        ├── chongqing-cover.jpg
        ├── hanoi-cover.jpg
        ├── kuala-lumpur-cover.jpg
        └── zhangye-cover.jpg
```

## Updates Made

### Main Portfolio Pages
- **index.html**: Added "Editorials" link to header navigation
- **about.html**: Added "Editorials" link to header navigation

### Editorials Landing Page (`/editorials/index.html`)
- Grid layout showing all 9 destination covers
- Issue number, destination name, and subtitle on hover
- Clickable cards linking to individual editorials
- Consistent navigation: Gallery → Editorials → About

### Individual Editorial Pages
Each destination page includes:
- **Header** with series branding "NOTES FROM CITY"
- **Opening essay** (reflective 250-300 word introduction)
- **The Essentials** sidebar with key travel info:
  - Region, Elevation, Population
  - Best time to visit, Language, Currency
  - Daily budget, Visa requirements
- **Hero image** placeholder for cover photo
- **PDF viewer** placeholder (ready for future PDF integration)
- **Issue navigation** to browse between editorials
- Consistent footer with author byline

## Design Details

### Visual Style
- **Minimalist grayscale** matching portfolio (no accent colors)
- **Typography**: Space Mono throughout (monospace, editorial feel)
- **Spacing**: Generous whitespace, breathing room between sections
- **Responsive**: Mobile-optimized layouts

### Navigation Flow
- All destinations are linked sequentially
- Yinchuan (Issue 01) → → → Zhangye (Issue 09)
- "Previous/Next" buttons on each page
- Header nav consistent across all pages

## Next Steps for You

### 1. Add Cover Images
Place high-quality cover images in `editorials/images/editorials/`:
```
editorials/images/editorials/
├── yinchuan-cover.jpg
├── hong-kong-cover.jpg
├── tokyo-cover.jpg
├── xining-cover.jpg
├── chengdu-cover.jpg
├── chongqing-cover.jpg
├── hanoi-cover.jpg
├── kuala-lumpur-cover.jpg
└── zhangye-cover.jpg
```

### 2. Customize Essay Content
The opening essays are placeholder text. Update each destination page with your actual observations:
- Replace the `.essay` content in each page
- Keep the thoughtful, observational tone

### 3. Fill in Essentials Data
Update "The Essentials" sidebar with actual travel details:
- Elevation, population, best time to visit
- Visa info, currency, daily budget estimates

### 4. PDF Integration (Future)
When you have PDFs ready from the design process:
- Replace the `.pdf-viewer` placeholder with PDF.js viewer
- Add download links for users

### 5. Add Gallery Content (Optional)
Each editorial can include:
- Inline photo galleries for attractions/food
- Closing photo essay (15-20 curated images)
- Maps of the city

## Design Philosophy Implemented

✅ **Photography First**: Images are focal points, text is supporting
✅ **Minimalist**: Grayscale only, no decorative elements
✅ **Editorial**: Monospace typography signals documentation/observation
✅ **Scalable**: Add new issues by duplicating a destination folder and updating editorials/index.html
✅ **Consistent**: All pages share the same structure and styling
✅ **Accessible**: Responsive design works on mobile, tablet, desktop

## Testing

The site is ready to view:
1. Open `/editorials/index.html` to see the landing page
2. Click any cover to view an individual editorial
3. Use "Previous/Next" buttons to navigate between issues
4. All navigation links back to main portfolio and About page work

Enjoy building this out! 🎨
