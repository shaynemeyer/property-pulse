import { ReactNode } from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/AuthProvider";
import { auth } from "@/auth";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
};

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  const userId = session?.user?.id || null;
  console.log({ session });

  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar userId={userId} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};
export default MainLayout;
