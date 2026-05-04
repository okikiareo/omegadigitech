
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './global.css';


export const metadata = {
    title: "Omega Digital Innovation Tech",
    description: "IT services and consultancy",
    icons: {
      icon: "/logo.png",
    },
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
        <Navbar />
{children}
<Footer />
        </body>
      </html>
    );
  }
