"use client";

import { useState } from "react";
import Icon from "../ui/Icon";

const CONTACT_EMAIL = "info@timesglobal.com.np";
const EMAIL_SUBJECT = "New Inquiry from Times Global Website";
const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/u/0/?view=cm&fs=1";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function buildInquiryEmail(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string {
  const lines = [
    "Hello Times Global,",
    "",
    "I am contacting you through the Times Global website.",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
  ];

  if (input.phone) {
    lines.push(`Phone: ${input.phone}`);
  }

  lines.push("", "Message:", input.message, "", "Thank you.");

  return lines.join("\n");
}

export default function ContactForm({ className = "" }: { className?: string }) {
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(
    name: string,
    email: string,
    phone: string,
    message: string
  ): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your full name.";
    else if (name.trim().length < 2) next.name = "Name must be at least 2 characters.";

    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!emailPattern.test(email.trim())) next.email = "Please enter a valid email address.";

    if (
      phone &&
      phone.trim().length > 0 &&
      !/^\+?[0-9\s().-]{7,32}$/.test(phone.trim())
    ) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!message.trim()) next.message = "Please write a message.";

    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const validationErrors = validate(name, email, phone, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Open Gmail's web compose in a small popup window pre-filled with the
    // inquiry. This runs synchronously inside the click handler so the browser
    // treats it as a user gesture. No status message is shown.
    const body = buildInquiryEmail({ name, email, phone, message });
    const composeUrl = `${GMAIL_COMPOSE_URL}&to=${encodeURIComponent(
      CONTACT_EMAIL
    )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;

    const width = Math.min(720, window.innerWidth - 40);
    const height = Math.min(700, window.innerHeight - 40);
    const left = Math.max(0, Math.round((window.innerWidth - width) / 2));
    const top = Math.max(0, Math.round((window.innerHeight - height) / 2));

    window.open(
      composeUrl,
      "gmail-compose",
      `popup,width=${width},height=${height},left=${left},top=${top},noopener,noreferrer`
    );

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-frost">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={`field ${errors.name ? "field-error" : ""}`}
            placeholder="Your full name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="mt-2 text-xs text-accent">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-frost">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`field ${errors.email ? "field-error" : ""}`}
            placeholder="you@company.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-2 text-xs text-accent">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-frost">
          Phone <span className="text-dim">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`field ${errors.phone ? "field-error" : ""}`}
          placeholder="+977 …"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone ? (
          <p id="phone-error" role="alert" className="mt-2 text-xs text-accent">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-frost">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`field resize-y ${errors.message ? "field-error" : ""}`}
          placeholder="How can we help?"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-2 text-xs text-accent">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-7 w-full"
      >
        Send Inquiry
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>
    </form>
  );
}
