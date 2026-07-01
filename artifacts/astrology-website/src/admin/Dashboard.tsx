export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">
            Total Consultations
          </h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">
            Pending
          </h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">
            Completed
          </h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold">
            Today
          </h2>
          <p className="text-4xl font-bold mt-3">0</p>
        </div>
      </div>
    </div>
  );
}