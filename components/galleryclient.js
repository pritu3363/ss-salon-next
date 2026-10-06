"use client";
import { useEffect, useMemo, useState, useCallback } from "react";
import {
  FaCut, FaPaintBrush, FaSpa, FaUserTie, FaCamera, FaTimes,
  FaChevronLeft, FaChevronRight, FaThLarge,
} from "react-icons/fa";
import { GiRazor, GiHairStrands } from "react-icons/gi";



const catOf = (src) => {
  const name = decodeURIComponent(src.split("/").pop());
  const hit = CATS.find((c) => c.match && c.match.test(name));
  return hit ? hit.key : "hair";
};

const CSS = `
/* ========== GALLERY ========== */
:root { --gold: #d4af37; --gold-soft: rgba(212, 175, 55, .55); }

.g-wrap { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 16px; }

/* Filter chips */
.g-filters {
  display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
  margin-bottom: 28px;
}
.g-chip {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 18px; border-radius: 999px; cursor: pointer;
  background: #15131a; color: #cfc9bd; font: 500 14px/1 inherit;
  border: 1px solid rgba(255, 255, 255, .12);
  transition: transform .2s, color .2s, background .25s, box-shadow .25s, border-color .25s;
}
.g-chip:hover { color: var(--gold); border-color: var(--gold-soft); transform: translateY(-2px); }
.g-chip svg { font-size: 15px; }
/* Click/selected option = roshan */
.g-chip.is-on {
  background: linear-gradient(135deg, #f1d77a, #d4af37 55%, #a98322);
  color: #17120a; border-color: transparent; font-weight: 600;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, .18), 0 8px 26px rgba(212, 175, 55, .45);
}

/* Grid */
.g-grid {
  display: grid; gap: 14px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
}
.g-item {
  position: relative; padding: 0; border: 0; cursor: zoom-in;
  aspect-ratio: 4 / 5; border-radius: 16px; overflow: hidden;
  background: #15131a;
  opacity: 0; animation: gIn .6s cubic-bezier(.2, .7, .2, 1) forwards; animation-delay: var(--d);
  transition: transform .35s, box-shadow .35s, filter .35s, opacity .35s;
}
.g-item:nth-child(5n + 1) { grid-row: span 1; }
.g-item img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform .6s cubic-bezier(.2, .7, .2, 1);
  /* glassy/blur nahi: saaf, sharp photo */
  filter: none; backdrop-filter: none;
}

/* Jis par hover/click ho wo jalti hai, baaki halki dim */
.g-grid.has-lit .g-item:not(.is-lit) { filter: brightness(.55) saturate(.8); }
.g-item.is-lit {
  transform: translateY(-6px) scale(1.02); z-index: 2;
  box-shadow: 0 0 0 2px var(--gold), 0 18px 50px rgba(212, 175, 55, .35);
}
.g-item.is-lit img { transform: scale(1.07); }
.g-item:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

.g-badge {
  position: absolute; right: 10px; bottom: 10px; width: 34px; height: 34px;
  display: grid; place-items: center; border-radius: 50%;
  background: var(--gold); color: #17120a; font-size: 14px;
  opacity: 0; transform: scale(.6); transition: .3s;
}
.g-item.is-lit .g-badge { opacity: 1; transform: scale(1); }

@keyframes gIn { from { opacity: 0; transform: translateY(22px) scale(.97); } to { opacity: 1; transform: none; } }

/* Lightbox */
.g-lb {
  position: fixed; inset: 0; z-index: 100; display: grid; place-items: center;
  background: rgba(5, 4, 8, .94); animation: gFade .25s;
}
.g-lb > img {
  max-width: min(92vw, 900px); max-height: 82vh; border-radius: 14px;
  box-shadow: 0 0 0 2px var(--gold), 0 30px 90px rgba(212, 175, 55, .25);
  animation: gPop .35s cubic-bezier(.2, .7, .2, 1);
}
.g-lb-btn {
  position: absolute; width: 46px; height: 46px; border-radius: 50%; border: 1px solid var(--gold-soft);
  background: #15131a; color: var(--gold); display: grid; place-items: center; cursor: pointer;
  transition: .2s;
}
.g-lb-btn:hover { background: var(--gold); color: #17120a; box-shadow: 0 0 22px rgba(212, 175, 55, .6); }
.g-x { top: 16px; right: 16px; }
.g-prev { left: 14px; top: 50%; transform: translateY(-50%); }
.g-next { right: 14px; top: 50%; transform: translateY(-50%); }
.g-count { position: absolute; bottom: 18px; color: #cfc9bd; font-size: 13px; letter-spacing: .08em; }
@keyframes gFade { from { opacity: 0; } to { opacity: 1; } }
@keyframes gPop { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: none; } }

/* Empty state */
.g-empty { text-align: center; color: #9a948a; padding: 30px 16px; }
.g-empty-ico { font-size: 46px; color: var(--gold); margin-bottom: 10px; animation: gFloat 3s ease-in-out infinite; }
.g-empty code { color: var(--gold); }
@keyframes gFloat { 50% { transform: translateY(-8px); } }

/* ========== MOBILE ========== */
@media (max-width: 820px) { .g-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
@media (max-width: 480px) {
  .g-chip { padding: 9px 14px; font-size: 13px; }
  .g-filters { gap: 8px; flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start;
    padding-bottom: 6px; scrollbar-width: none; }
  .g-filters::-webkit-scrollbar { display: none; }
  .g-chip { flex: 0 0 auto; }
  .g-prev { left: 6px; } .g-next { right: 6px; }
  .g-lb-btn { width: 40px; height: 40px; }
}

@media (prefers-reduced-motion: reduce) {
  .g-item, .g-item img, .g-chip, .g-empty-ico { animation: none !important; transition: none !important; opacity: 1; }
}
`;

export default function GalleryClient({ photos = [] }) {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(-1);      // lightbox index
  const [lit, setLit] = useState(-1);        // jis photo par click/hover hua wo roshan

  const items = useMemo(() => photos.map((src) => ({ src, cat: catOf(src) })), [photos]);
  const shown = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.cat === filter)),
    [items, filter]
  );
  const available = CATS.filter((c) => c.key === "all" || items.some((i) => i.cat === c.key));

  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback(
    (d) => setOpen((o) => (o < 0 ? o : (o + d + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  /* Photos nahi hain to sundar placeholder tiles */
  if (!photos.length) {
    const ph = [
      [FaCut, "Haircut & Styling"], [FaPaintBrush, "Hair Colour"], [FaSpa, "Hair Spa"],
      [GiRazor, "Beard Shaping"], [FaUserTie, "Bridal & Party"], [GiHairStrands, "Hair Care"],
    ];
    return (
      <div className="g-wrap">
        <style>{CSS}</style>
        <div className="g-grid">
          {ph.map(([Icon, label], i) => (
            <div key={label} className="g-ph" style={{ "--d": `${i * 70}ms` }}>
              <Icon aria-hidden />
              <span>{label}</span>
              <small>Photo jaldi aa rahi hai</small>
            </div>
          ))}
        </div>
        <p className="g-note">
           <code>public/photos</code> me <b>haircut-1.jpg</b>, <b>colour-1.jpg</b>,{" "}
          <b>spa-1.jpg</b> daalo.
        </p>
      </div>
    );
  }

  return (
    <div className="g-wrap">
      <style>{CSS}</style>
      {/* Filter options: jo select ho wo gold me jalta hai */}
      <div className="g-filters" role="tablist" aria-label="Gallery filter">
        {available.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            role="tab"
            aria-selected={filter === key}
            className={"g-chip" + (filter === key ? " is-on" : "")}
            onClick={() => { setFilter(key); setLit(-1); }}
          >
            <Icon aria-hidden /> <span>{label}</span>
          </button>
        ))}
      </div>

      <div className={"g-grid" + (lit >= 0 ? " has-lit" : "")}>
        {shown.map((p, i) => (
          <button
            key={p.src}
            className={"g-item" + (lit === i ? " is-lit" : "")}
            style={{ "--d": `${Math.min(i, 12) * 45}ms` }}
            onMouseEnter={() => setLit(i)}
            onMouseLeave={() => setLit(-1)}
            onFocus={() => setLit(i)}
            onBlur={() => setLit(-1)}
            onClick={() => { setLit(i); setOpen(i); }}
            aria-label={`Photo ${i + 1} kholo`}
          >
            {/* Seedhi, saaf photo. Koi blur / glass nahi. */}
            <img src={p.src} alt={`SS Salon ${p.cat} work ${i + 1}`} loading="lazy" decoding="async" />
            <span className="g-badge"><FaCamera aria-hidden /></span>
          </button>
        ))}
      </div>

      {open >= 0 && shown[open] && (
        <div className="g-lb" role="dialog" aria-modal="true" onClick={close}>
          <button className="g-lb-btn g-x" onClick={close} aria-label="Band karo"><FaTimes /></button>
          <button className="g-lb-btn g-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Pichli"><FaChevronLeft /></button>
          <img src={shown[open].src} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="g-lb-btn g-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Agli"><FaChevronRight /></button>
          <div className="g-count">{open + 1} / {shown.length}</div>
        </div>
      )}
    </div>
  );
}