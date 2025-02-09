import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import ClientWrapper from "@/components/clientwrapper";

export const metadata = {
  title: "SOOF Factoring B.V",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </ClientWrapper>
      </body>
    </html>
  );
}