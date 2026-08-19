"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BrutalPanel } from "@/components/ui/BrutalPanel";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <BrutalPanel variant="yellow" className="text-center">
        <div className="py-8">
          <p className="font-brutal text-5xl text-ev-neon-pink">✓</p>
          <h3 className="brutal-text mt-4 text-2xl text-ev-black">
            Message sent
          </h3>
          <p className="mt-4 font-bold text-ev-black/70">
            Thank you for reaching out. We&apos;ll get back to you shortly.
          </p>
        </div>
      </BrutalPanel>
    );
  }

  return (
    <BrutalPanel variant="cream">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block font-brutal text-xs uppercase">
              Name <span className="text-ev-neon-pink">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="brutal-input"
              placeholder="Your name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="mt-1 text-sm font-bold text-ev-neon-red">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-brutal text-xs uppercase">
              Email <span className="text-ev-neon-pink">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="brutal-input"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-sm font-bold text-ev-neon-red">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block font-brutal text-xs uppercase">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="brutal-input"
              placeholder="[PHONE]"
            />
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block font-brutal text-xs uppercase">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="brutal-input"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-brutal text-xs uppercase">
            Message <span className="text-ev-neon-pink">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="brutal-input resize-none"
            placeholder="Tell us about your project or inquiry..."
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="mt-1 text-sm font-bold text-ev-neon-red">
              {errors.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </BrutalPanel>
  );
}
