import { NewInvestigationForm } from "@/components/NewInvestigationForm";

export default function InvestigatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-5xl font-black">⚡ New Investigation</h1>

        <p className="mt-3 text-lg text-slate-400">
          Enter the property address and date range to begin.
        </p>

        <NewInvestigationForm />
      </div>
    </main>
  );
}