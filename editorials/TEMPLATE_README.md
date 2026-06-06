# Editorial Template Instructions

## Quick Start

### For Each New Destination:

1. **Copy the Yinchuan folder** (it has all the structure and styling):
   ```bash
   cp -r destinations/yinchuan destinations/[new-slug]
   ```
   Example: `destinations/hong-kong`

2. **Replace images**: Delete all `.jpg` files from the new folder, upload the new destination's images

3. **Edit index.html** — Find and replace these sections:

### Section 1: Header & Title
```html
<!-- CHANGE THIS: -->
<h1 class="editorial-title">Notes from Yinchuan</h1>
<div class="issue-info">Issue 01</div>
<p class="editorial-subtitle">Where ancient Silk Roads meet urban energy</p>

<!-- TO THIS (example for Hong Kong): -->
<h1 class="editorial-title">Notes from Hong Kong</h1>
<div class="issue-info">Issue 02</div>
<p class="editorial-subtitle">Vertical city of contrasts and tradition</p>

<!-- AND THIS: -->
<img src="Yinchuan_Cover.jpg" alt="Yinchuan cover" class="editorial-cover-img">

<!-- TO THIS: -->
<img src="Hong_Kong_Cover.jpg" alt="Hong Kong cover" class="editorial-cover-img">
```

### Section 2: The Essentials Sidebar
Replace all values in the sidebar with accurate data for the destination. Use the DESTINATIONS_METADATA.md file as reference.

### Section 3: The Essay Content

Replace the entire `<article class="essay">` section with your new destination's content. 

**Keep the same structure:**
- 5-8 `<h2>` section headers
- 2-3 paragraphs per section
- Photo galleries embedded after key sections
- Gallery images with correct filenames

**Example template for a section:**
```html
<h2>Section Title</h2>

<p>[First paragraph setting up the location/theme]</p>

<p>[Second paragraph with specific observation]</p>

<p>[Third paragraph connecting to bigger narrative]</p>

<div class="photo-gallery">
    <img src="ImageFilename.jpg" alt="brief description" class="gallery-image">
    <img src="AnotherImage.jpg" alt="brief description" class="gallery-image">
</div>
```

For 3-column galleries (architecture):
```html
<div class="photo-gallery three-col">
    <img src="Image1.jpg" alt="" class="gallery-image">
    <img src="Image2.jpg" alt="" class="gallery-image">
    <img src="Image3.jpg" alt="" class="gallery-image">
</div>
```

### Section 4: Locations Reference Grid

Replace the 10 location items. Keep the structure:
```html
<div class="location-item">
    <div class="location-name">Site Name</div>
    <div class="location-type">Category (Historic Monument, Museum, Park, etc)</div>
    <div class="location-description">2-3 sentences about why it matters</div>
</div>
```

### Section 5: Navigation Links

Update "Previous" and "Next" to link to adjacent destinations:
```html
<!-- Example for Hong Kong (Issue 02): -->
<a href="../yinchuan/" class="nav-item prev">
    <div class="nav-label">← Previous</div>
    <div class="nav-title">Notes from Yinchuan</div>
</a>
<a href="../tokyo/" class="nav-item next">
    <div class="nav-label">Next →</div>
    <div class="nav-title">Notes from Tokyo</div>
</a>

<!-- If first destination, disable previous: -->
<a href="#" class="nav-item prev disabled">
    <div class="nav-label">← Previous</div>
    <div class="nav-title">No previous issue</div>
</a>

<!-- If last destination, disable next: -->
<a href="#" class="nav-item next disabled">
    <div class="nav-label">Next →</div>
    <div class="nav-title">No next issue</div>
</a>
```

---

## Writing the Article

### Structure
- **Intro section**: Iconic monument or signature visual
- **Mid sections (3-4)**: Key locations, daily life, historical narrative
- **Architecture section**: Modern buildings and future vision
- **Landscape section**: Geography and environmental context
- **Synthesis section**: How the city negotiates past/future
- **Optional**: Photo essay section with additional images

### Tone Checklist
- ✅ Observational, specific, authoritative
- ✅ Show don't tell (use visual detail)
- ❌ No "Of course," "Generally," "In summary," "Overall," "Certainly," "It seems," "Notably"
- ❌ No em dashes — use colons, semicolons, periods, commas instead
- ✅ Ground abstract ideas in concrete images from your photos

### Word Count
- Aim for 2,000-2,500 words

### Image Integration
- Minimum 1 image per section
- 10-15 total images throughout
- Mix 2-column and 3-column gallery layouts
- Gallery captions are optional (images speak for themselves)

---

## Quick Edit Checklist Before Publishing

- [ ] Title, issue number, subtitle updated
- [ ] Cover image filename correct and displays
- [ ] All 8 essential facts are accurate
- [ ] Article text is complete (no placeholder paragraphs)
- [ ] All image filenames match files actually in the folder
- [ ] No broken image links
- [ ] Photo galleries display with correct images
- [ ] 10 locations are listed and described
- [ ] Previous/Next navigation links are correct
- [ ] No em dashes (search for "—")
- [ ] No hedging language (search for "Of course," "Generally," etc)
- [ ] Word count 2,000+
- [ ] Proofread for typos and clarity

---

## File Locations Reference

When writing paths in HTML, remember:
- **Images are in the same folder as index.html**
- So use just the filename: `src="Image.jpg"`
- NOT: `src="../../images/editorials/Image.jpg"`

Structure:
```
editorials/
├── index.html (main landing page)
├── destinations/
│   ├── yinchuan/
│   │   ├── index.html
│   │   ├── Yinchuan_Cover.jpg
│   │   ├── Bell_Tower.jpg
│   │   └── [all images here]
│   ├── hong-kong/
│   │   ├── index.html
│   │   ├── Hong_Kong_Cover.jpg
│   │   └── [all images here]
```

---

## Troubleshooting

**Images not showing?**
- Check filename spelling (case-sensitive: `Bell_Tower.jpg` ≠ `bell_tower.jpg`)
- Verify file is actually in the folder
- Check that file extension matches (`.jpg` not `.JPG`)

**Gallery not formatting correctly?**
- Use `<div class="photo-gallery">` for 2-column
- Use `<div class="photo-gallery three-col">` for 3-column
- Every `<img>` tag must have `class="gallery-image"`

**Navigation links broken?**
- Check slug matches folder name
- Use forward slashes: `../[slug]/` not `../[slug]`
- Test each link before publishing

**Styling looks off?**
- All CSS is in the `<style>` tag at top of index.html
- Don't change it — it's consistent across all editorials
- Only change HTML content, not the `<style>` section

---

## Next Steps After Completing All 9

1. **Update editorials/index.html** to pull cover images from destination folders instead of placeholder paths
2. **Test all navigation** between 9 editorial pages
3. **Proofread all articles** for consistency in voice and style
4. **Add landing page feature** highlighting the latest/featured editorial

---

**Questions?** Refer to EDITORIAL_TEMPLATE_GUIDE.md for deeper guidance.
