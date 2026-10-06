import { Head } from "@/components/ui";

export const metadata = {
  title: "Our Work | SS Salon",
};

const work = [
  {
    icon: "✂️",
    title: "Haircuts & Styling",
    text: "Layer cut, step cut, bob, fringe ya classic trim. Hum aapke face shape aur hair type ke hisaab se cut suggest karte hain.",
  },
  {
    icon: "🎨",
    title: "Hair Colour",
    text: "Global colour, highlights, balayage aur fashion shades. Ammonia-free aur quality products ke saath, taaki colour chamkeela rahe aur hair safe rahe.",
  },
  {
    icon: "🌀",
    title: "Curls & Waves",
    text: "Natural curls ko define karna ho ya party ke liye soft waves, hum aapke hair ko bounce aur shape dete hain.",
  },
  {
    icon: "💆",
    title: "Hair Spa",
    text: "Deep conditioning aur scalp massage se dry, frizzy aur damaged hair ko wapas softness aur shine milti hai.",
  },
  {
    icon: "🧴",
    title: "Smoothening & Keratin",
    text: "Frizz-free, silky aur manageable hair ke liye smoothening aur keratin treatment, jiska asar mahino tak rehta hai.",
  },
  {
    icon: "👰",
    title: "Bridal & Party Hairstyles",
    text: "Shaadi, engagement ya kisi bhi khaas mauke ke liye juda, braids aur open hair styles, aapke outfit ke saath match karte hue.",
  },
  {
    icon: "🌿",
    title: "Hair Fall & Scalp Care",
    text: "Dandruff, hair fall aur dry scalp ke liye treatments aur sahi care ki salah, taaki hair andar se strong bane.",
  },
  {
    icon: "💈",
    title: "Men's Grooming",
    text: "Haircut, beard styling, shave aur head massage, sab ek hi jagah par.",
  },
];

export default function P() {
  return (
    <section className="wrap pt">
      <Head
        k="Our Work"
        t="Hair Care Done Right"
        s="Har hair type ke liye expert care, cut, colour aur styling."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {work.map((w, i) => (
          <div
            key={i}
            data-a
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>
              {w.icon}
            </div>
            <h3 style={{ marginBottom: "8px" }}>{w.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}