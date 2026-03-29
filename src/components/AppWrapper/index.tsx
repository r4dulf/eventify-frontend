import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieBanner } from "../CookieBanner";

import "./index.scss";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
};
