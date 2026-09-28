# Lim Johern — Personal portfolio

A responsive, static React + Vite portfolio. No backend, API keys, paid services or external fonts are required. Nothing has been published. Your supplied resume is included as `public/resume.pdf`.

## 1. Prerequisites

- Install **Node.js 24 LTS** with npm from [nodejs.org](https://nodejs.org/). This project supports Node.js 22.12+; Node 24 is recommended and used by the deployment workflow. `.nvmrc` contains `24` for version managers.
- Install [Git](https://git-scm.com/downloads) to push to GitHub.
- Use a terminal (PowerShell on Windows) and a text editor such as VS Code.

Check installation:

```powershell
node --version
npm --version
git --version
```

If PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`; no execution-policy change is necessary.

## 2. Install and run locally

Open PowerShell:

```powershell
cd "C:\Users\joher\Desktop\Johern portfolio"
npm ci
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173/`). Keep that terminal running. Stop with Ctrl+C. `npm ci` installs exactly the dependency versions in `package-lock.json`; use `npm install` only when deliberately updating dependencies.

Create and preview a production build:

```powershell
npm run build
npm run preview
```

Open the printed preview URL (normally `http://localhost:4173/`). Deploy the generated **dist** directory. The preview server is a local check, not a public production server. [Vite deployment guide](https://vite.dev/guide/static-deploy.html).

## 3. Edit your content

Edit **`src/content.js`**. It contains your profile, email, phone, social links, resume settings, skills, five projects, education and experience placeholder. Save to update the local preview.

| File | Purpose |
| --- | --- |
| `src/content.js` | All personal information and project case studies |
| `src/App.jsx` | Reusable header, buttons, section headings and project cards |
| `src/styles.css` | Colors, typography, layout, responsive and reduced-motion rules |
| `index.html` | Page title, description, language, Open Graph metadata |
| `public/favicon.svg` | Local JL favicon |
| `public/resume.pdf` | Real resume downloaded by the two resume buttons |
| `vite.config.js` | Configurable deployment base path |
| `.github/workflows/deploy.yml` | Build and GitHub Pages deployment |

To change a project, edit its title, description, stack and five `details` fields. Add an object to `projects` to add a card. Set `github` or `demo` to `null` when unavailable: the site displays a labelled disabled button. Enter complete `https://` URLs when ready. `profile.github` is the personal profile; project GitHub URLs must lead to that specific project. Email and phone use `mailto:` and `tel:` links; no messages are sent automatically. Use `null` for an unavailable contact field (and clear `phoneHref` for an unavailable phone).

### Content provenance and honest drafts

- Your resume supplies contact details, education, dates and four project summaries. Your explicit GitHub URL supplies the personal profile.
- MediSnap: [public repository](https://github.com/johernlim/MediSnap); its README describes the recognition pipeline and explicitly leaves live recognition accuracy unverified. This portfolio makes no accuracy or user-count claims.
- CharityLink and Indoor Navigation: resume descriptions; no verified repository or demo URL. Buttons remain unavailable.
- Street Food Explorer: the resume links to its [working demo](https://jasontoh9672.github.io/Front-End-Assignment/). Its [repository](https://github.com/JasonToh9672/Front-End-Assignment) belongs to the linked project account, not to your personal profile. Confirm collaboration and ownership details before sharing.
- Password Manager: selected as the fifth project from [your public repository](https://github.com/johernlim/Password-Manager-Mobile-Application). Java/Android source files exist, but there is no README. Detailed claims and personal contributions are intentionally drafts.
- Problem framing and lessons learned need your review. Every unconfirmed case-study field is visibly marked **Draft**. Stack notes identify editable assumptions. No employers, awards, grades or certificates were invented.
- The skills list includes your suggested skills. **Confirm or remove any skill you cannot discuss confidently**, particularly scikit-learn, logistic regression and VR. The source includes a confirmation reminder.
- Education uses the actual university and study dates from your resume instead of unnecessary placeholders. Update the expected graduation and availability as time passes.

### Resume replacement

Your real PDF is already installed and enabled. To replace it, copy a new file over `public/resume.pdf`, leaving the filename unchanged. In `src/content.js`, keep:

```js
resume: { available: true, file: 'resume.pdf', downloadName: 'Lim-Johern-Resume.pdf' }
```

`file` is relative to `public/`, without a leading slash. To remove the download temporarily, set `available: false`: visitors see the coming-soon/unavailable state. Rebuild after replacement. The PDF is publicly downloadable when you eventually deploy; it contains the contact details you provided for this purpose.

## 4. Base paths: choose the correct address

| Deployment address | `VITE_BASE_PATH` |
| --- | --- |
| `https://johernlim.github.io/REPOSITORY_NAME/` | `/REPOSITORY_NAME/` |
| `https://johernlim.github.io/` from repository `johernlim.github.io` | `/` |
| `https://PROJECT_NAME.pages.dev/` | `/` |
| Custom domain such as `https://example.com/` on either provider | `/` |

The value must begin and end with `/` and match repository capitalization. This is a **build-time** setting: rebuild and redeploy whenever it changes. Hash navigation stays on the current path; resume and favicon URLs use Vite's base. [Official Vite base-path instructions](https://vite.dev/guide/static-deploy.html#github-pages).

Local default is `/`. To test a repository subpath temporarily in PowerShell:

```powershell
$env:VITE_BASE_PATH = '/REPOSITORY_NAME/'
npm run build
npm run preview
```

Visit `http://localhost:4173/REPOSITORY_NAME/`. Stop the preview, then restore the default:

```powershell
Remove-Item Env:VITE_BASE_PATH
npm run build
```

For a persistent local setting, copy `.env.example` to `.env.local` and edit it. Restart Vite after changes. The ignored `.env.local` is not uploaded; configure the deployment provider separately. Existing shell variables override `.env.local`. Never put API keys or other secrets in frontend code or `VITE_*` variables: their values can be exposed publicly.

## 5. Create a repository and push

Sign into [GitHub](https://github.com/new) and create an empty **public** repository named `johern-portfolio` (or your chosen name). Do not initialize a README, license or gitignore remotely because the project already exists locally. Public repositories can use GitHub Pages on GitHub Free.

Run from the project folder, replacing the URL if you chose another repository name:

```powershell
git init
git add .
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/johernlim/johern-portfolio.git
git push -u origin main
```

If Git asks for identity, set your name and preferred GitHub commit email (a GitHub noreply email is fine), then repeat the commit:

```powershell
git config user.name "Lim Johern"
git config user.email "YOUR_GITHUB_COMMIT_EMAIL"
```

Authenticate using Git Credential Manager's browser prompt. Do not paste tokens into project files. If `origin` already exists, inspect `git remote -v`; use `git remote set-url origin YOUR_REPOSITORY_URL` only if it needs changing.

Future updates:

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

The gitignore excludes dependencies, build output, local environment files and QA artifacts. Keep the lockfile and resume tracked. Pushing `main` triggers the included Pages workflow; configure Pages as below before relying on deployment. If using only Cloudflare, remove `.github/workflows/deploy.yml` before pushing to avoid an unused GitHub Pages run.

## 6. Deploy to GitHub Pages

1. Push your repository and open **Settings → Pages**.
2. Set **Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select `main`, and run. Future pushes to `main` rebuild automatically.
4. Wait for both build and deploy jobs to succeed. Open the URL shown by the deployment.

The workflow installs Node 24, runs `npm ci` and `npm run build`, uploads `dist`, and deploys it with the required Pages/token permissions. It gets the actual base path from `actions/configure-pages`, including user sites and custom domains. An optional repository **Settings → Secrets and variables → Actions → Variables** value named `VITE_BASE_PATH` overrides this; normally leave it unset. Remove an outdated override after changing the domain.

If the first push ran before Pages was enabled, rerun the workflow after configuring Pages. If you see a blank page or asset 404s, verify the base path, rebuild and inspect the Actions log. [GitHub custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [configure-pages outputs](https://github.com/actions/configure-pages).

## 7. Deploy to Cloudflare Pages

1. Sign into Cloudflare. Open **Workers & Pages → Create application → Pages → Import an existing Git repository**.
2. Connect GitHub, grant access to the portfolio repository, and select it.
3. Configure production branch `main`, build command **`npm run build`**, output directory **`dist`**, and root directory blank (repository root).
4. In build environment variables, set `NODE_VERSION` to `24` and `VITE_BASE_PATH` to `/` for production and previews.
5. Save and deploy. Wait for success, then open the generated `pages.dev` URL. New pushes rebuild automatically.

No Wrangler configuration, database or Worker is needed. [Cloudflare React deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/), [build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## 8. Optional custom .com domain

**A `.com` domain normally requires paid annual registration and renewal. Hosting can remain free within the provider's free-tier limits. A free `github.io` or `pages.dev` address is a subdomain, not a free `.com`.** Compare renewal prices as well as introductory offers at a registrar. No domain has been bought for this project.

Choose one provider for a hostname; do not point the same hostname at both. Keep existing mail/MX records when changing website DNS. The registrar sells the domain; your DNS provider controls its records; Pages serves the site.

### GitHub Pages custom domain

1. Register your domain. [Verify ownership in GitHub account Settings → Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) using its supplied TXT record; retain that record.
2. Add the domain in repository **Settings → Pages → Custom domain** before changing website DNS.
3. At your DNS provider, add four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Add `www` as a `CNAME` to `johernlim.github.io` (no protocol or repository path). Remove conflicting website records; avoid wildcard records.
4. Rebuild with `/`. This workflow detects the domain automatically; clear any old repository base override. Actions deployments do not require `public/CNAME`.
5. Allow DNS propagation, then enable **Enforce HTTPS** when available. Check both apex and `www`; GitHub redirects to the selected domain.

See [GitHub DNS instructions and current addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [HTTPS troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https). Windows DNS check: `Resolve-DnsName example.com -Type A` (replace the example).

### Cloudflare Pages custom domain

1. Open your Pages project → **Custom domains → Set up a domain**, then enter the purchased domain.
2. For an apex such as `example.com`, add the domain as a zone in the same Cloudflare account. Set its nameservers at the registrar to the exact pair Cloudflare supplies. Review imported DNS records; preserve mail records. Cloudflare sets up the Pages DNS record.
3. For only `www.example.com`, external DNS can remain: first associate it in Pages, then add a `CNAME` for `www` pointing to `YOUR_PROJECT.pages.dev`. Do not create DNS alone without associating the hostname in Pages.
4. Keep `VITE_BASE_PATH=/` and redeploy if it changed. Wait for the custom domain and certificate to become active, then test HTTPS. If certificate issuance fails, check DNS and restrictive CAA records using the provider guide.

Adding apex and `www` requires configuring both; choose a primary hostname and configure a redirect if desired. [Cloudflare custom domain and certificate guidance](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## 9. Before sharing with recruiters

- [ ] Replace draft problem statements and lessons with your own accurate reflections.
- [ ] Confirm each project's personal contribution and team context.
- [ ] Complete the Password Manager case study; confirm its stack.
- [ ] Confirm Street Food Explorer repository attribution and proposed stack.
- [ ] Add CharityLink and Indoor Navigation repositories if public; add actual demos where available. Keep unavailable states otherwise.
- [ ] Review every skill; remove anything you cannot substantiate.
- [ ] Confirm internship availability, expected graduation and contact details are current.
- [ ] Review the downloadable resume and update it if needed.
- [ ] Update `index.html` metadata if changing your name or positioning.
- [ ] Select the correct deployment base and verify the live URL after deploying.
- [ ] Test phone and desktop, keyboard navigation, project details, resume download, and all external links on the deployed site.

## Accessibility and maintenance

Semantic headings and landmarks, a skip link, visible keyboard focus, native project disclosures, labelled unavailable buttons and a keyboard-accessible mobile menu are included. Escape closes the mobile menu. Reduced-motion preferences disable smooth scrolling and hover transitions. There are no proficiency percentages, trackers, cookies, stock photos or contact forms. All assets are local.

Use `npm run build` after content edits. Deployment documentation was checked against official sources on **29 September 2026**; follow the linked provider guides if dashboard labels change. See `VERIFICATION.md` for this handoff's checks and limits.
