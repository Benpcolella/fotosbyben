# Editorial Template Guide

## Overview

The Yinchuan editorial demonstrates the full structure. Use this guide to replicate it for the remaining 8 destinations efficiently.

## File Structure Template

Each destination folder needs:
```
editorials/destinations/[destination-slug]/
├── index.html (copy from template, customize content)
└── [all images in this folder]
    ├── [Destination]_Cover.jpg (required)
    ├── [location1].jpg
    ├── [location2].jpg
    └── [etc]
```

## Step-by-Step Process

### 1. Copy & Rename the Yinchuan Folder
```bash
cp -r editorials/destinations/yinchuan editorials/destinations/[new-destination]
```

Example for Hong Kong:
```bash
cp -r editorials/destinations/yinchuan editorials/destinations/hong-kong
```

### 2. Delete Yinchuan Images
Remove all `.jpg` files from the new folder. Keep only the `index.html`.

### 3. Add New Images
Upload images for the new destination to its folder, following the naming convention from Yinchuan (descriptive names, underscores, capital first letters).

### 4. Update the HTML Header

In `index.html`, update the header section:

```html
<h1 class="editorial-title">Notes from [Destination]</h1>
<div class="issue-info">Issue XX</div>
<p class="editorial-subtitle">[One-line subtitle about the place]</p>

<!-- Cover image filename -->
<img src="[Destination]_Cover.jpg" alt="[Destination] cover" class="editorial-cover-img">
```

### 5. Update The Essentials Sidebar

Replace the placeholder data with actual information for each destination:
```html
<div class="essential-item">
    <div class="essential-label">Region</div>
    <div class="essential-value">[Region name]</div>
</div>
```

### 6. Write the Article

Replace the essay content with 5-8 sections following this pattern:

```html
<h2>[Section Title]</h2>

<p>[Opening paragraph establishing the theme or location]</p>

<p>[Middle paragraph with specific observation or detail]</p>

<p>[Concluding paragraph connecting to broader narrative]</p>

<div class="photo-gallery">
    <img src="ImageName1.jpg" alt="description" class="gallery-image">
    <img src="ImageName2.jpg" alt="description" class="gallery-image">
</div>
```

## Content Structure (Proven Pattern from Yinchuan)

**Section 1: Iconic Opening Monument**
- The signature landmark that defines the city
- Establishes the visual identity
- 3 paragraphs + 1 image

**Section 2: Daily Life & Street Energy**
- Commerce, vendors, how the city functions
- Human scale observation
- 2 paragraphs + 2-3 images

**Section 3: Religious/Cultural Site**
- Temple, pagoda, or spiritual landmark
- Connection to landscape and history
- 2 paragraphs + 1 image

**Section 4: Historical Narrative**
- Archaeology, museums, cultural layers
- What the city lost or preserved
- 3 paragraphs + 2 images

**Section 5: Modern Architecture**
- Contemporary building projects
- Vision for the future
- 3 paragraphs + 2-3 images

**Section 6: Landscape/Geography**
- Parks, rivers, mountains, natural context
- Emotional register and scale
- 2 paragraphs + 2 images

**Section 7: Synthesis**
- How the city reconciles past and future
- What makes it distinctive
- 2 paragraphs (no image)

**Section 8 (Optional): Photo Essay**
- Additional street life or architectural images
- 1 paragraph intro + 3 images

## Writing Guidelines

**Tone**: Senior travel magazine editor
- Observational, specific, authoritative
- Show, don't tell
- Ground abstract ideas in visual detail

**Prohibited**:
- No em dashes (use colons, semicolons, periods, commas)
- No hedging language ("Of course," "Generally," "In summary," "It seems," "Notably," "Overall," "Certainly")
- No filler ("It is worth noting," "It is important to note")

**Word Count**: 2,000-2,500 words for the article

**Images**: 
- Total 10-15 images embedded throughout
- 2-column galleries for most sections
- 3-column gallery for architecture section
- Single image for temple/pagoda sections
- Mix photo types: architecture, streets, details, landscape

## Locations Reference Grid

Keep this structure (2-column, 10 locations):
```html
<div class="location-item">
    <div class="location-name">[Site Name]</div>
    <div class="location-type">[Category: Historic Monument, Museum, Street, Park, etc]</div>
    <div class="location-description">[2-3 sentences about why it matters]</div>
</div>
```

## Navigation Links

Update the navigation at the bottom to link to previous/next destinations:

**Yinchuan (Issue 01)** → Previous: disabled | Next: Hong Kong
**Hong Kong (Issue 02)** → Previous: Yinchuan | Next: Tokyo
**Tokyo (Issue 03)** → Previous: Hong Kong | Next: Xining
[etc]

Template code:
```html
<a href="../[prev-destination]/" class="nav-item prev">
    <div class="nav-label">← Previous</div>
    <div class="nav-title">Notes from [Previous Destination]</div>
</a>
<a href="../[next-destination]/" class="nav-item next">
    <div class="nav-label">Next →</div>
    <div class="nav-title">Notes from [Next Destination]</div>
</a>
```

## Destinations Checklist

- [ ] Issue 01: Yinchuan — ✅ Complete
- [ ] Issue 02: Hong Kong
- [ ] Issue 03: Tokyo
- [ ] Issue 04: Xining
- [ ] Issue 05: Chengdu
- [ ] Issue 06: Chongqing
- [ ] Issue 07: Hanoi
- [ ] Issue 08: Kuala Lumpur
- [ ] Issue 09: Zhangye

## Time Per Editorial

Once template is refined:
- Copy folder: 1 min
- Add images: 5 min (depends on how you organize)
- Update header/essentials: 10 min
- Write article: 45-60 min
- Review/refine: 15 min
- **Total: ~75-90 minutes per destination**

## Tips for Speed

1. **Batch organize images** before starting writing (all 9 destinations' images sorted and renamed)
2. **Research essentials data** for all 9 cities in advance
3. **Outline article sections** before writing prose
4. **Use the Yinchuan piece as reference** for style and pacing
5. **Keep editorial/index.html open** while writing to copy/paste structure

## Custom Touches Per Destination

While structure stays consistent, vary:
- **Number of major sections** (5-8 depending on city complexity)
- **Image types emphasized** (landscape-heavy for nature cities, street-heavy for urban centers)
- **Thematic focus** (history, modernity, food culture, spirituality, geography—whichever is strongest for that city)
- **Opening monument** (always unique to each city)
- **Closing synthesis** (always specific to that city's particular challenge/identity)

## Editing Checklist

Before publishing each editorial:
- [ ] Cover image displays correctly
- [ ] All image filenames match files in folder
- [ ] No broken img src paths
- [ ] All "Previous/Next" links work
- [ ] No em dashes in text
- [ ] No hedging language present
- [ ] Essentials data is accurate and current
- [ ] Locations grid has 10 items
- [ ] Article is 2,000+ words
- [ ] Images are well-distributed throughout (1 per section minimum)
- [ ] Photo galleries use correct CSS classes (2-col, 3-col)

---

**Once all 9 are complete**: Update editorials/index.html to pull cover images from the cover image locations.
