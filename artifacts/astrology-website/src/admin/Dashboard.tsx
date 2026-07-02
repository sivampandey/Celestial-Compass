import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import {
  getConsultations,
  deleteConsultation,
  updateConsultationStatus,
} from "@/lib/admin-api";
import AdminLayout from "./Layout";
import { exportToExcel } from "../utils/exportToExcel";
import { exportToPDF } from "../utils/exportToPDF";
import AnalyticsCharts from "../components/AnalyticsCharts";

type Consultation = {
  id: number;
  name: string;
  phone: string;
  email?: string;
  category: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function Dashboard() {
  const [, navigate] = useLocation();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const previousCount = useRef(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const [selected, setSelected] = useState<Consultation | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }
  }, [navigate]);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getConsultations();
        if (
          previousCount.current > 0 &&
          result.data.length > previousCount.current
        ) {
          toast.success("🔔 New consultation received!");
        }

        previousCount.current = result.data.length;

        setConsultations(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();

    const interval = setInterval(loadData, 10000);

    return () => clearInterval(interval);
  }, []);

  async function handleDelete(id: number) {
    if (!confirm("Delete this consultation?")) return;

    try {
      await deleteConsultation(id);

      setConsultations((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete consultation.");
    }
  }

  async function handleStatusChange(id: number, status: string) {
    try {
      await updateConsultationStatus(id, status);

      setConsultations((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item)),
      );
    } catch (err) {
      console.error(err);
      alert("Failed to update status.");
    }
  }

  const totalCount = consultations.length;

  const pendingCount = consultations.filter(
    (item) => item.status === "Pending",
  ).length;

  const completedCount = consultations.filter(
    (item) => item.status === "Completed",
  ).length;

  const today = new Date().toDateString();

  const todayCount = consultations.filter(
    (item) => new Date(item.createdAt).toDateString() === today,
  ).length;

  const filteredConsultations = consultations.filter((item) => {
    const q = search.toLowerCase();

    const matchesSearch =
      (item.name || "").toLowerCase().includes(q) ||
      (item.phone || "").toLowerCase().includes(q) ||
      (item.category || "").toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalPages = Math.ceil(filteredConsultations.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;

  const paginatedConsultations = filteredConsultations.slice(
    startIndex,
    startIndex + recordsPerPage,
  );

  const categoryData = Object.values(
    filteredConsultations.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = {
            category:
              item.category.charAt(0).toUpperCase() + item.category.slice(1),
            count: 0,
          };
        }

        acc[item.category].count++;

        return acc;
      },
      {} as Record<string, { category: string; count: number }>,
    ),
  );

  const statusData = [
    {
      name: "Completed",
      value: completedCount,
    },
    {
      name: "Pending",
      value: pendingCount,
    },
  ];

  const dailyData = Object.values(
    filteredConsultations.reduce(
      (acc, item) => {
        const date = new Date(item.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
        });

        if (!acc[date]) {
          acc[date] = {
            date,
            count: 0,
          };
        }

        acc[date].count++;

        return acc;
      },
      {} as Record<string, { date: string; count: number }>,
    ),
  );

  if (loading) {
    return <div className="p-10 text-xl">Loading...</div>;
  }

  return (
    <AdminLayout>
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <p className="text-slate-400">Total Consultations</p>
            <h2 className="text-4xl font-bold mt-2">{totalCount}</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <p className="text-slate-400">Today's Requests</p>
            <h2 className="text-4xl font-bold mt-2">{todayCount}</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <p className="text-slate-400">Pending</p>
            <h2 className="text-4xl font-bold mt-2">{pendingCount}</h2>
          </div>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <p className="text-slate-400">Completed</p>
            <h2 className="text-4xl font-bold mt-2">{completedCount}</h2>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3"
          >
            <option value="All">All Categories</option>
            <option value="career">Career</option>
            <option value="marriage">Marriage</option>
            <option value="business">Business</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="love">Love</option>
            <option value="family">Family</option>
            <option value="finance">Finance</option>
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by name, phone or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 outline-none focus:border-yellow-500"
          />
          <button
            onClick={() =>
              exportToExcel(filteredConsultations, "consultations")
            }
            className="rounded-xl bg-green-600 hover:bg-green-700 px-5 py-3 font-medium"
          >
            Export Excel
          </button>
          <button
            onClick={() => exportToPDF(filteredConsultations, "consultations")}
            className="rounded-xl bg-red-600 hover:bg-red-700 px-5 py-3 font-medium"
          >
            Export PDF
          </button>
        </div>

        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-muted">
              <th className="border p-3">Name</th>
              <th className="border p-3">Phone</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Date</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Message</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedConsultations.map((item) => (
              <tr key={item.id}>
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.phone}</td>
                <td className="border p-3">{item.category}</td>

                <td className="border p-3 text-sm">
                  {new Date(item.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>

                <td className="border p-3">
                  <select
                    value={item.status || "Pending"}
                    onChange={(e) =>
                      handleStatusChange(item.id, e.target.value)
                    }
                    className={`rounded px-2 py-1 border ${
                      item.status === "Completed"
                        ? "bg-green-900 border-green-700 text-green-300"
                        : "bg-yellow-900 border-yellow-700 text-yellow-300"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>

                <td className="border p-3">{item.message}</td>

                <td className="border p-3 space-x-2">
                  <button
                    className="rounded-lg bg-blue-600 px-3 py-1 hover:bg-blue-700"
                    onClick={() => {
                      setSelected(item);
                      setOpen(true);
                    }}
                  >
                    View
                  </button>

                  <button
                    className="rounded-lg bg-green-600 px-3 py-1 hover:bg-green-700"
                    onClick={() => {
                      const phone = item.phone.startsWith("91")
                        ? item.phone
                        : `91${item.phone}`;

                      window.open(`https://wa.me/${phone}`, "_blank");
                    }}
                  >
                    WhatsApp
                  </button>

                  <button
                    className="rounded-lg bg-indigo-600 px-3 py-1 hover:bg-indigo-700"
                    onClick={() => {
                      window.location.href = `tel:${item.phone}`;
                    }}
                  >
                    Call
                  </button>

                  <button
                    className="rounded-lg bg-purple-600 px-3 py-1 hover:bg-purple-700"
                    onClick={() => {
                      if (!item.email) {
                        alert("No email available for this consultation.");
                        return;
                      }

                      window.location.href = `mailto:${item.email}`;
                    }}
                  >
                    Email
                  </button>

                  <button
                    className="rounded-lg bg-red-600 px-3 py-1 hover:bg-red-700"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AnalyticsCharts
          data={categoryData}
          statusData={statusData}
          dailyData={dailyData}
        />

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-slate-800 disabled:opacity-50"
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-slate-800 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {open && selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-xl p-8 w-[600px] max-w-[95%]">
            <h2 className="text-2xl font-bold mb-6">Consultation Details</h2>

            <div className="space-y-3">
              <p>
                <strong>ID:</strong> {selected.id}
              </p>

              <p>
                <strong>Name:</strong> {selected.name}
              </p>

              <p>
                <strong>Phone:</strong> {selected.phone}
              </p>

              <p>
                <strong>Email:</strong> {selected.email || "N/A"}
              </p>

              <p>
                <strong>Category:</strong> {selected.category}
              </p>

              <p>
                <strong>Status:</strong> {selected.status}
              </p>

              <p>
                <strong>Created:</strong>{" "}
                {new Date(selected.createdAt).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>

              <hr className="border-slate-700 my-4" />

              <p className="whitespace-pre-wrap">{selected.message}</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 rounded-lg bg-yellow-500 text-black px-6 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
