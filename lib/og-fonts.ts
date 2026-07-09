import fs from 'fs/promises';
import path from 'path';

/** Loads a static instance of the site's Saans font for OG images. */
export async function loadSaans(weight: 400 | 600): Promise<ArrayBuffer> {
  const file = await fs.readFile(
    path.join(process.cwd(), 'assets', 'og', `saans-${weight}.ttf`)
  );
  return new Uint8Array(file).buffer;
}

/**
 * Fetches a subsetted TTF from Google Fonts at build time.
 * `family` is a css2 family spec, e.g. "Newsreader:ital,wght@1,500".
 */
export async function loadGoogleFont(
  family: string,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );

  if (!match) {
    throw new Error(`Could not resolve font: ${family}`);
  }

  return await (await fetch(match[1])).arrayBuffer();
}
