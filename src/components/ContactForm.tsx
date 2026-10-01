"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import type { ContactFormContent } from "@/content/types";

const ENDPOINT = "/api/contact.php";

type Status = { type: "success" | "error"; message: string } | null;
type Challenge = { question: string; token: string } | null;

const emptyValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  captcha: "",
};

const labelClass = "flex flex-col gap-2 text-[15px] font-semibold";
const fieldClass =
  "border-2 border-tinte bg-white px-3.5 text-[17px] font-normal text-tinte disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm({ c }: { c: ContactFormContent }) {
  const [values, setValues] = useState(emptyValues);
  const [challenge, setChallenge] = useState<Challenge>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [website, setWebsite] = useState("");

  const loadChallenge = useCallback(async () => {
    setChallenge(null);
    try {
      const response = await fetch(`${ENDPOINT}?captcha=1`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (data.success)
        setChallenge({ question: data.question, token: data.token });
    } catch {}
  }, []);

  useEffect(() => {
    void loadChallenge();
  }, [loadChallenge]);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    if (status) setStatus(null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!challenge) return;
    if (values.captcha.trim() === "") {
      setStatus({ type: "error", message: c.captchaRequired });
      return;
    }

    setSending(true);
    setStatus(null);
    try {
      const body = new FormData();
      body.append("name", values.name);
      body.append("email", values.email);
      body.append("subject", values.subject);
      body.append("message", values.message);
      body.append("captcha", values.captcha);
      body.append("token", challenge.token);
      body.append("website", website);

      const response = await fetch(ENDPOINT, { method: "POST", body });
      const data = await response.json().catch(() => ({ success: false }));

      if (data.success) {
        setStatus({ type: "success", message: c.success });
        setValues(emptyValues);
        void loadChallenge();
        return;
      }

      if (data.error === "bad_captcha") {
        setStatus({ type: "error", message: c.captchaRequired });
      } else if (data.error === "rate_limited") {
        setStatus({ type: "error", message: c.rateLimited });
      } else {
        setStatus({ type: "error", message: c.error });
      }
      setValues((current) => ({ ...current, captcha: "" }));
      void loadChallenge();
    } catch {
      setStatus({ type: "error", message: c.error });
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Kontaktformular"
      className="grid gap-x-5 gap-y-[18px] sm:grid-cols-2"
    >
      <label className={labelClass}>
        {c.name}
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={onChange}
          className={`h-12 ${fieldClass}`}
        />
      </label>
      <label className={labelClass}>
        {c.email}
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={onChange}
          className={`h-12 ${fieldClass}`}
        />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        {c.subject}
        <input
          type="text"
          name="subject"
          required
          value={values.subject}
          onChange={onChange}
          className={`h-12 ${fieldClass}`}
        />
      </label>
      <label className={`${labelClass} sm:col-span-2`}>
        {c.message}
        <textarea
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={onChange}
          className={`resize-y py-3 leading-[1.45] ${fieldClass}`}
        />
      </label>

      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-end gap-x-4 gap-y-2 sm:col-span-2">
        <label className={labelClass}>
          {c.captchaLabel}:{" "}
          {challenge ? `${challenge.question} =` : c.captchaLoading}
          <input
            type="text"
            inputMode="numeric"
            name="captcha"
            autoComplete="off"
            required
            disabled={!challenge}
            value={values.captcha}
            onChange={onChange}
            className={`h-12 w-28 ${fieldClass}`}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            setValues((current) => ({ ...current, captcha: "" }));
            void loadChallenge();
          }}
          className="h-12 text-[15px] font-semibold underline underline-offset-4 hover:text-petrol"
        >
          {c.captchaNew}
        </button>
      </div>

      <div aria-live="polite" className="sm:col-span-2 empty:hidden">
        {status && (
          <p
            className={`p-4 text-[15px] leading-snug ${
              status.type === "success"
                ? "bg-petrol text-leinen"
                : "bg-tinte text-leinen"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending || !challenge}
          className="h-14 bg-tinte px-7 text-lg font-semibold text-leinen hover:bg-petrol disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? c.sending : c.submit}
        </button>
      </div>
    </form>
  );
}
