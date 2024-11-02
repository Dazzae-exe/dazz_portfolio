import React from "react";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "lenis/react";

export default function RootLayout() {
  return (
    <ReactLenis root>
      <main className="space-y-4">
        <Outlet />
      </main>
    </ReactLenis>
  );
}
