# ORVECT — Investor presentation

16-slide investor deck, extracted from the ORVECT product frontend into a standalone
Next.js app so it can be published on GitHub Pages without the product code.

**Live:** https://derka1385.github.io/orvect-investor-deck/

Navigation: `←` / `→` / `Space`, `Home` / `End`, `Overview` for the grid, `Print / PDF`
to export, `Fullscreen` for presenting. The current slide is kept in the `?slide=` query
parameter, so any slide can be linked directly.

## Local

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into out/
```

`next.config.ts` sets `basePath` to `/orvect-investor-deck` for Pages. Override with
`PAGES_BASE_PATH=` when serving from a domain root.

## Source of truth

The slide content lives in `src/components/presentation/`, copied from
`ORVECT_Program/frontend/src/components/presentation/`. Two deliberate differences:
the "← Project map" link is removed (no such route here) and `OrvectProduct.tsx`
carries only the wordmark.

Figures in the deck (valuation, dilution, pricing, TAM) are working hypotheses,
labelled as such on the slides themselves.
