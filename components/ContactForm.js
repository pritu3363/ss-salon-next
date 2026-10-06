"use client";
import {useState} from "react";import {FaWhatsapp} from "react-icons/fa6";import {PH} from "@/lib/data";
export default function ContactForm(){const [n,setN]=useState(""),[s,setS]=useState("");
return <form className="card form" data-a onSubmit={e=>{e.preventDefault();open("https://wa.me/"+PH+"?text="+encodeURIComponent("Hi, I am "+n+". I want: "+s))}}>
<input placeholder="Your name" required value={n} onChange={e=>setN(e.target.value)}/><input placeholder="Service wanted" required value={s} onChange={e=>setS(e.target.value)}/><button className="btn"><FaWhatsapp/> Send via WhatsApp</button></form>}
