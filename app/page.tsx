import Link from "next/link";

const recentInvestigations = [
  {
    property: "123 Main Street",
    location: "St. Petersburg, FL",
    carrier: "State Farm",
    claim: "#123456789",
    status: "In Progress",
    updated: "Updated 2 hours ago",
  },
  {
    property: "456 Oak Drive",
    location: "Tampa, FL",
    carrier: "Citizens",
    claim: "#987654321",
    status: "Weather Review",
    updated: "Updated yesterday",
  },
  {
    property: "789 Beach Blvd",
    location: "Clearwater, FL",
    carrier: "Travelers",
    claim: "#556677889",
    status: "Report Ready",
    updated: "Updated 2 days ago",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.28),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(30,64,175,0.18),transparent_35%),linear-gradient(180deg,#020617_0%,#020617_45%,#0f172a_100%)]" />

      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-12">
        <div className="text-center">
          <div className="mb-5 text-6xl font-black uppercase tracking-[0.2em] sm:text-7xl">
            StormI<span className="text-sky-400">Q</span>
          </div>

          <p className="text-xl font-semibold text-slate-100 sm:text-2xl">
            Preserve professional judgment.
          </p>

          <p className="mt-1 text-xl font-semibold text-sky-400 sm:text-2xl">
            Eliminate unnecessary work.
          </p>

          <div className="mx-auto mt-7 flex w-72 items-center gap-4 text-sky-400">
            <div className="h-px flex-1 bg-sky-400/50" />
            <span className="text-2xl">⚡</span>
            <div className="h-px flex-1 bg-sky-400/50" />
          </div>
        </div>

        <div className="mt-10 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          <Link
            href="/investigate"
            className="group rounded-2xl border border-sky-400/70 bg-slate-950/55 p-8 text-left shadow-[0_0_35px_rgba(14,165,233,0.18)] backdrop-blur transition hover:bg-sky-950/50"
          >
            <div className="text-4xl text-sky-400 transition group-hover:scale-110">
              ⚡
            </div>

            <h2 className="mt-5 text-2xl font-bold">Start Investigation</h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Begin a new property investigation.
            </p>
          </Link>

          <button className="group rounded-2xl border border-slate-600/80 bg-slate-950/45 p-8 text-left backdrop-blur transition hover:border-sky-400/70 hover:bg-slate-900/70">
            <div className="text-4xl text-sky-400 transition group-hover:scale-110">
              📂
            </div>

            <h2 className="mt-5 text-2xl font-bold">Continue Investigation</h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Open an existing investigation.
            </p>
          </button>
        </div>

        <div className="mt-10 w-full max-w-5xl rounded-2xl border border-slate-700/70 bg-slate-950/55 p-5 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Investigations</h3>

            <button className="text-sm font-semibold text-sky-400">
              View All →
            </button>
          </div>

          <div className="space-y-3">
            {recentInvestigations.map((item) => (
              <button
                key={item.property}
                className="grid w-full gap-3 rounded-xl border border-slate-800 bg-slate-900/65 p-4 text-left transition hover:border-sky-500 md:grid-cols-[1.3fr_1fr_1fr_auto]"
              >
                <div>
                  <p className="font-bold">{item.property}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                </div>

                <div>
                  <p className="font-semibold">{item.carrier}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Claim {item.claim}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-slate-100">{item.status}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.updated}</p>
                </div>

                <div className="flex items-center text-xl text-sky-400">›</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}