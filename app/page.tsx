"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <main className="w-full max-w-xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Next.js + React TS SPA</h1>
          <p className="text-muted-foreground">
            A single-page demo with simple client-side interactivity.
          </p>
        </header>

        <section className="space-y-4">
          <label className="block">
            <span className="text-sm text-gray-600 dark:text-gray-300">Your name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type and see it update…"
              className="mt-1 w-full rounded border border-black/10 dark:border-white/15 bg-white dark:bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <p className="text-lg">Hello{ name ? ", " : ""}{name || "friend"} 👋</p>
        </section>

        <section className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-300">Counter</p>
          <div className="flex items-center gap-3">
            <button
              className="rounded px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setCount((c) => c - 1)}
              aria-label="Decrement"
            >
              -
            </button>
            <span className="min-w-10 text-center text-xl font-semibold">{count}</span>
            <button
              className="rounded px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setCount((c) => c + 1)}
              aria-label="Increment"
            >
              +
            </button>
          </div>
        </section>

        <footer className="pt-4 text-sm text-gray-500 dark:text-gray-400">
          Built with Next.js App Router, React, TypeScript, and Tailwind.
        </footer>
      </main>
    </div>
  );
}
