export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              className="w-full rounded-md border p-3"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              className="w-full rounded-md border p-3"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-3 text-primary-foreground"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}