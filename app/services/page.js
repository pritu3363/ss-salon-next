import Link from "next/link";import {Head,Cards} from "@/components/ui";import {SERVICES} from "@/lib/data";
export const metadata={title:"Services | SS Salon"};
export default function P(){return <><section className="wrap pt"><Head k="Services" t="Everything for your hair & beauty"/><Cards items={SERVICES}/></section>
<section className="wrap band" data-a><h2>Ask for pricing & appointments</h2><Link className="btn" href="/contact">Contact</Link></section></>}
