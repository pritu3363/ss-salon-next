import Link from "next/link";
import {
  FaPhone,
  FaRegClock,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { NAV, PH } from "@/lib/data";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap grid3">
          <div>
            <h3>SS Unisex Salon Hair Studio & Academy</h3>
            <p>
              Shop No 1, Near Sai Mandir, Parvati Nagar,
              Chhatrapati Sambhajinagar, Maharashtra 431001
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            {NAV.map(([h, n]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </div>

          <div>
            <h3>Connect</h3>
            <p><FaPhone /> 096379 00000</p>
            <p><FaRegClock /> Closes 9 pm</p>

            <div className="soc">
              <a href={"https://wa.me/" + PH}>
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <p className="copy">
          © 2026 SS Unisex Salon Hair Studio & Academy
        </p>
      </footer>

      <a className="wa" href={"https://wa.me/" + PH}>
        <FaWhatsapp />
      </a>
    </>
  );
}