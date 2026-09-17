"use client";

import { useState } from "react";

export function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("Couldn't save your email. Try again.");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("Couldn't save your email. Try again.");
    try {
      const response = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const msg = data && typeof data.error === "string" ? data.error : "Signup failed";
        throw new Error(msg);
      }
      setState("success");
      setEmail("");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Couldn't save your email. Try again.");
      setState("error");
    }
  }

  if (state === "success") return <p className="mt-6 font-bold text-ev-black">You're on the list! We'll keep you posted.</p>;

  return (
    <form onSubmit={submit} className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row sm:relative">
      <label htmlFor="waitlist-email" className="sr-only">Email address</label>
      <input id="waitlist-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="brutal-input flex-1" />
      <button type="submit" disabled={state === "loading"} className="border-[3px] border-black bg-ev-neon-yellow px-6 py-3 font-brutal uppercase text-ev-neon-red shadow-brutal disabled:opacity-60">{state === "loading" ? "Joining…" : "JOIN WAITLIST"}</button>
      {state === "error" && <p className="text-sm font-bold text-ev-neon-red sm:absolute sm:top-full sm:mt-2 sm:left-0">{errorMessage}</p>}
    </form>
  );
}
