# Leonid Sokolov — portfolio

Static HTML/CSS portfolio, published with GitHub Pages at https://miriplex.github.io/.

Run a local preview with `python3 -m http.server 8765 --bind 127.0.0.1` and open http://127.0.0.1:8765/.

Pages are plain HTML and can be edited directly. `portfolio.css` contains the shared responsive layout. No build step is required. `navigation.js` adds an accessible mobile menu and current-section highlighting; the links remain usable without JavaScript. The Inter typeface is served locally from `assets/fonts/` under its included SIL Open Font License.

## Content and assets

- Enhava screenshots were captured from https://enhava.app/ on 27 October 2026. The logo was supplied by Leonid. They illustrate the website, not independently verified product performance.
- Dissertation charts redraw Tables 2, 3 and 5 of Leonid's report. `neural-control.html` explains the two-stage methodology, training, nominal screening and limitations, with exact values in accessible HTML tables. `research.js` switches between result panels; both remain visible without JavaScript. `research.css` contains page-specific layouts. The cart-pole drawing is a schematic, not simulated trajectory data.
- The CV is a copy of Leonid's current one-page Word-produced PDF; the portfolio update does not edit its contents.
- VirtuosoHub has a project page covering AI-agent work and backend infrastructure, and remains in Experience. All eight project cards share one grid; Enhava uses the same card size as the others.
- Older project media are retained. `chemistry-app.html` redirects to the fuller A-Exam case study.
- Mirrored World uses a recorded MP4 demonstration instead of an automatically loaded WebGL iframe. Its archived browser game opens separately with general device/browser compatibility guidance and keyboard/mouse requirements. Leonid confirmed that it works on his Mac. The MP4 is a lossless container conversion of the original MOV recording.

Keep personal contributions separate from team work and third-party models. Do not publish private customer data, internal source code or credentials in case studies.
