const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "logo.svg");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function generate() {
  const svg = fs.readFileSync(logoPath);

  await Promise.all(
    sizes.map(({ name, size }) =>
      sharp(svg)
        .resize(size, size, { fit: "contain", background: { r: 26, g: 43, b: 69, alpha: 1 } })
        .png()
        .toFile(path.join(publicDir, name))
    )
  );

  const favicon32 = await sharp(svg).resize(32, 32).png().toBuffer();
  await sharp(favicon32).toFile(path.join(publicDir, "favicon.ico"));

  await sharp(svg).resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
  await sharp(svg).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));

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
    background_color: "#1a2b45",
    display: "standalone",
  };

  fs.writeFileSync(
    path.join(publicDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`
  );

  console.log("Favicons generated in public/ and app/");
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
