import { Geist } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "../Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer";
import ProductContext from "../../context/ProductContext";
import ClothesContext from "../../context/ClothesContext";
import CartContext from "../../context/CartContext";
import FavContext from "../../context/FavContext";
import { ToastContainer } from "react-toastify";

const geist = Geist({ subsets: ["latin"], preload: true });

export const metadata = {
  title: {
    default: "Trendiva | Discover the Latest Fashion Trends",
    template: "%s | Trendiva",
  },
  description:
    "Trendiva is your destination for the latest fashion collections. Explore clothing, accessories, and exclusive offers online.",
  keywords: [
    "Trendiva",
    "fashion store",
    "online shopping",
    "latest trends",
    "e-commerce",
    "clothes",
    "accessories",
  ],
  applicationName: "Trendiva",
  authors: [{ name: "Ahmed Raaft", url: "https://trendiva.vercel.app/" }],
  creator: "Trendiva || Ahmed Raaft",
  metadataBase: new URL("https://trendiva.vercel.app/"),
  openGraph: {
    title: "Trendiva | Discover the Latest Fashion Trends",
    description:
      "Shop the latest styles in fashion and accessories at Trendiva. Secure checkout, fast delivery, and amazing deals.",
    url: "https://trendiva.vercel.app/",
    siteName: "Trendiva",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="page-wrapper">
          <ClothesContext>
            <ProductContext>
              <CartContext>
                <FavContext>
                  <Header />
                  <main className="content">{children}</main>
                  <Footer />
                </FavContext>
              </CartContext>
            </ProductContext>
          </ClothesContext>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
