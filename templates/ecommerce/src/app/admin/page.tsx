"use client";

import { useAuth } from "../providers";
import { useState } from "react";

const tabs = ["Products", "Orders", "Settings"] as const;
type Tab = (typeof tabs)[number];

export default function AdminPage() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("Products");

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Admin Access Required</h1>
        <p className="mt-2 text-text-secondary">
          Sign in with an admin account to access the dashboard.
        </p>
        <p className="mt-4 text-sm text-text-secondary">
          Set up Firebase authentication and add your admin logic to restrict access.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <span className="text-sm text-text-secondary">{user.email}</span>
      </div>

      {/* Tab Navigation */}
      <div className="mt-6 flex gap-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-4 py-2 text-sm font-medium transition ${
              activeTab === tab
                ? "border-primary text-primary"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Products" && (
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Products</h2>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
                Add Product
              </button>
            </div>
            <p className="mt-4 text-text-secondary">
              Product management table will load here. Connect your database and add products via the API.
            </p>
          </div>
        )}

        {activeTab === "Orders" && (
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="mt-4 text-text-secondary">
              Order history and management will appear here once you have incoming orders.
            </p>
          </div>
        )}

        {activeTab === "Settings" && (
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Store Settings</h2>
            <p className="mt-4 text-text-secondary">
              Configure store name, payment settings, shipping options, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
