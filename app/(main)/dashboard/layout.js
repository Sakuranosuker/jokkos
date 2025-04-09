import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r 
        from-yellow-600 to-amber-900 bg-clip-text text-transparent mb-5">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#f39c12" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}