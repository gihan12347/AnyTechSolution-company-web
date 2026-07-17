const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "logo.png");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

const white = { r: 255, g: 255, b: 255, alpha: 1 };

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

function makeIcon(size) {
  return sharp(logoPath)
    .resize(size, size, { fit: "contain", background: white })
    .flatten({ background: white })
    .png();
}

async function generate() {
  for (const { name, size } of sizes) {
    await makeIcon(size).toFile(path.join(publicDir, name));
  }

  await makeIcon(32).toFile(path.join(publicDir, "favicon.ico"));
  await makeIcon(32).toFile(path.join(publicDir, "favicon.png"));
  await makeIcon(32).toFile(path.join(appDir, "icon.png"));
  await makeIcon(180).toFile(path.join(appDir, "apple-icon.png"));

  const manifest = {
    name: "AnyTech Solution",
    short_name: "AnyTech",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#1a2b45",
    background_color: "#ffffff",
    display: "standalone",
  };

  fs.writeFileSync(
    path.join(publicDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );

  console.log("Favicons generated from logo.png");
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
