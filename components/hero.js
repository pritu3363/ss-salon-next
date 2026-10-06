"use client";
import { FaStar, FaCalendarCheck, FaCut, FaChevronDown } from "react-icons/fa";

const PHONE = "919637963847"; // WhatsApp number (country code ke saath)
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi SS Salon, mujhe appointment book karni hai.")}`;

const CSS = `
.hero{position:relative;min-height:100svh;display:flex;align-items:center;overflow:hidden;
  padding:110px 20px 90px;isolation:isolate;background:#0b090e}

/* Photo: public/hero.jpg. Photo na ho to sirf neeche ka gradient dikhega. */
.hero-bg{position:absolute;inset:0;z-index:-3;
  background:
    linear-gradient(90deg,rgba(11,9,14,.92) 0%,rgba(11,9,14,.72) 45%,rgba(11,9,14,.35) 100%),
    linear-gradient(180deg,rgba(11,9,14,.35) 0%,#0b090e 100%),
    url("/hero.jpg") center/cover no-repeat,
    radial-gradient(circle at 75% 30%,#2a2210 0%,#0b090e 60%);
  transform:scale(1.08);animation:heroZoom 18s ease-out forwards}
@keyframes heroZoom{to{transform:scale(1)}}

/* halki sone jaisi roshni */
.hero-glow{position:absolute;z-index:-2;border-radius:50%;filter:blur(70px);pointer-events:none;
  background:rgba(212,175,55,.22);animation:heroFloat 9s ease-in-out infinite}
.hero-glow.a{width:340px;height:340px;right:8%;top:14%}
.hero-glow.b{width:240px;height:240px;right:30%;bottom:8%;animation-delay:-4s;opacity:.7}
@keyframes heroFloat{50%{transform:translate(-22px,26px)}}

.hero-inner{width:100%;max-width:1100px;margin:0 auto}
.hero-rate{display:inline-flex;align-items:center;gap:8px;font-size:14px;color:#e9c95a;
  padding:7px 14px;border-radius:999px;border:1px solid rgba(212,175,55,.35);background:rgba(212,175,55,.08);
  animation:heroUp .8s .1s both}
.hero-rate svg{font-size:13px}
.hero h1{font-family:"Playfair Display",Georgia,serif;font-weight:800;color:#f6efe0;
  font-size:clamp(40px,7.5vw,84px);line-height:1.05;margin:22px 0 18px;max-width:11ch;
  animation:heroUp .9s .25s both}
.hero h1 em{font-style:normal;background:linear-gradient(100deg,#f1d77a,#d4af37 50%,#a98322);
  -webkit-background-clip:text;background-clip:text;color:transparent}
.hero p{color:#cfc9bd;font-size:clamp(15px,2vw,18px);line-height:1.7;max-width:460px;margin:0 0 30px;
  animation:heroUp .9s .4s both}

.hero-cta{display:flex;gap:14px;flex-wrap:wrap;animation:heroUp .9s .55s both}
.hbtn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 26px;
  border-radius:999px;font-weight:600;font-size:15px;text-decoration:none;cursor:pointer;
  transition:transform .25s,box-shadow .3s,background .3s,color .3s,border-color .3s}
.hbtn.gold{color:#17120a;background:linear-gradient(135deg,#f1d77a,#d4af37 55%,#a98322);
  box-shadow:0 10px 30px rgba(212,175,55,.35)}
.hbtn.gold:hover{transform:translateY(-3px);box-shadow:0 0 0 4px rgba(212,175,55,.2),0 16px 40px rgba(212,175,55,.55)}
.hbtn.line{color:#e9c95a;border:1px solid rgba(212,175,55,.5);background:rgba(11,9,14,.5)}
.hbtn.line:hover{background:#d4af37;color:#17120a;border-color:#d4af37;transform:translateY(-3px);
  box-shadow:0 12px 34px rgba(212,175,55,.45)}
.hbtn:focus-visible{outline:2px solid #d4af37;outline-offset:3px}

.hero-down{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);color:#d4af37;font-size:18px;
  animation:heroBounce 1.8s ease-in-out infinite}
@keyframes heroBounce{50%{transform:translate(-50%,8px)}}
@keyframes heroUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}

@media (max-width:640px){
  .hero{padding:96px 18px 80px;align-items:flex-end}
  .hero-bg{background-position:65% center}
  .hero-cta{flex-direction:column}
  .hbtn{width:100%}
  .hero-glow.a{width:220px;height:220px;right:-40px}
}
@media (prefers-reduced-motion:reduce){
  .hero *,.hero-bg,.hero-glow,.hero-down{animation:none!important;transform:none}
}
`;

export default function Hero() {
  return (
    <section className="hero" id="home">
      <style>{CSS}</style>
      <div className="hero-bg" />
      <span className="hero-glow a" />
      <span className="hero-glow b" />

      <div className="hero-inner">
        <span className="hero-rate"><FaStar aria-hidden /> 4.9 · 469 Google reviews</span>

        <h1>Where Every Look Becomes <em>Art</em></h1>

        <p>A friendly, premium unisex salon and hair academy in Chhatrapati Sambhajinagar.</p>

        <div className="hero-cta">
          <a className="hbtn gold" href={WA} target="_blank" rel="noopener noreferrer">
            <FaCalendarCheck aria-hidden /> Book Now
          </a>
          <a className="hbtn line" href="#services">
            <FaCut aria-hidden /> Our Services
          </a>
        </div>
      </div>

      <a className="hero-down" href="#services" aria-label="Neeche scroll karo"><FaChevronDown /></a>
    </section>
  );
}