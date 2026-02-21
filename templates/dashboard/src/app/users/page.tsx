"use client";

import { useState } from "react";

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joined: string;
}

const sampleUsers: UserRow[] = [
  { id: "1", name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "active", joined: "2024-01-15" },
  { id: "2", name: "Sarah Chen", email: "sarah@example.com", role: "Editor", status: "active", joined: "2024-02-20" },
  { id: "3", name: "Marcus Williams", email: "marcus@example.com", role: "Viewer", status: "inactive", joined: "2024-03-10" },
  { id: "4", name: "Priya Patel", email: "priya@example.com", role: "Editor", status: "active", joined: "2024-04-05" },
  { id: "5", name: "Jordan Lee", email: "jordan@example.com", role: "Viewer", status: "active", joined: "2024-05-12" },
];

export default function UsersPage() {
  const [search, setSearch] = useState("");

  const filtered = sampleUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="mt-1 text-text-secondary">Manage your team members and their roles</p>
        </div>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
          Add User
        </button>
      </div>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Joined
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map((user) => (
              <tr key={user.id} className="transition hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-text-secondary">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      user.status === "active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-text-secondary">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-text-secondary">
            No users match your search.
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-text-secondary">
        This is sample data. Connect your database and replace with real user queries.
      </p>
    </div>
  );
}
