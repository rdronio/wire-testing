import { useState } from "react";
import TotalList from "./TotalList";

const Dashboard = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [totals, setTotal] = useState([
    { label: "Total Results", value: 5000, id: 1 },
    { label: "Total Approved", value: 3000, id: 2 },
    { label: "Total Re-test", value: 1500, id: 3 },
    { label: "Total Failed", value: 500, id: 4 },
  ]);

  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <section>
      <div
        id="head"
        className="bg-white shadow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        <div className="">
          <h2 className="">Dashboard</h2>
        </div>
      </div>
      <div id="body" className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <TotalList totals={totals} title="All Totals" />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
