"use client";

import Consultations from "@/components/Home/Consultations/Index";
import Insights from "@/components/Home/Insights/Index";
import Organizations from "@/components/Home/Organizations/Index";
import Reports from "@/components/Home/Reports/Index";
import Navbar from "@/components/Navbar";
import { useTabStore } from "@/store/store";
import { Fragment } from "react";

const componentMap: { [key: string]: React.FC } = {
  Reports: Reports,
  Insights: Insights,
  Organizations: Organizations,
  Consultations: Consultations,
};

export default function Home() {
  const { activeTab } = useTabStore();
  const ActiveComponent = componentMap[activeTab] || null;

  return (
    <Fragment>
      <Navbar />
      {ActiveComponent && <ActiveComponent />}
    </Fragment>
  );
}
