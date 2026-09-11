TORC FIX — HARD 404 FOR REMOVED ARTIFACTS

Deze patch zet de directe routes van de 15 verwijderde artifacts hard op 404.
Daarnaast wordt ook de oude langere Gödel-legacyroute geblokkeerd.

Waarom layout.tsx?
Een layout met notFound() blokkeert niet alleen de hoofd-URL, maar ook alle
onderliggende oude evaluator- en reportpagina's. Daardoor blijven oude bookmarks,
browsergeschiedenis en directe links niet meer werken.

Deze patch wijzigt de artifactdataset niet. De eerdere verwijdering van de 15
artifacts blijft dus intact.

Na deploy hoort bijvoorbeeld:
- /artifact/on-formally-undecidable-propositions
- /artifact/on-formally-undecidable-propositions-of-principia-mathematica-and-related-systems-i
- en eventuele /evaluator-* of /report subpagina's
allemaal 404 te geven.
