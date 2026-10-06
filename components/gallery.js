import fs from "fs";
import path from "path";
import GalleryClient from "./galleryclient";

const DIRS = ["photos", "images", "gallery"];
const IMG = /\.(jpe?g|png|webp|avif)$/i;

export function getPhotos() {
  const list = [];
  for (const d of DIRS) {
    try {
      fs.readdirSync(path.join(process.cwd(), "public", d))
        .filter((f) => IMG.test(f) && !/^hero\./i.test(f))
        .sort()
        .forEach((f) => list.push("/" + d + "/" + encodeURIComponent(f)));
    } catch {
      /* folder nahi hai to skip */
    }
  }
  return list;
}

export default function Gallery({ n = 99 }) {
  return <GalleryClient photos={getPhotos().slice(0, n)} />;
}