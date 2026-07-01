"use client";

import { useState } from "react";
import { createInvestigationFromManualEntry } from "@/engines/investigation/create-investigation";
import type { Investigation } from "@/types/investigation";

function getDefaultStartDate() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 2);
  return date.toISOString().slice(0, 10);
}

function getDefaultEndDate() {
  return new Date().toISOString().slice(0, 10);
}

export function NewInvestigationForm() {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [startDate, setStartDate] = useState(getDefaultStartDate());
  const [endDate, setEndDate] = useState(getDefaultEndDate());
  const [investigation, setInvestigation] = useState<Investigation | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const createdInvestigation = await createInvestigationFromManualEntry({
      propertyAddress,
      startDate,
      endDate,
    });

    setInvestigation(createdInvestigation);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8"
    >
      <label className="block text-sm font-semibold uppercase tracking-widest text-sky-400">
        Property Address
      </label>

      <input
        type="text"
        value={propertyAddress}
        onChange={(event) => setPropertyAddress(event.target.value)}
        placeholder="123 Main Street, St. Petersburg, FL"
        className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-lg outline-none transition focus:border-sky-400"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold uppercase tracking-widest text-sky-400">
            Start Date
          </label>

          <input
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-lg outline-none transition focus:border-sky-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold uppercase tracking-widest text-sky-400">
            End Date
          </label>

          <input
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-lg outline-none transition focus:border-sky-400"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-sky-400">
          Source
        </h2>

        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3">
            <input type="radio" name="source" defaultChecked />
            <span>Manual Entry</span>
          </label>

          <label className="flex items-center gap-3 text-slate-500">
            <input type="radio" disabled />
            <span>CompanyCam (coming soon)</span>
          </label>

          <label className="flex items-center gap-3 text-slate-500">
            <input type="radio" disabled />
            <span>ClickUp (coming soon)</span>
          </label>
        </div>
      </div>

      <button className="mt-10 w-full rounded-xl bg-sky-500 py-4 text-xl font-bold text-slate-950 transition hover:bg-sky-400">
        Begin Investigation
      </button>

      {investigation && (
  <div className="mt-8 rounded-xl border border-sky-500/40 bg-slate-950 p-5">
    <h3 className="font-bold text-sky-400">✓ Property Located</h3>

    <p className="mt-3 text-slate-300">
      {investigation.formattedAddress}
    </p>

    {investigation.candidateStorms?.length ? (
      <div className="mt-6">
        <h4 className="font-bold text-sky-400">Candidate Storms</h4>

        <div className="mt-3 space-y-3">
          {investigation.candidateStorms.map((storm) => (
            <div
              key={storm.id}
              className="rounded-lg border border-slate-800 bg-slate-900 p-4"
            >
              <p className="font-semibold">{storm.title}</p>
              <p className="mt-1 text-sm text-slate-400">
                {storm.date} · {storm.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    ) : null}
  </div>
)}
    </form>
  );
}