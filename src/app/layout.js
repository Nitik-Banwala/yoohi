import Footer from "@/components/common/Footer";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata = {
 title: "Yoomi",
 description: "Next Generation Patient Engagement and RTM Solution",
     images: ["/meta.png"],
};

export default function RootLayout({ children }) {
 return (
  <html
   lang="en"
   
  >
   <body>
    <Navbar/>
    {children}
    <Footer/>
    </body>
  </html>
 );
}
