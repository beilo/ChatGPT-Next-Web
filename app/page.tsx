import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";
import { CustomBg } from "./components/bg";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();
export default async function App() {
  return (
    <>
      <CustomBg />
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
