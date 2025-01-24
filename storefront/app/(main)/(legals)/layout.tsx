// External packages
import React from "react";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <LayoutRow>
        <LayoutColumn span={12} lgOffset={1} lgSpan={8} xlOffset={2} xlSpan={6}>
          {children}
        </LayoutColumn>
      </LayoutRow>
    </Layout>
  );
}
