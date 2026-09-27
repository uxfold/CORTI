import { ArrowRight } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextName = String(data.get("fullname") ?? "").trim();
    const nextMobile = String(data.get("mobile") ?? "").trim();
    const nextMessage = String(data.get("message") ?? "").trim();
    const digits = nextMobile.replace(/\D/g, "");
    if (digits.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello Corti Hearing Clinic,\n\nName: ${nextName}\nMobile: ${nextMobile}\n\n${nextMessage}`,
    );
    try {
      const prev = JSON.parse(localStorage.getItem("corti-enquiries") ?? "[]") as unknown[];
      prev.push({
        name: nextName,
        mobile: nextMobile,
        message: nextMessage,
        at: new Date().toISOString(),
      });
      localStorage.setItem("corti-enquiries", JSON.stringify(prev));
    } catch {
      /* ignore quota */
    }
    setName(nextName);
    setSent(true);
    toast.success("Opening WhatsApp so you can send your enquiry.");
    window.open(`${site.whatsappUrl}&text=${text}`, "_blank", "noopener");
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-line bg-cream p-8">
        <h3 className="text-2xl font-semibold">Thank you, {name.split(" ")[0]}.</h3>
        <p className="mt-3 text-sm text-muted">
          WhatsApp should have opened with your message. If it didn’t, call us
          on {site.phones.primary.display} or tap the green button on this page.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block">
        <span className="sr-only">Full name</span>
        <input
          required
          name="fullname"
          placeholder="Full name *"
          className="h-12 w-full rounded-md border border-line bg-paper px-4 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </label>
      <label className="block">
        <span className="sr-only">Mobile number</span>
        <input
          required
          name="mobile"
          type="tel"
          inputMode="tel"
          placeholder="Mobile number *"
          className="h-12 w-full rounded-md border border-line bg-paper px-4 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          required
          name="message"
          rows={8}
          placeholder="Message *"
          className="w-full rounded-md border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </label>
      <Button type="submit" size="lg">
        Send on WhatsApp
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
}
