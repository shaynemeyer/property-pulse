import { ReactNode } from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
export default MainLayout;
