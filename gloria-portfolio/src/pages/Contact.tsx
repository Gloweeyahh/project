import { FormEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { sendEmail } from "../lib/sendEmail";
import BackButton from "../components/BackButton";


const packagePrefill: Record<string, string> = {
  Starter: "Includes a landing page with mobile responsiveness and fast delivery.",
  Growth: "Includes 5 pages, animations, SEO structure, and analytics setup.",
  Authority: "Includes 10+ pages, custom systems, funnels, and a CMS-ready architecture.",
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [prefillNote, setPrefillNote] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get("plan");

    if (plan) {
      const description = packagePrefill[plan] || "Please share pricing and next steps for this tier.";
      setMessage(`I'm interested in the ${plan} package. ${description}`);
      setPrefillNote(`Your message is prefilled for the ${plan} package.`);
    }
  }, [location.search]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields before submitting.");
      setStatus("error");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      await sendEmail({
        subject: "New contact request",
        html: `<h1>New contact request</h1><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
      });

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setPrefillNote("");
    } catch (sendError) {
      setError("Unable to send message. Please try again later.");
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-24 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <BackButton />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <section className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Contact</p>
                <h1 className="mt-4 text-5xl font-black text-gray-900 dark:text-white">
                  Start your premium website project.
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Use this form to send a direct project brief, ask about strategy calls,
                  or request a proposal for high-conversion digital experiences.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <ContactCard label="Fastest way" value="Submit the form" link="#contact-form" />
                <ContactCard label="Email" value="hello@yourbrand.com" link="mailto:hello@yourbrand.com" />
              </div>

              <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">
                <iframe
                  title="Office location map"
                  src="https://maps.google.com/maps?q=Lagos%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-80 border-0"
                  loading="lazy"
                />
              </div>
            </section>

            <section className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 p-10 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Send a brief</p>
              <h2 className="mt-4 text-4xl font-black text-gray-900 dark:text-white">Let’s make it feel premium.</h2>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                {prefillNote && (
                  <p className="text-sm text-green-500">{prefillNote}</p>
                )}
                <FormInput label="Name" value={name} onChange={setName} placeholder="Gloria Emeka" />
                <FormInput label="Email" value={email} onChange={setEmail} placeholder="hello@yourbrand.com" type="email" />
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="mt-2 w-full rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 px-5 py-4 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell me about your goals, timeline, and budget."
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                {status === "sent" && (
                  <p className="text-sm text-green-500">
                    Your message was sent successfully.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-3xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-500 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

function FormInput({ label, value, onChange, placeholder, type = "text" }: any) {
  return (
    <label className="block">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-3xl border border-gray-300 dark:border-white/20 bg-white dark:bg-slate-950 px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </label>
  );
}

function ContactCard({ label, value, link }: { label: string; value: string; link: string }) {
  return (
    <a href={link} className="block rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-950 p-6 text-left transition hover:border-yellow-400">
      <p className="text-sm uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">{label}</p>
      <p className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
    </a>
  );
}
