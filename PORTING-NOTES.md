# Reference — Chennai Final Journey (for Angular port)

This folder is the FINISHED design and content, built as static HTML.
Use it as the exact reference when building the Angular version.
**Do not redesign. Match the design, content, colours and behaviour faithfully.**

## Pages (5)
- `index.html`         -> Home          route `/`
- `human-services.html`-> Human Services route `/human-services`
- `pet-services.html`  -> Pet Services  route `/pet-services`
- `about.html`         -> About + Cause route `/about`
- `contact.html`       -> Contact+form  route `/contact`

## Design tokens (from styles.css)
Colours:
- primary  (navy)  #1A3A5C   (dark variant #002444)
- secondary(gold)  #C9A24B
- tertiary (green) #2E5D3B   — used ONLY in pet sections
- background(cream)#F7F4EC
- surface (white)  #FFFFFF
- whatsapp green   #25D366
Fonts: headings = "Playfair Display"; body/UI = "Inter"
Radius: cards 16px, buttons pill (9999px). Soft shadows, generous whitespace.

## Contact config (single source of truth — put in one Angular service/constant)
- phone (display + tel:)  : 8248395391
- phoneAlt (footer only)  : 9791336571
- whatsapp (wa.me, no +)  : 918248395391
- instagram               : https://instagram.com/chennaicremation

## Behaviour to preserve (currently in app.js)
- Click-to-call: every Call button -> tel:+918248395391
- WhatsApp: every WhatsApp button -> wa.me/918248395391 with a prefilled message
- Contact form: validates name+phone, then opens WhatsApp with the details prefilled
  (no backend needed yet)
- Language toggle EN <-> Tamil: switches ALL visible text. In Angular, store the
  EN/TA strings in a translations object/service (or ngx-translate) and toggle with a signal/service.
- Mobile: bottom nav bar. Desktop: floating Call + WhatsApp buttons. Sticky header.

## Tamil
Every piece of text has an English and a Tamil version. In the HTML they are
`<span data-en>` / `<span data-ta>`. Pull BOTH out into translation files —
do not drop the Tamil. Have a native speaker review later.

## Logo
`assets/logo.png` — the real Chennai Final Journey logo (gold lotus-flame on cream).
It already contains the brand name, so the header shows the logo image alone
(the text wordmark is hidden but kept for screen readers/SEO).

## Sections on the Home page (in order)
Hero -> Trust strip (4 items) -> Two service paths (Human navy / Pet green) ->
How it works (3 steps) -> Why choose us (4 cards) -> Our Cause (street animals) ->
Testimonials (2 placeholder quotes) -> Final CTA band -> Footer.

## Still placeholder (replace before launch)
- Hero background image (assets/hero.jpg) — not yet provided
- Testimonials — 2 placeholder quotes, swap for real ones
- Tamil — first-pass translation, needs native review
