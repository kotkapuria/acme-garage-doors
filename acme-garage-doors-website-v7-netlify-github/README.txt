ACME GARAGE DOORS — SEO / LEAD GENERATION V5

Upload the contents of this folder to your static host (e.g. Cloudflare Pages).

Included:
- SEO title, meta description, canonical URL, robots directives
- LocalBusiness structured data with Niagara service areas
- Google Business Profile link and 5.0 / 133-review trust signal
- Stronger local keyword targeting for Niagara Region garage door searches
- Service-area section and FAQ content
- Click-to-call CTAs and quote email form
- robots.txt and sitemap.xml
- Decap CMS for editable projects and blog content at /admin/

IMPORTANT:
- Confirm the business address and 24/7 availability in the structured data before launch if either has changed.
- Submit https://acmegaragedoors.ca/sitemap.xml in Google Search Console after the domain is live.
- Do not add fake testimonials or review markup. Google restricts self-serving review/aggregateRating markup for a business's own reviews.

CMS SETUP
The CMS files are in admin/. Deploy the site to a Git-connected host, enable the host's Git Gateway or equivalent OAuth integration, and make sure the production branch is named main. Then open https://acmegaragedoors.ca/admin/ and sign in. Projects are edited in data/projects.json and blog posts in data/blog.json. Uploaded media is stored in images/uploads. In Projects, choose Media type = image for JPG, JPEG, PNG or WebP files, or Media type = video for MP4 files. Video projects can also use an optional poster image.

The public Projects and Blog pages load those JSON files directly, so changes appear after the CMS commit is deployed. The pages require HTTP hosting; opening them directly from a file:// URL will not load JSON because browsers block local fetch requests.
