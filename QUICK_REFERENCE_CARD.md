# Quick Reference Card: Editorial Workflow

## Copy-Paste Workflow (5 Minute Setup)

### Step 1: Create Folder
```bash
cp -r editorials/destinations/yinchuan editorials/destinations/[slug]
```

### Step 2: Replace These 5 Things in index.html

**FIND & REPLACE #1: Title**
```
Find:  Notes from Yinchuan
Replace: Notes from [Your City]
```

**FIND & REPLACE #2: Issue Number**
```
Find:  Issue 01
Replace: Issue [##] 
```

**FIND & REPLACE #3: Subtitle**
```
Find:  Where ancient Silk Roads meet urban energy
Replace: [Your one-line subtitle]
```

**FIND & REPLACE #4: Cover Image**
```
Find:  <img src="Yinchuan_Cover.jpg"
Replace: <img src="[YourCity]_Cover.jpg"
```

**FIND & REPLACE #5: Essentials Data (8 items)**
```
Region, Elevation, Population, Best Time, Language, Currency, Daily Budget, Visa
All in the <aside class="essentials"> section
```

---

## Issue-by-Issue Sequence

| Issue | City | Slug | Subtitle | Prev | Next |
|-------|------|------|----------|------|------|
| 01 | Yinchuan | yinchuan | Where ancient Silk Roads meet urban energy | — | hongkong |
| 02 | Hong Kong | hong-kong | Vertical city of contrasts and tradition | yinchuan | tokyo |
| 03 | Tokyo | tokyo | Neon lights and ancient temples | hongkong | xining |
| 04 | Xining | xining | Gateway to the Tibetan plateau | tokyo | chengdu |
| 05 | Chengdu | chengdu | Land of abundant resources and culture | xining | chongqing |
| 06 | Chongqing | chongqing | Mountain city shrouded in mist | chengdu | hanoi |
| 07 | Hanoi | hanoi | A thousand years of history | chongqing | kuala-lumpur |
| 08 | Kuala Lumpur | kuala-lumpur | Modern towers and colonial charm | hanoi | zhangye |
| 09 | Zhangye | zhangye | Rainbow mountains in the desert | kualalumpur | — |

---

## Article Structure Template (Copy-Paste Sections)

```html
<article class="essay">
    <h2>Section Title 1</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    
    <div class="photo-gallery">
        <img src="Image1.jpg" alt="description" class="gallery-image">
        <img src="Image2.jpg" alt="description" class="gallery-image">
    </div>

    <h2>Section Title 2</h2>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    
    <div class="photo-gallery three-col">
        <img src="Image1.jpg" alt="" class="gallery-image">
        <img src="Image2.jpg" alt="" class="gallery-image">
        <img src="Image3.jpg" alt="" class="gallery-image">
    </div>

    <!-- Repeat pattern for 6-8 sections total -->
    <!-- End with 2 paragraph synthesis section (no image) -->
</article>
```

---

## Location Grid Template (Copy-Paste Item)

```html
<div class="location-item">
    <div class="location-name">Site Name</div>
    <div class="location-type">Historic Monument</div>
    <div class="location-description">Description here.</div>
</div>
```

**Categories to use**: 
- Historic Monument
- Museum
- Temple/Religious Site
- Street/Market
- Park/Nature
- Modern Architecture
- Cultural Site
- Shopping District

---

## Navigation Template

**For Issue 02 (not first, not last):**
```html
<div class="editorial-nav">
    <a href="../yinchuan/" class="nav-item prev">
        <div class="nav-label">← Previous</div>
        <div class="nav-title">Notes from Yinchuan</div>
    </a>
    <a href="../tokyo/" class="nav-item next">
        <div class="nav-label">Next →</div>
        <div class="nav-title">Notes from Tokyo</div>
    </a>
</div>
```

**For Issue 01 (first):**
```html
<div class="editorial-nav">
    <a href="#" class="nav-item prev disabled">
        <div class="nav-label">← Previous</div>
        <div class="nav-title">No previous issue</div>
    </a>
    <a href="../hong-kong/" class="nav-item next">
        <div class="nav-label">Next →</div>
        <div class="nav-title">Notes from Hong Kong</div>
    </a>
</div>
```

**For Issue 09 (last):**
```html
<div class="editorial-nav">
    <a href="../kuala-lumpur/" class="nav-item prev">
        <div class="nav-label">← Previous</div>
        <div class="nav-title">Notes from Kuala Lumpur</div>
    </a>
    <a href="#" class="nav-item next disabled">
        <div class="nav-label">Next →</div>
        <div class="nav-title">No next issue</div>
    </a>
</div>
```

---

## Essentials Template (Replace These Values)

```html
<div class="essential-item">
    <div class="essential-label">Region</div>
    <div class="essential-value">[Region]</div>
</div>
<div class="essential-item">
    <div class="essential-label">Elevation</div>
    <div class="essential-value">[meters] m ([feet] ft)</div>
</div>
<div class="essential-item">
    <div class="essential-label">Population</div>
    <div class="essential-value">~[number] million</div>
</div>
<div class="essential-item">
    <div class="essential-label">Best Time</div>
    <div class="essential-value">[Month]–[Month]</div>
</div>
<div class="essential-item">
    <div class="essential-label">Language</div>
    <div class="essential-value">[Language], [Language]</div>
</div>
<div class="essential-item">
    <div class="essential-label">Currency</div>
    <div class="essential-value">[Currency Name] ([Code])</div>
</div>
<div class="essential-item">
    <div class="essential-label">Daily Budget</div>
    <div class="essential-value">$[low]–[high] USD</div>
</div>
<div class="essential-item">
    <div class="essential-label">Visa</div>
    <div class="essential-value">[Yes/No/Duration]</div>
</div>
```

---

## Writing Tips (For Speed)

**Banned Words/Phrases** (search and remove):
- "Of course"
- "Generally"
- "In summary"
- "Overall"
- "Certainly"
- "It seems"
- "Notably"
- "It is worth noting"
- "It is important to note"
- "—" (em dash)

**Good Sentence Starters**:
- Stand [location] and you see...
- The [noun] serves as...
- Walking through [location]...
- Here, [observation]...
- This is where [city]...
- The pattern suggests...

**Article Flow**:
1. Section 1 (paragraphs 1-3): Iconic opening
2. Section 2 (para 2-3): Street life / daily rhythm
3. Section 3 (para 2-3): Religious/cultural
4. Section 4 (para 3-4): History/narrative
5. Section 5 (para 3-4): Modern/future
6. Section 6 (para 2-3): Landscape/geography
7. Section 7 (para 2): Synthesis
8. Optional: Photo essay intro (para 1)

---

## Pre-Publish Checklist

- [ ] Title, issue, subtitle updated
- [ ] All 5 Find & Replace items done
- [ ] All 8 essentials filled in accurately
- [ ] Cover image displays
- [ ] All article images display (no broken links)
- [ ] 10 locations listed
- [ ] Previous/Next links correct
- [ ] Word count 2000+
- [ ] No em dashes (search: —)
- [ ] No banned words (search: "Of course," "Generally," etc.)
- [ ] Proof-read

---

## Estimated Time Per Editorial

- Folder copy & image swap: **5 min**
- Find & replace header: **3 min**
- Fill essentials: **10 min**
- Write article: **45-60 min**
- Add locations: **10 min**
- Review & fix: **10 min**
- **TOTAL: 80-95 minutes**

**With practice: Down to 70 minutes**

---

## Files Reference

- **EDITORIAL_TEMPLATE_GUIDE.md** — Full workflow with all details
- **DESTINATIONS_METADATA.md** — All facts for all 9 cities
- **TEMPLATE_README.md** — Editing instructions for each section
- **QUICK_REFERENCE_CARD.md** — This file (fast reference)
