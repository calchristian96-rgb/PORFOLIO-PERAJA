# PORTFOLIO PERAJA

A responsive, pastel-themed creative developer portfolio for Christian C. Peraja, built with Vite and vanilla JavaScript. It includes project showcases, a certificate preview, editable learning and achievement sections, a responsive navigation menu, theme persistence, and a motion-aware animated workspace illustration.

## Stack

- Vite
- HTML, CSS, and JavaScript modules
- Simple Icons (locally bundled SVG marks)
- CSS illustrations and animations (no 3D runtime dependency)

## Install and run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Edit your portfolio content

Most content is in `src/data.js`. Keep personal information, projects, certificates, seminars, achievements, education, and technologies there.

### Add a project

Add an object to `projects`. Set a title, description, category, technologies, and role only when those details are known. Add a project screenshot to `assets/projects/<project>/`, then set `image` to `/projects/<project>/<filename>`. Add `live` and `github` URLs when available; blank URLs hide their links. Vite publishes the existing `assets/` directory as the site's public files.

### Add a certificate

Add a record to `certificates` with the title, issuer, date, platform, and the image path, such as `/certificates/certificate.png`. Only use the actual certificate image. The card opens a preview dialog.

### Add seminars and achievements

Add records to the `seminars` and `achievements` arrays in `src/data.js`. Use only confirmed titles, organizers, dates, descriptions, and supplied images. Dates may be left blank.

### Replace your profile photo

Replace `assets/profile.jpg` with the new photo, or change `personal.photo` to a different path under `assets/`. The original assets remain in the project.

## Contact form

Set `personal.email` to an email address you control to enable a `mailto:` draft. The form opens the visitor's email application and does not claim to send a message. A backend or email provider is needed for direct delivery.

Set `personal.github` to your verified GitHub profile URL to show the profile link. No secrets or environment variables are required by this static site.

## Vercel deployment

Import the existing repository into Vercel and use the Vite preset. The build command is `npm run build`, and the output directory is `dist`. No server-side environment variables are required. Deployments are not performed by this project setup.
