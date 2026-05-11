export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score features by{" "}
          <span className="text-[#58a6ff]">impact and effort</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Stop guessing what to build next. Rate every feature request across customer impact, effort, and strategic alignment — and let the algorithm rank your roadmap automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $25/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-24">
        {[
          { title: "Weighted Scoring", desc: "Automatically rank features using a configurable impact/effort/alignment algorithm." },
          { title: "Scoring Matrix", desc: "Visual table to input and compare all feature requests side by side." },
          { title: "Roadmap Export", desc: "Export your prioritized feature list to share with your team or investors." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            {[
              "Unlimited feature entries",
              "Weighted scoring algorithm",
              "Strategic alignment scoring",
              "Roadmap export (CSV)",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the scoring algorithm work?",
              a: "Each feature is rated 1–10 on customer impact, implementation effort, and strategic alignment. A weighted formula combines these scores to produce a final priority rank."
            },
            {
              q: "Can I customize the scoring weights?",
              a: "Yes. You can adjust the weight of each dimension to match your team's priorities — for example, prioritizing strategic alignment over raw effort."
            },
            {
              q: "Is my data safe?",
              a: "All feature data is stored securely in a private SQLite database tied to your account. Only you can access your roadmap."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Feature Prioritizer. All rights reserved.
      </footer>
    </main>
  );
}
