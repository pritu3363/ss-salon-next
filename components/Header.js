"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaScissors, FaBars, FaXmark, FaPhone } from "react-icons/fa6";
import { NAV, PH } from "@/lib/data";

export default function Header() {
  const p = usePathname();
  const [o, setO] = useState(false);

  useEffect(() => setO(false), [p]);

  return (
    <header>
      <Link className="logo" href="/">
        <FaScissors /> SS <span>Salon</span>
      </Link>

      <nav className={o ? "open" : ""}>
        {NAV.map(([h, n]) => (
          <Link key={h} href={h} className={p === h ? "on" : ""}>
            {n}
          </Link>
        ))}

        <a className="btn sm" href={"tel:+" + PH}>
          <FaPhone /> Call
        </a>
      </nav>

      <button
        id="burger"
        aria-label="Menu"
        onClick={() => setO(!o)}
      >
        {o ? <FaXmark /> : <FaBars />}
      </button>
    </header>
  );
}