# Local-First PWA Exploration

This branch explores turning the app into a local-first ClojureScript PWA that runs on phones.

## Goals

- **Offline-first**: Works without network connection
- **Local storage**: All data stored in browser (IndexedDB)
- **PWA installable**: Add to home screen on mobile
- **Optional sync**: Later add server sync if desired

## Architecture

```
┌─────────────────────────────────────────┐
│              ClojureScript              │
│  ┌─────────────┐  ┌─────────────────┐  │
│  │   Reagent   │  │   DataScript    │  │
│  │     UI      │  │   (in-memory)   │  │
│  └─────────────┘  └────────┬────────┘  │
│                            │           │
│  ┌─────────────────────────▼────────┐  │
│  │         IndexedDB Persist        │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Tech Stack

- **shadow-cljs**: ClojureScript build tool
- **Reagent**: React wrapper for UI
- **DataScript**: In-memory Datalog database
- **datascript-transit**: Persist DataScript to IndexedDB
- **Pico CSS**: Styling (same as server version)

## Project Structure

```
src/
  cljs/
    rp/
      core.cljs       # Entry point
      db.cljs         # DataScript schema & queries
      storage.cljs    # IndexedDB persistence
      ui.cljs         # Reagent components
      plan.cljs       # Training plan logic
resources/
  public/
    manifest.json     # PWA manifest
    sw.js             # Service worker
```

## Implementation Status

- [ ] Set up shadow-cljs
- [ ] Create PWA manifest
- [ ] Create service worker
- [ ] Port plan.cljs from server
- [ ] Create DataScript schema
- [ ] Build IndexedDB persistence layer
- [ ] Build Reagent UI components
- [ ] Test offline functionality
- [ ] Add install prompt

## Development

```bash
npm install
npx shadow-cljs watch app
```

## Building for Production

```bash
npx shadow-cljs release app
```

The output will be in `resources/public/js/` - serve with any static server.
