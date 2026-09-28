# Verification — 29 September 2026

## Completed

- Installed dependencies and generated `package-lock.json`; npm reported zero vulnerabilities at installation time.
- Production build passed with Node 24.11.0 and Vite 7.3.6. Final root-domain output is in `dist/`.
- An additional build with `VITE_BASE_PATH=/portfolio-check/` passed. Browser rendering at that subpath showed all five projects and correctly prefixed resume/favicon URLs.
- Desktop, 390px mobile and 320px narrow mobile layouts inspected; no horizontal overflow detected.
- All five project disclosures opened and closed with Enter. Mobile menu opened, closed after navigation, and closed with Escape.
- Every hash navigation target exists. Visible keyboard focus and native disclosure semantics checked.
- Root and subpath resume/favicon requests returned HTTP 200 with the expected PDF/SVG content types.
- The installed resume's SHA-256 matches the supplied PDF byte for byte.
- No browser console warnings or errors observed during the production-subpath check.
- Public GitHub API confirmed the personal account and linked project repositories. Street Food Explorer's supplied demo returned HTTP 200.
- LinkedIn's URL matches the resume annotation; LinkedIn returned HTTP 999 to the automated request, so profile availability was not independently verified. Review it in a normal signed-in browser.
- Deployment and domain guidance checked against official Vite, GitHub and Cloudflare documentation linked in README.md.

## Limits and remaining owner review

- GitHub Actions and Cloudflare deployment have not been run against an external account: publication was explicitly excluded. The workflow and build output are prepared for deployment.
- Draft project descriptions, lessons learned, individual contribution details and suggested skills need the owner's confirmation. No project functionality or AI accuracy was independently tested.
- Email and phone link destinations were checked, but no email was sent and no phone call was placed.
- Reduced-motion behavior is implemented in CSS. This is a practical browser review, not a formal accessibility certification or device-lab test.

The `.qa/` directory holds ignored local verification artifacts and is not part of the deployment. The resume review image is also ignored. Neither is included in `dist/`.
