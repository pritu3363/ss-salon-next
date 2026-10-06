import "./globals.css";import Header from "@/components/Header";import Footer from "@/components/Footer";import Bg3D from "@/components/Bg3D";import Fx from "@/components/Fx";
export const metadata={title:"SS Unisex Salon Hair Studio & Academy",description:"Premium unisex salon & hair academy near Sai Mandir, Parvati Nagar, Chhatrapati Sambhajinagar. Rated 4.9 by 469 clients."};
export const viewport={width:"device-width",initialScale:1,themeColor:"#0b0a0d"};
export default function RootLayout({children}){return <html lang="en"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Poppins:wght@300;400;500&display=swap"/></head>
<body><Bg3D/><Header/><main>{children}</main><Footer/><Fx/></body></html>}
