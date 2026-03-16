# 90s Web Design System - Learning Museum

> "Best viewed in Netscape Navigator 4.0 at 800x600 resolution"

## Design Philosophy

This museum embraces the raw, unpolished charm of mid-90s web design. Think Geocities, early Yahoo!, and those personal homepages that felt like digital handmade crafts. It's nostalgic but functional—authentic without being unusable.

---

## Color Palette

The authentic 90s web palette, derived from the Web Safe Color spectrum and default system colors:

| Color | Hex | Usage |
|-------|-----|-------|
| **Navy** | `#000080` | Primary headers, links, navigation backgrounds |
| **Green** | `#008000` | Success states, visited links, accents |
| **Red** | `#FF0000` | Warnings, errors, attention grabbers |
| **Yellow** | `#FFFF00` | Highlights, caution boxes, selected items |
| **Silver** | `#C0C0C0` | Borders, table backgrounds, dividers |
| **Black** | `#000000` | Primary text |
| **White** | `#FFFFFF` | Page backgrounds, contrast text |
| **Teal** | `#008080` | Secondary accents, hover states |
| **Maroon** | `#800000` | Alternative headers, special sections |
| **Olive** | `#808000` | Subdued accents, timestamps |

### Background Patterns
- Subtle starfield (CSS generated)
- Checkered patterns for section dividers
- Solid grays for content areas (#E0E0E0, #F0F0F0)

---

## Typography

### Font Stack (in order of 90s authenticity):

```css
/* Headers - The classic Times New Roman */
font-family: "Times New Roman", Times, serif;

/* Navigation - Comic Sans for that playful feel */
font-family: "Comic Sans MS", "Chalkboard SE", cursive;

/* Code - Monospace Courier */
font-family: "Courier New", Courier, monospace;

/* Body text - Georgia for readability with retro feel */
font-family: Georgia, "Times New Roman", serif;
```

### Type Scale
- **H1**: 24px, bold, navy
- **H2**: 18px, bold, maroon
- **H3**: 14px, bold, black
- **Body**: 12px-14px, black
- **Small/Note**: 10px, gray (#666666)
- **Code**: 12px, Courier New, green or black on gray

---

## Layout Patterns

### Table-Based Layouts
All major layouts use table structures (styled with CSS but semantic table HTML):

```
┌─────────────────────────────────────┐
│          HEADER BANNER              │
├──────────┬──────────────────────────┤
│          │                          │
│  SIDEBAR │      MAIN CONTENT        │
│  NAV     │      AREA                │
│          │                          │
│          │                          │
├──────────┴──────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

### Spacing
- Default cell padding: 8px-12px
- Section margins: 16px-24px
- Border thickness: 1px-2px (3D bevel effect)
- No rounded corners (authentic 90s feel)

### Borders & 3D Effects
```css
/* Classic raised button look */
border: 2px outset #C0C0C0;

/* Sunken panel look */
border: 2px inset #C0C0C0;

/* Simple divider */
border: 1px solid #000080;
```

---

## Component Patterns

### Navigation Links
- Underlined by default (not just on hover)
- Blue (#000080) for unvisited
- Purple (#800080) or Green (#008000) for visited
- No hover effects (browsers didn't do that yet)

### Buttons
- 3D beveled edges (outset border)
- Gray background (#C0C0C0)
- Black text
- Pressed state uses inset border

### Code Blocks
- Gray background (#E8E8E8 or #F0F0F0)
- 1px solid border (#999999)
- Courier New font
- Optional: "Code:" label in bold above

### "Under Construction" Elements
Instead of actual GIFs (for performance), use CSS to recreate:
- Blinking text animation (sparingly!)
- Yellow caution backgrounds
- Animated border patterns
- "Coming Soon" banners

### Horizontal Rules
- Not just a line—use multiple colors for 3D effect:
```css
border-top: 1px solid #808080;
border-bottom: 1px solid #FFFFFF;
```

---

## Animation Guidelines

### Marquee Text (CSS Only)
- Use CSS animation, NOT the deprecated `<marquee>` tag
- Speed: 15-20 seconds for full scroll
- Direction: Right to left (traditional)
- Background: Often colored bar

### Blinking Elements
- Use very sparingly (once per page max)
- 1 second on/off cycle
- Apply to "NEW" badges or warnings only

### Hover States
- Keep minimal—hover effects weren't common in 90s
- Simple color change is enough
- No transitions (instant state change)

---

## Intentional Quirk: Misalignment

One element per major section is intentionally misaligned by 1-2 pixels:

```css
.quirk-offset {
  position: relative;
  left: 1px;
  top: 2px;
}
```

This recreates the handmade feel of table-based layouts where cells didn't always align perfectly.

---

## Tradeoff: Accessibility vs Authenticity

**The Tradeoff**: Some 90s patterns conflict with modern accessibility standards.

**Decision**: Prioritize keyboard navigation and screen reader compatibility while keeping the visual aesthetic authentic.

- All interactive elements remain keyboard accessible
- Skip links are provided (styled to fit the era)
- Color contrast meets WCAG AA (slightly adjusted from pure 90s colors)
- Semantic HTML structure maintained (despite table layouts)

---

## Image Substitutions (CSS Instead of GIFs)

Instead of loading dozens of 90s GIFs, recreate common patterns with CSS:

- **Visitor counters**: Static numbers in a digital-looking font
- **Construction workers**: Simple CSS animations or emoji
- **Email icons**: Unicode symbols or simple CSS shapes
- **Dividers**: CSS gradients or border patterns
- **Backgrounds**: CSS patterns instead of tiled images

This keeps the site fast while maintaining the aesthetic.

---

## Responsive Approach

**Limitation Accepted**: True 90s sites weren't responsive—they were built for 800x600.

This museum uses a **hybrid approach**:
- Fixed max-width container (960px) for authentic feel
- Minimum width of 640px (no mobile optimization)
- Viewport meta tag present but desktop-focused

The mobile experience is "functional but not optimized"—just like browsing on a phone in 1999 would have been.

---

## File Naming Conventions

In honor of 90s conventions:
- Lowercase with underscores: `main_header.jpg`
- 8.3 format respected for critical files
- No spaces in filenames
- Version numbers: `style_v2.css`

---

## Browser Compatibility Statement

"This site is optimized for Netscape Navigator 4.0 and Internet Explorer 4.0 or higher. Best viewed at 800x600 resolution with 256 colors or higher."

(Modern browsers will render it perfectly, but the statement adds authenticity.)

---

## What Was Intentionally NOT Built

To keep this project focused:

1. **No actual server-side visitor counter** - Static display only
2. **No guestbook backend** - Local storage simulation
3. **No webrings** - Would require external coordination
4. **No MIDI background music** - Respect the user's sanity
5. **No frame-based navigation** - Tables are enough complexity
6. **No Java applets** - Obviously
7. **No hit counters with CGI** - Static numbers only

The experience is a **snapshot museum**, not a functioning 90s time portal.

---

*Last Updated: 1997... I mean, 2026*
