# The Learning Museum

A nostalgic tribute to 90s web design, built as a practical Vue 3 learning resource.

---

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Styling**: Tailwind CSS v3
- **Build**: Vite 5
- **Theme**: 90s Retro Web Aesthetic

---

## Live Links

- **Vercel**: https://59-starter-repo-demo.vercel.app
- **Cloudflare Pages**: https://59-starter-repo-demo.pages.dev
- **GitHub Pages**: https://mk-knight23.github.io/59-starter-repo-demo/

### Deployment Platforms
- ✅ Vercel (configured: prj_ebbim5TYbig5wVyIzmFsbUfXHGNq)

---

## How to Run Locally

```bash
# Clone the repository
git clone https://github.com/mk-knight23/30-repo-demo-v1.git
cd 30-repo-demo-v1

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## What Will I Learn Here?

This museum is organized into three galleries, each focusing on a different aspect of Vue 3 development:

**The Intro Gallery** covers fundamentals—setting up your first Vue app, understanding the Composition API, and getting comfortable with Vue's reactive system.

**The Components Gallery** explores the building blocks of Vue interfaces. You'll find exhibits on props, events, slots, and component communication patterns.

**The Patterns Gallery** contains real-world solutions to common problems: state management approaches, composables, and architectural decisions you'll face in actual projects.

Each exhibit includes working code you can interact with, explanations written in plain language, and suggestions for where to go next.

## Who Is This For?

This is for developers who:
- Know HTML, CSS, and JavaScript
- Have heard about Vue 3 but haven't built anything with it yet
- Learn better by tinkering than by reading documentation alone
- Appreciate (or at least tolerate) retro web aesthetics

You don't need prior Vue experience. You don't need to know TypeScript (though the code is typed if you want to look). You just need curiosity and a browser.

## How Should I Go Through It?

However you want. Seriously.

The museum structure is non-linear. Start with whatever catches your eye. The Intro Gallery makes sense if you prefer order. The Patterns Gallery might be more interesting if you like solving puzzles first and understanding theory later.

Each exhibit has a "Try It" section where you can modify the code and see what happens. Actually using the code teaches more than reading about it.

## Why This Structure?

Most tutorials try to be comprehensive. They exhaustively cover every feature and option. This museum takes the opposite approach: it shows you just enough to get something working, then lets you explore.

The 90s aesthetic isn't just nostalgia—it's a reminder that you can build useful things without perfect design. The early web was messy, creative, and accessible. This museum tries to capture that spirit.

---

## Design Notes

### Intentional Quirk

One element on each page is intentionally misaligned by a pixel or two. This recreates the handmade feel of table-based layouts where perfect alignment was rare. Look for it—it's subtle.

### Tradeoff Made

True 90s color combinations often fail modern accessibility standards. This museum adjusts the classic palette slightly to maintain WCAG AA compliance while keeping the retro feel. The colors look 90s-ish but won't strain your eyes as much as the real thing.

### Limitation Accepted

Responsive design wasn't a thing in the 90s. Sites were built for 800x600 displays and that's it. This museum uses a fixed-width layout that works best on desktop. It won't break on mobile, but it won't be pleasant either—just like browsing the real 90s web on a phone would have been.

### What I Didn't Build

This is a static museum, not a functioning 90s portal:

- The visitor counter is a static number (no server-side tracking)
- The guestbook uses local storage (persists only on your machine)
- There are no webrings, MIDI files, or Java applets
- The "under construction" animations are CSS, not GIFs

The focus is on learning Vue, not recreating every 90s web quirk.

---

## Building for Production

```bash
npm run build
```

Output goes to the `dist` directory.

---

## Credits

Built with Vue 3, Tailwind CSS, and a genuine affection for the early web. The Kazi theme color scheme provided the starting point, even if it's now buried under layers of nostalgia.

---

*Best viewed in any modern browser. Netscape Navigator optional.*
