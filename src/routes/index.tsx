import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Webhook,
  Hand,
  Globe2,
  PackageCheck,
  Check,
  ArrowRight,
  Sparkles,
  Lock,
} from "lucide-react";
import fusionLogo from "@/assets/fusion-logo.png";
import banner from "@/assets/banner.png";
import revolutPay from "@/assets/revolut-pay.png";
import shotProviders from "@/assets/shot-providers.png";
import shotConfig from "@/assets/shot-config.png";
import shotMessages from "@/assets/shot-messages.png";
import shotInvoice from "@/assets/shot-invoice.png";
import shotPaymentScreen from "@/assets/shot-paymentscreen.png";
import shotMethods from "@/assets/shot-methods.png";
import shotRefund from "@/assets/shot-refund.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Revolut Payment Gateway for Odoo | Fusion Technologies" },
      {
        name: "description",
        content:
          "Accept cards, Revolut Pay, Google Pay & Pay by bank in Odoo via Revolut's hosted checkout. Built by an official Odoo partner. Odoo 18 & 19, Community & Enterprise.",
      },
      { property: "og:title", content: "Revolut Payment Gateway for Odoo" },
      {
        property: "og:description",
        content:
          "Hosted checkout for cards and Revolut Pay in Odoo. Built and supported by Fusion Technologies, an official Odoo partner.",
      },
      { property: "og:image", content: banner },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: banner },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Screenshots />
        <Security />
        <Compatibility />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-revolut text-primary-foreground">
            <span className="font-display text-lg font-bold">R</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold">Revolut for Odoo</div>
            <div className="text-[11px] text-muted-foreground">by Fusion Technologies</div>
          </div>
        </div>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-lg bg-revolut px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-revolut-deep"
        >
          Get on Odoo App Store <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-revolut/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-revolut/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-revolut/20 bg-white/70 px-3 py-1 text-xs font-medium text-revolut-deep shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Built by an Official Odoo Partner
          </div>
          <h1 className="mt-5 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-revolut-deep md:text-6xl">
            Accept Revolut payments in Odoo.
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            Hosted checkout for cards, Revolut Pay, Google Pay and Pay by bank — straight from
            your Odoo eCommerce checkout and customer invoice portal. Lower fees, zero PCI
            burden, fully maintained by Fusion Technologies.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-lg bg-revolut px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg-purple transition hover:bg-revolut-deep"
            >
              Install from Odoo App Store <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              See what's included
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-revolut" /> Odoo 18 & 19 — Community & Enterprise</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-revolut" /> 90 days free support</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-revolut" /> PCI SAQ-A scope</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-purple opacity-20 blur-2xl" />
          <img
            src={banner}
            alt="Revolut Payment Gateway for Odoo — hosted checkout with Revolut Pay, cards, Google Pay and Pay by bank"
            className="w-full rounded-2xl border border-border shadow-lg-purple"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 py-5 text-sm text-muted-foreground md:justify-between">
        <span className="font-medium text-foreground">A first-class Odoo payment provider — installed, enabled, published.</span>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold">Cards</span>
          <span className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold">Revolut Pay</span>
          <span className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold">Google Pay</span>
          <span className="rounded-md border border-border bg-background px-3 py-1.5 font-semibold">Pay by bank</span>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: CreditCard,
    title: "Cards & Revolut Pay",
    body:
      "Hosted checkout surfaces credit/debit cards, Revolut Pay, Google Pay and Pay by bank automatically — no extra configuration.",
  },
  {
    icon: RefreshCcw,
    title: "Full & partial refunds",
    body:
      "Refund any captured payment — in full or in part — straight from the Odoo payment record. Reconciles back automatically.",
  },
  {
    icon: Webhook,
    title: "Verified, reliable webhooks",
    body:
      "Every Revolut notification is signature-verified (HMAC-SHA256) and processed idempotently. Payments complete even if the customer closes their browser.",
  },
  {
    icon: Hand,
    title: "Manual capture",
    body:
      "Authorise now, capture later when you're ready to fulfil — ideal for made-to-order and pre-authorisation workflows.",
  },
  {
    icon: Globe2,
    title: "Multi-currency",
    body:
      "Accept payments in 21 currencies including EUR, GBP and USD, with correct minor-unit handling for every currency.",
  },
  {
    icon: PackageCheck,
    title: "Lightweight & invoice-ready",
    body:
      "Depends only on Odoo's core payment module. Works for invoice-only businesses and full webshops alike.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-sm font-semibold uppercase tracking-wider text-revolut">Features</div>
        <h2 className="mt-2 text-balance text-4xl font-bold text-revolut-deep md:text-5xl">
          Everything you need, out of the box
        </h2>
        <p className="mt-4 text-muted-foreground">
          Take live payments through your Revolut Merchant account directly from Odoo.
          Customers are redirected to Revolut's secure hosted page — card data never touches
          your Odoo database.
        </p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:border-revolut/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-revolut-soft text-revolut transition group-hover:bg-revolut group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Screenshots() {
  const shots = [
    {
      img: shotProviders,
      title: "Enabled & published in Odoo Payment Providers",
      caption: "Revolut shows up natively in Settings → Payment Providers, ready to enable.",
    },
    {
      img: shotConfig,
      title: "Familiar Odoo provider configuration",
      caption: "Test mode, payment methods (Card, Revolut Pay), 21 currencies, manual capture, full & partial refunds.",
    },
    {
      img: shotMessages,
      title: "Customisable customer-facing messages",
      caption: "Help, pending, authorised, done and cancelled messages — editable from the standard Messages tab.",
    },
    {
      img: shotInvoice,
      title: "Pay Now on the customer invoice portal",
      caption: "Customers pay outstanding invoices in one click from the Odoo invoice portal.",
    },
    {
      img: shotPaymentScreen,
      title: "Native Odoo payment dialog",
      caption: "Revolut appears beside other enabled methods in the standard Odoo /payment screen.",
    },
    {
      img: shotMethods,
      title: "Revolut's secure hosted checkout",
      caption: "Revolut Pay, card, Google Pay and Pay by bank — branded with your business details.",
    },
    {
      img: shotRefund,
      title: "Full & partial refunds from the payment record",
      caption: "Refund a Revolut payment in full or in part directly from the Odoo payment record.",
    },
  ];
  return (
    <section id="screenshots" className="bg-revolut-soft/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-revolut">See it in action</div>
          <h2 className="mt-2 text-balance text-4xl font-bold text-revolut-deep md:text-5xl">
            Native Odoo, end to end
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {shots.map((s) => (
            <figure key={s.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={s.img} alt={s.caption} className="w-full bg-white object-contain" />
              <figcaption className="p-6">
                <div className="font-display text-base font-bold">{s.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-revolut">Secure by design</div>
          <h2 className="mt-2 text-balance text-4xl font-bold text-revolut-deep md:text-5xl">
            Hosted checkout. Lowest PCI scope.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Payments use Revolut's hosted checkout, so sensitive card data never reaches your
            Odoo instance — keeping you in the lowest PCI scope (SAQ-A). Webhook notifications
            are cryptographically signature-verified with a timestamp tolerance and secret-rotation
            support.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Card data never touches Odoo (PCI SAQ-A)",
              "HMAC-SHA256 signed webhooks with timestamp tolerance",
              "Idempotent event processing — no double captures",
              "Secret rotation supported without downtime",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-revolut text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-purple opacity-15 blur-2xl" />
          <div className="rounded-2xl border border-border bg-gradient-purple p-10 text-primary-foreground shadow-lg-purple">
            <Lock className="h-10 w-10 opacity-90" />
            <div className="mt-6 font-display text-3xl font-bold">PCI SAQ-A</div>
            <div className="mt-1 text-sm text-primary-foreground/80">Lowest merchant scope</div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white/10 p-4">
                <ShieldCheck className="h-5 w-5" />
                <div className="mt-3 font-semibold">HMAC-SHA256</div>
                <div className="text-xs opacity-80">Signed webhooks</div>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <RefreshCcw className="h-5 w-5" />
                <div className="mt-3 font-semibold">Idempotent</div>
                <div className="text-xs opacity-80">No duplicate charges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Compatibility() {
  return (
    <section id="compatibility" className="bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-revolut">Compatibility</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-revolut-deep">Works where you work</h2>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {[
              { t: "Odoo 19", d: "Community & Enterprise" },
              { t: "Deployment", d: "On-premise or Odoo.sh" },
              { t: "Clean install", d: "Add module, enter Revolut Merchant API key" },
              { t: "90 days support", d: "Free, included by Fusion Technologies" },
            ].map((i) => (
              <div key={i.t} className="rounded-xl border border-border bg-background p-6">
                <div className="font-display text-lg font-bold">{i.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-purple p-12 text-center text-primary-foreground shadow-lg-purple md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <img src={revolutPay} alt="Revolut Pay" className="mx-auto h-12 rounded-lg bg-white p-2" />
          <h2 className="mt-6 text-balance font-display text-4xl font-bold md:text-5xl">
            Start accepting Revolut payments in Odoo today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Install from the Odoo App Store, paste your Revolut Merchant API key, and you're
            live. Questions before you buy? We're happy to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-revolut-deep transition hover:bg-white/90"
            >
              Get on Odoo App Store <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@fusiontechnologies.ie"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Contact Fusion Technologies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={fusionLogo} alt="Fusion Technologies" className="h-10 w-auto" />
        </div>
        <div className="text-center text-sm text-muted-foreground md:text-right">
          <div>Built and maintained by Fusion Technologies — an official Odoo partner.</div>
          <div className="mt-1">© {new Date().getFullYear()} Fusion Technologies. Revolut and Odoo are trademarks of their respective owners.</div>
        </div>
      </div>
    </footer>
  );
}
