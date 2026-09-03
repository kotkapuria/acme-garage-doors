# Acme Garage Doors — Netlify + GitHub deployment

## Deploy
1. Create a GitHub repository and upload the contents of this folder (not the parent folder).
2. In Netlify, choose **Add new project → Import an existing project → GitHub**.
3. Select the repository.
4. Build command: leave blank. Publish directory: `.`
5. Deploy.
6. Add `acmegaragedoors.ca` under Netlify Domain management and follow the DNS instructions.

## Forms
The homepage quote form uses Netlify Forms. After the first successful deploy, open **Forms** in Netlify and enable form detection if prompted. Set up an email notification to `acmegd.11@gmail.com`.

## CMS
The existing `/admin/` Decap CMS files are preserved, but this package does not rely on Netlify Git Gateway. Netlify currently marks Git Gateway as deprecated, so for a new setup use direct GitHub editing or add a current Decap authentication/OAuth flow separately.

## SEO
Submit `https://acmegaragedoors.ca/sitemap.xml` in Google Search Console after the custom domain is live.
