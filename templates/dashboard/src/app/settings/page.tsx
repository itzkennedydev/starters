"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [appName, setAppName] = useState(
    process.env.NEXT_PUBLIC_APP_NAME ?? "My Dashboard"
  );
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-1 text-text-secondary">Configure your dashboard preferences</p>

      <div className="mt-8 max-w-2xl space-y-8">
        {/* General */}
        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">General</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary">
                Application Name
              </label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary">
                Timezone
              </label>
              <select className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                <option>America/Chicago</option>
                <option>America/New_York</option>
                <option>America/Los_Angeles</option>
                <option>Europe/London</option>
                <option>Asia/Tokyo</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm">Email notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative h-6 w-11 rounded-full transition ${
                  notifications ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    notifications ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm">Dark mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-6 w-11 rounded-full transition ${
                  darkMode ? "bg-primary" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    darkMode ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </label>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="rounded-xl border border-red-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
          <p className="mt-2 text-sm text-text-secondary">
            These actions are irreversible. Proceed with caution.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
              Reset All Data
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
