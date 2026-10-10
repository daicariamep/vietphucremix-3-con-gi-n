import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const outputDir = path.join(root, ".output");

// If .output exists but dist does not or is partial, sync .output contents
if (fs.existsSync(outputDir)) {
  const publicDir = path.join(outputDir, "public");
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, distDir, { recursive: true });
  }
}

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure index.html exists in dist
const indexHtmlPath = path.join(distDir, "index.html");
const assetsDir = path.join(distDir, "assets");

let cssFile = "";
let jsFile = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
  jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
}

const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Việt Phục Remix Heritage - Thử cổ phục Việt 3D bằng AI</title>
  <meta name="description" content="Việt Phục Remix Heritage - Thử cổ phục Việt 3D bằng AI"/>
  <meta property="og:title" content="Việt Phục Remix Heritage - Thử cổ phục Việt 3D bằng AI"/>
  <meta property="og:description" content="Việt Phục Remix Heritage - Thử cổ phục Việt 3D bằng AI"/>
  <meta property="og:type" content="website"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"/>
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}"/>` : ""}
  <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
</head>
<body>
  <div id="root"></div>
  ${jsFile ? `<script type="module" src="/assets/${jsFile}"></script>` : ""}
</body>
</html>
`;

fs.writeFileSync(indexHtmlPath, htmlContent, "utf8");
console.log(
  `[postbuild] Generated ${indexHtmlPath} successfully with CSS: ${cssFile}, JS: ${jsFile}`,
);
