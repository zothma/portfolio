import fs from "fs";
import { globby } from 'globby';

function addPage(page) {
    // Crée l'entrée du sitemap
    const path = page.replace('pages', '').replace('.js', '').replace('.jsx', '');
    const route = path === "/index" ? '' : path;

    return `<url>
        <loc>${`https://enzo-maros.fr${route}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
    </url>`;
};

async function generateSitemap() {
    // Génère l'ensemble du sitemap pour chaque page
    const pages = await globby([
        'pages/**/*{.js,.jsx}',
        '!pages/_*.js'
    ]);

    const siteMap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(addPage).join('\n')}
    </urlset>`;

    fs.writeFileSync('public/sitemap.xml', siteMap);
}

generateSitemap();