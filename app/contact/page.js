import {FaLocationDot,FaPhone,FaRegClock} from "react-icons/fa6";import {Head} from "@/components/ui";import ContactForm from "@/components/ContactForm";import {PH} from "@/lib/data";
export const metadata={title:"Contact | SS Salon"};
export default function P(){return <section className="wrap pt"><Head k="Contact" t="Visit or book with us"/><div className="grid">
<div className="card" data-a><FaLocationDot/><h3>Address</h3><p>Shop No 1, Near Sai Mandir, Parvati Nagar, Chhatrapati Sambhajinagar 431001</p><a className="btn sm" href="https://www.google.com/maps/search/?api=1&query=W849%2B2C+Chhatrapati+Sambhajinagar">Directions</a></div>
<div className="card" data-a><FaPhone/><h3>Call</h3><p>096379 00000</p><a className="btn sm" href={"tel:+"+PH}>Call now</a></div>
<div className="card" data-a><FaRegClock/><h3>Hours</h3><p>Closes 9 pm. Hours may change on holidays.</p></div></div><ContactForm/></section>}
