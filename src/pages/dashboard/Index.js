import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboardLayout/Index";

export default function DashboardIndex() {
  return (
    <>
      <DashboardLayout>
        <h1>Dashboard</h1>

        <Outlet />
      </DashboardLayout>
    </>
  );
}
