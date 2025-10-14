import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import { getStats, getActivityChart } from "../api/mockApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({});
  const [activityChart, setActivityChart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const statsData = await getStats();
        const activityData = await getActivityChart();
        setStats(statsData);
        setActivityChart(activityData);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 py-8 gap-6">
      <Sidebar />

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-softNavy mb-6">
          {t("dashboard_overview")}
        </h1>

        {loading ? (
          <div className="text-center text-gray-500 py-20">
            {t("loading")}...
          </div>
        ) : (
          <>
            {/* Top cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <DashboardCard
                title={t("dashboard_patients")}
                value={stats.activePatients}
              />
              <DashboardCard
                title={t("dashboard_transcriptions")}
                value={stats.recentTranscriptions}
              />
              <DashboardCard
                title={t("dashboard_reviews")}
                value={stats.pendingReviews}
              />
            </div>

            {/* Activity Chart */}
            <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-softNavy mb-3">
                {t("dashboard_activity")}
              </h2>
              <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer>
                  <LineChart data={activityChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" stroke="#999" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="transcriptions"
                      stroke="#C62828"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-5">
                <h3 className="font-semibold mb-3 text-softNavy">
                  {t("dashboard_recentNotes")}
                </h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Dr. Jane Doe — {t("transcribed")} (2025-09-30)</li>
                  <li>Dr. Samuel K — {t("pendingReview")} (2025-09-29)</li>
                  <li>Dr. Peter Lin — {t("reviewed")} (2025-09-28)</li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-5">
                <h3 className="font-semibold mb-3 text-softNavy">
                  {t("dashboard_quickActions")}
                </h3>
                <div className="flex flex-col gap-3">
                  <button className="px-4 py-2 bg-mapleRed text-white rounded hover:bg-red-700">
                    {t("action_newTranscription")}
                  </button>
                  <button className="px-4 py-2 border border-softNavy rounded hover:bg-softNavy hover:text-white">
                    {t("action_uploadAudio")}
                  </button>
                  <button className="px-4 py-2 border border-softNavy rounded hover:bg-softNavy hover:text-white">
                    {t("action_exportReport")}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
