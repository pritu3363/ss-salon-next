export default function AcademyPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .acad {
          --gold: #d4a72c;
          --text: #f6ebe2;
          position: relative;
          overflow: hidden;
          padding: 70px 20px 80px;
          color: var(--text);
          font-family: 'Poppins', system-ui, sans-serif;
          background: radial-gradient(ellipse at 50% 0%, #4a281a 0%, #2e170f 55%, #25120b 100%);
        }
        .acad * { box-sizing: border-box; }
        .acad-wrap { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }
        .acad h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          text-align: center;
          font-size: clamp(30px, 5vw, 46px);
          margin: 0 0 10px;
        }
        .acad-sub {
          text-align: center;
          max-width: 56ch;
          margin: 0 auto 40px;
          font-weight: 300;
          line-height: 1.7;
          opacity: 0.9;
        }
        .acad-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .acad-card {
          padding: 32px;
          border-radius: 22px;
          border: 1px solid rgba(214, 160, 120, 0.35);
          background: linear-gradient(145deg, rgba(110, 52, 30, 0.65), rgba(80, 36, 20, 0.55));
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .acad-card svg {
          width: 36px;
          height: 36px;
          fill: var(--gold);
          display: block;
          margin-bottom: 22px;
        }
        .acad-card h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 20px;
          margin: 0 0 8px;
        }
        .acad-card p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 300;
        }
        .acad-cta { text-align: center; margin-top: 40px; }
        .acad-btn {
          display: inline-block;
          background: var(--gold);
          color: #2e170f;
          text-decoration: none;
          font-weight: 500;
          padding: 14px 32px;
          border-radius: 999px;
        }
        .acad-btn:hover, .acad-btn:focus-visible {
          background: #f0c75a;
          outline: 3px solid rgba(240, 199, 90, 0.5);
          outline-offset: 3px;
        }
        .acad-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f3e9a6;
          box-shadow: 0 0 10px 3px rgba(243, 233, 166, 0.6);
          animation: acadFloat 7s ease-in-out infinite;
        }
        @keyframes acadFloat {
          50% {
            transform: translateY(-14px);
            opacity: 0.5;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .acad-dot { animation: none; }
        }
        @media (max-width: 900px) {
          .acad-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .acad-grid { grid-template-columns: 1fr; }
          .acad-card { padding: 26px; }
        }
      `}</style>

      <section className="acad" id="academy">
        <span className="acad-dot" style={{ top: '30px', left: '12%' }}></span>
        <span className="acad-dot" style={{ top: '70px', left: '78%', animationDelay: '2s' }}></span>
        <span className="acad-dot" style={{ top: '55%', left: '4%', animationDelay: '4s' }}></span>
        <span className="acad-dot" style={{ top: '80%', left: '92%', animationDelay: '1s' }}></span>

        <div className="acad-wrap">
          <h2>Learn the Craft in Our Academy</h2>
          <p className="acad-sub">
            Hair, skin aur makeup ki practical training, real clients ke saath, experienced trainers ke sath.
          </p>

          <div className="acad-grid">
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" /></svg>
              <h3>Diploma Course</h3>
              <p>1 saal ka course: haircut, styling, colour basics aur skin care ki training.</p>
            </article>
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" /><circle cx="12" cy="21" r="2" /></svg>
              <h3>Advanced Diploma</h3>
              <p>2 saal ka course: advanced styling, bridal makeup, internship aur salon management.</p>
            </article>
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><circle cx="8" cy="7" r="3.2" /><circle cx="17" cy="8" r="2.8" /><path d="M2 20c0-3.6 2.7-6 6-6s6 2.4 6 6zM14.5 20c0-2.4 1-4.2 2.6-5.1 2.6-.3 4.9 1.5 4.9 5.1z" /></svg>
              <h3>Boys &amp; Girls Welcome</h3>
              <p>Ladke aur ladkiyan dono admission le sakte hain. Beginners ke liye bhi.</p>
            </article>
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.9V17h2V9zM5 13.2v4L12 21l7-3.8v-4L12 17z" /></svg>
              <h3>Eligibility</h3>
              <p>10th pass aur minimum age 16 saal. Pehle se experience zaroori nahi.</p>
            </article>
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.4l4 2.4-.8 1.3L11 13V7z" /></svg>
              <h3>Batch Timing</h3>
              <p>Morning 10 AM – 1 PM aur evening 3 PM – 6 PM. Apni suvidha se batch chuno.</p>
            </article>
            <article className="acad-card">
              <svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 011 1v11a1 1 0 01-1 1h-6l1 5-3-2-3 2 1-5H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 4v2h10V7zm0 4v2h7v-2z" /></svg>
              <h3>Certificate</h3>
              <p>Course poora hone par certificate milega, jo job ya apna salon kholne me kaam aayega.</p>
            </article>
          </div>

          <div className="acad-cta">
            <a className="acad-btn" href="tel:+910000000000">Admission ke liye call karein</a>
          </div>
        </div>
      </section>
    </>
  );
}