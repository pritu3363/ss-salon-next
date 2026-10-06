"use client";
import { useState } from "react";
import { FaCheck, FaWhatsapp } from "react-icons/fa6";

export default function HairColours({ groups, phone }) {
  const [sel, setSel] = useState(null);

  const msg = sel
    ? encodeURIComponent(`Hi, mujhe "${sel}" hair colour karwana hai. Appointment chahiye.`)
    : "";

  return (
    <>
      {groups.map(([g, list]) => (
        <div className="hc-group" key={g} data-a>
          <h3>{g}</h3>
          <div className="hc-grid" role="radiogroup" aria-label={g}>
            {list.map(([n, a, b]) => {
              const on = sel === n;
              return (
                <button
                  type="button"
                  role="radio"
                  aria-checked={on}
                  key={n}
                  className={"hc-sw" + (on ? " on" : "")}
                  onClick={() => setSel(on ? null : n)}
                >
                  <span className="hc-dot">
                    <i style={{ background: `linear-gradient(135deg,${a},${b})` }} />
                    {on && <FaCheck className="hc-tick" />}
                  </span>
                  <span className="hc-name">{n}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className={"hc-bar" + (sel ? " show" : "")} aria-live="polite">
        <p>
          Selected shade: <b>{sel}</b>
        </p>
        <a className="btn" href={`https://wa.me/${phone}?text=${msg}`}>
          <FaWhatsapp /> Book this shade
        </a>
      </div>
    </>
  );
}