import React, { ReactNode } from "react";

interface PagePorps {
  children: ReactNode;
}

export default function Layout({ children }: PagePorps) {
  return (
    <div>
      User Layout
      {children}
    </div>
  );
}
