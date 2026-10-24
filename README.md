# raumideenwerk

Website for raumideenwerk, interior architecture and space planning for small flats in Berlin.

<p>Statically exported Next.js site in German and English, no backend except the PHP contact form</p>

### Description

Portfolio and service site for Daniel von Boros, architect in Berlin. The homepage presents projects, services, process, packages, FAQ and contact. Every project and every service has its own page, plus imprint and privacy policy.

German is the primary language at `/`, English lives under `/en/`. Every page exists in both languages with the same structure, and both versions are linked to each other via hreflang. Every page is prerendered to HTML at build time, so search engines and AI assistants can read it without running JavaScript.

### Conventions

- No comments in code files. Explanations live in this README. The only exception is code that is commented out on purpose and must be activated later.
- Reusable components first. A section composes components and only adds the layout between them.
- Content is never hardcoded in components. Strings live in `src/content`, one file per section, with the German and English version side by side as `Record<Locale, …>`.
- Every recurring visual value has exactly one source in `src/theme`.
- One folder per component under `src/components`, e.g. `components/linkTile/LinkTile.tsx`. The same applies to `src/sections`.
- Components are arrow functions with a default export and a `…Props` interface.
- Imports use the `@/` alias. Content files import their siblings relatively.
- Client components (`"use client"`) get their copy via props and never import from `src/content`, so the copy of both languages is not shipped to the browser.
- Visible copy is German and English. Code, file names and identifiers are English. Anchors such as `#kontakt` stay German because they appear in URLs.

### Structure

```
src/
  app/          Next.js routes only: metadata and the view for each URL
  assets/       logos and icons, icons registered in assets/icons/index.tsx
  components/   reusable building blocks, one folder each
  content/      all copy, one file per section, German and English side by side
  lib/          routes, metadata, structured data and the cx class helper
  sections/     page sections, one folder each, composed from components
  theme/        global CSS with design tokens, frame colours, text styles
  views/        Home, ProjectDetail, ServiceDetail and Legal, composed from sections
public/         images, robots and llms files, .htaccess and the contact form backend
```

`views/` has the role that `pages/` has in pixelgeselle. Next.js reserves `src/pages` for its Pages Router, so the folder needs a different name.

Sections in page order:

- Homepage: Hero, Projects, Services, PainPoints, Process, Packages, About, Testimonials, SeoServices, Faq, Contact.
- Project page: ProjectHero, ProjectDetails, ProjectGallery, Cta, ProjectNavigation.
- Service page: ServiceHero, ServiceDetails, ServiceProjects, Faq, Cta, ServiceNavigation.
- Legal page: LegalDocument.

`Chrome` wraps every page with skip link, header and footer. `Document` renders the `<html>` frame per language.

Reusable components:

| Component        | Purpose                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| `Carousel`       | Horizontal card row with previous and next buttons                      |
| `Chrome`         | Skip link, header, main and footer around every page                    |
| `ContactForm`    | Form with captcha and honeypot, posts to `/api/contact.php`             |
| `CtaBanner`      | Yellow box with title, text and button                                  |
| `CtaCard`        | Dashed card at the end of the project row                               |
| `Document`       | `<html>`, font, theme script and structured data of the business        |
| `FactList`       | Label and value list, `project` and `contact` variants                  |
| `FaqList`        | Questions and answers in two columns                                    |
| `Footer`         | Logo, contact, Instagram, address and legal links                       |
| `FrameHero`      | Coloured frame with number, spine, image and title for detail pages     |
| `Gallery`        | Two-column image gallery                                                |
| `Header`         | Sticky header with navigation, language switch, theme toggle and menu   |
| `Icon`           | Renders an icon from `assets/icons` by name                             |
| `InfoCard`       | Title and text, `plain`, `muted` and `highlight` variants               |
| `LinkTile`       | Bordered link with optional eyebrow                                     |
| `LinkifiedText`  | Turns URLs and email addresses in legal text into links                 |
| `Logo`           | Wide logo, light and dark version                                       |
| `PricingCard`    | Package with price, features, add-ons and call to action                |
| `ProjectCard`    | Project cover with number, year, title and two images                   |
| `Quote`          | Testimonial with author                                                 |
| `ScrollRow`      | Snapping horizontal scroll container                                    |
| `Section`        | Section frame with spacing and `plain`, `ink` and `petrol` tones        |
| `SectionHeader`  | Section title with subtitle                                             |
| `ServiceCard`    | Numbered yellow service card                                            |
| `SkipLink`       | Keyboard link that jumps past the navigation                            |
| `StepCard`       | Numbered process step on the timeline                                   |
| `StructuredData` | Renders a JSON-LD script                                                |
| `ThemeToggle`    | Switch between light and dark mode                                      |

### Content and routing

All URLs are built in `src/lib/routes.ts`. `pathFor(locale, page)` returns the path of a page, `sectionHref(locale, section)` the link to an anchor on the homepage. Section ids live in `SECTION_IDS` in `src/content/site.ts`, together with name, address, phone, email and the copy of header and navigation.

German and English slugs differ. The position in the list connects the two versions of a project or service:

- New project: add it to `de.items` and `en.items` in `src/content/projects.ts` at the same position. The page, sitemap entry and language alternates follow automatically.
- New service page: the same in `src/content/servicePages.ts`. Its `projects` field references projects by their position.

Build prices for joinery work are not advertised, because projects differ too much. The only exception is the note that simple raised levels start at around €2,000. Planning prices come from the packages.

### SEO

- `src/lib/metadata.ts` creates title, description, canonical URL, hreflang alternates and Open Graph data for every page. `x-default` points to the German version.
- `src/lib/schema.ts` creates the structured data: LocalBusiness, Person and OfferCatalog on every page, with the data in `src/content/schema.ts`; Service on every service page; FAQPage wherever the Faq section is shown.
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
- `public/llms.txt` is maintained by hand. Update it when services or projects change.

### Theme

`src/theme/globals.css` holds the Tailwind tokens: the colours `yellow`, `ink`, `linen`, `petrol`, `sand`, `graphite`, `mist` and `depth`, and the surface variables that switch with dark mode, used through the utilities `rule`, `rule-accent`, `surface`, `surface-strong` and `muted`. The `spine` utility sets text vertically.

`src/theme/frames.ts` maps the frame colours `yellow`, `ink` and `petrol` to background, text and button classes, and holds the card size. `src/theme/typography.ts` holds the recurring text styles (`text.*`) and link styles (`link.*`).

Dark mode is the class `dark` on `<html>`. `themeScript` sets it before the first paint, from `localStorage` or the system setting, and `ThemeToggle` switches it.

### Fonts

Hanken Grotesk is loaded through `next/font/google`. Next.js downloads the font at build time and serves it from the site itself, so the visitor's browser never contacts Google. Embedding Google Fonts directly would send the visitor's IP address to Google, which German courts have ruled a GDPR violation (LG München I, 3 O 17493/20).

### Contact form

`ContactForm` posts to `public/api/contact.php`, which is exported to `out/api/contact.php`. The script reads recipient, sender, secret, allowed origins and the rate limit folder from `contact-config.php` one level above the web root, so the secret is never part of the repository. A math captcha, a hidden honeypot field and a rate limit per connection keep bots out.

### Tools used

| Property        | Tool                                    |
| --------------- | --------------------------------------- |
| Language        | TypeScript 6                            |
| Framework       | Next.js 16, App Router, static export   |
| Library         | React 19                                |
| Styling         | Tailwind CSS 4                          |
| Linting         | ESLint 9, eslint-config-next            |
| Typeface        | Hanken Grotesk, self-hosted via next/font |
| Package manager | yarn                                    |
| Hosting         | all-inkl, static with PHP               |

### Dependencies

<ul>
<li>next</li>
<li>react</li>
<li>react-dom</li>
</ul>

Dev dependencies

<ul>
<li>@tailwindcss/postcss</li>
<li>@types/node</li>
<li>@types/react</li>
<li>@types/react-dom</li>
<li>eslint</li>
<li>eslint-config-next</li>
<li>tailwindcss</li>
<li>typescript</li>
</ul>

TypeScript stays on version 6 and ESLint on version 9 until `typescript-eslint` supports TypeScript 7 and `eslint-plugin-react` supports ESLint 10. With the newer versions, `yarn lint` does not start.

`src/components/document/Document.tsx` is excluded from the rule `@next/next/no-head-element` in `eslint.config.js`. The rule targets the Pages Router; in the App Router, `<head>` in the root layout is correct.

### Scripts

```
yarn dev       start the dev server
yarn build     typecheck and export the site to out/
yarn lint      run ESLint
```

### Deployment

Every push to `main` builds the site and uploads `out/` to all-inkl via rsync over SSH (`.github/workflows/deploy.yml`). Lint and build must pass and the export must contain the homepage, the legal pages and the contact script, otherwise nothing is uploaded. A second push cancels a deployment that is still running. The workflow can also be started by hand with a dry run that only lists the changes.

rsync runs with `-O`, which leaves directory timestamps alone, as all-inkl prefers. `--delete` removes files that no longer exist in the export. `contact-config.php` lies above the target folder and is not affected.

Required repository secrets:

| Secret            | Content                                                   |
| ----------------- | --------------------------------------------------------- |
| `SSH_PRIVATE_KEY` | Private key of a deploy key added to the all-inkl account |
| `SSH_HOST`        | SSH host of the all-inkl account                          |
| `SSH_USER`        | SSH user of the all-inkl account                          |
| `SSH_TARGET`      | Target folder on the server                               |

`public/.htaccess` forces HTTPS and the `www` host, serves `404.html`, compresses text files and sets cache and security headers.

### User Stories

<ul>
<li>As a tenant of a small flat in Berlin, I want to see rooms like mine before and after, so that I can judge whether a redesign solves my problem.</li>
<li>As a visitor, I want to see the package prices before I get in touch, so that I know what the planning costs.</li>
<li>As someone looking for a platform bed or a raised level, I want a page that explains the options, so that I understand what is possible in my flat.</li>
</ul>
