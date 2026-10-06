"use client";
import {useEffect,useRef} from "react";import * as THREE from "three";
export default function Bg3D(){const ref=useRef();useEffect(()=>{
const R=new THREE.WebGLRenderer({canvas:ref.current,alpha:true,antialias:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,100);cam.position.z=7;
const c=document.createElement("canvas");c.width=c.height=64;const x=c.getContext("2d"),g=x.createRadialGradient(32,32,0,32,32,32);
g.addColorStop(0,"rgba(255,245,190,1)");g.addColorStop(.25,"rgba(255,225,130,1)");g.addColorStop(.55,"rgba(212,175,55,.6)");g.addColorStop(1,"rgba(212,175,55,0)");x.fillStyle=g;x.fillRect(0,0,64,64);
const N=140,base=new Float32Array(N*3).map((_,i)=>i%3===2?(Math.random()-.5)*6:(Math.random()-.5)*(i%3?12:16)),pos=base.slice(),ph=Array.from({length:N},()=>Math.random()*6.28);
const geo=new THREE.BufferGeometry().setAttribute("position",new THREE.BufferAttribute(pos,3));
const pts=new THREE.Points(geo,new THREE.PointsMaterial({map:new THREE.CanvasTexture(c),size:.09,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));sc.add(pts);
let mx=0,my=0,t=0,id;const mv=e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5};addEventListener("pointermove",mv);
const rs=()=>{R.setSize(innerWidth,innerHeight);R.setPixelRatio(Math.min(devicePixelRatio,2));cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();pts.material.size=innerWidth<800?.07:.09};rs();addEventListener("resize",rs);
const tick=()=>{t+=.01;const s=scrollY/Math.max(1,document.body.scrollHeight-innerHeight);
for(let i=0;i<N;i++){pos[i*3]=base[i*3]+Math.cos(t*.7+ph[i])*.3;pos[i*3+1]=base[i*3+1]+Math.sin(t+ph[i])*.5}
geo.attributes.position.needsUpdate=true;pts.position.y=s*4;
cam.position.x+=(mx*1.2-cam.position.x)*.05;cam.position.y+=(-my*1.2-cam.position.y)*.05;R.render(sc,cam);id=requestAnimationFrame(tick)};tick();
return()=>{cancelAnimationFrame(id);removeEventListener("pointermove",mv);removeEventListener("resize",rs);R.dispose()}},[]);
return <canvas id="bg" ref={ref}/>}