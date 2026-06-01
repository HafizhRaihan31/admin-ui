import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistics from "../components/Fragments/CardStatistics";
import CardBalance from "../components/Fragments/CardBalance";
import { transactions, bills, expensesBreakdowns } from "../data";

function DashboardPage() {
  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full">

        {/* Baris 1 — 3 card masing-masing 4 kolom */}
        <div className="sm:col-span-4">
          <CardBalance />
        </div>
        <div className="sm:col-span-4">
          <CardGoal />
        </div>
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Baris 2 & 3 */}
        {/* Recent Transactions: 4 kolom, rentang 2 baris */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>
        {/* Statistics: 8 kolom */}
        <div className="sm:col-span-8">
          <CardStatistics />
        </div>
        {/* Expenses Breakdown: 8 kolom */}
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>

      </div>
    </MainLayout>
  );
}

export default DashboardPage;