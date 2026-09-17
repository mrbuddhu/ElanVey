"use client";

import { useState } from "react";
import { subscriptionFaqs } from "@/data/subscription";

export function SubscriptionFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {subscriptionFaqs.map((faq, i) => (
        <div
          key={faq.question}
          className="relative overflow-hidden rounded-[1rem] border-[3px] border-black bg-ev-neon-cream p-6 shadow-brutal hover-lift md:p-8 text-ev-black"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[0.85rem]" aria-hidden style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 60%)"
          }} />
          <div className="relative z-10">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-brutal uppercase text-ev-black"
              aria-expanded={open === i}
            >
              <span className="pr-4 text-base leading-[0.98] text-ev-black sm:text-lg md:text-xl">{faq.question}</span>
              <span
                className={`flex-shrink-0 font-brutal text-2xl text-ev-neon-pink transition-transform duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div className={`accordion-content ${open === i ? "open" : ""}`}>
              <div className="accordion-inner">
                <div className="mt-4 border-t-[3px] border-black pt-4">
                  <p className="font-bold leading-relaxed text-ev-black/85">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
