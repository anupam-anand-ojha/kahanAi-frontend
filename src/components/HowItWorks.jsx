const steps = [
  {
    number: "01",
    icon: "✧",
    title: "Choose Your World",
    description:
      "Choose from Fantasy, Horror, Sci-Fi or Adventure. Every universe opens the door to a completely different experience.",
  },
  {
    number: "02",
    icon: "⌁",
    title: "Share Your Imagination",
    description:
      "Describe your idea, introduce a character or create a unique setting. Your imagination sets the story in motion.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Generate Your Story",
    description:
      "KahanAI transforms your idea into an original story with engaging characters, unexpected twists and immersive storytelling.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Explore Your Story",
    description:
      "Step into the world you've created, experience your story and keep your creations in your personal story collection.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-y border-white/10 bg-[#09090d] px-5 py-24 text-[#eee8dc] md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <div className="badge badge-outline mb-6 border-amber-400/40 px-4 py-4 tracking-[0.3em] text-amber-300">
            THE CREATION PROCESS
          </div>

          <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            How the magic
            <span className="block font-normal italic text-amber-400">
              happens.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#eee8dc]/50 md:text-base">
            Every great story begins with an idea. Discover how KahanAI
            transforms your imagination into an unforgettable storytelling
            experience.
          </p>

          <div className="divider mx-auto mt-8 max-w-xs before:bg-amber-400/20 after:bg-amber-400/20">
            <span className="text-amber-400">✦</span>
          </div>
        </div>

        {/* Timeline */}
        <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
          {steps.map((step, index) => (
            <li key={step.number}>
              {index !== 0 && <hr className="bg-amber-400/30" />}

              {/* Timeline Icon */}
              <div className="timeline-middle">
                <div className="avatar placeholder">
                  <div className="w-14 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.08)]">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                </div>
              </div>

              {/* Compact Manuscript Page */}
              <div
                className={`mb-10 ${
                  index % 2 === 0
                    ? "timeline-start md:text-end"
                    : "timeline-end"
                }`}
              >
                <div className="group relative mx-1">
                  {/* Slightly Offset Paper Layers */}
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-[1.5deg] border border-[#b99b70]/30 bg-[#b99b70]" />

                  {/* Main Page */}
                  <div className="relative overflow-hidden border border-[#b99b70]/60 bg-gradient-to-br from-[#e8d6b3] via-[#ddc69e] to-[#cbb18a] text-[#493522] shadow-[0_8px_25px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                    <div className="absolute inset-[6px] border border-[#795d3b]/25" />

                    <div className="relative p-5 md:p-6">
                      {/* Small Header */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[8px] tracking-[0.25em] text-[#755a3c]/65">
                          KAHANAI / {step.number}
                        </span>
                        <span className="font-serif text-lg text-[#795d3b]">
                          {step.icon}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-5 font-serif text-xl font-bold text-[#382719] md:text-2xl">
                        {step.title}
                      </h3>

                      {/* Ornament */}
                      <div className="my-3 flex items-center gap-2">
                        <span className="text-[10px] text-[#8a6842]">✦</span>
                        <div className="h-px w-8 bg-[#806344]/40" />
                      </div>

                      {/* Description */}
                      <p className="text-xs leading-6 text-[#59432e]/80 md:text-sm">
                        {step.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-[#806344]/25 pt-3">
                        <span className="font-mono text-[7px] tracking-[0.2em] text-[#765a3b]/60">
                          ANCIENT CHRONICLES
                        </span>
                        <span className="font-serif text-xs italic text-[#765a3b]/60">
                          ✧ {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Tiny Folded Corner */}
                    <div className="absolute right-0 top-0 h-5 w-5 border-b border-l border-[#795d3b]/25 bg-[#cbb18a]" />
                  </div>
                </div>
              </div>

              {index !== steps.length - 1 && <hr className="bg-amber-400/30" />}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 font-serif text-xl italic text-[#eee8dc]/50">
            Your next great story is waiting.
          </p>

          <a
            href="#create"
            className="btn h-14 border-amber-400 bg-amber-400 px-8 text-sm font-bold tracking-wide text-black shadow-lg shadow-amber-900/20 hover:border-amber-300 hover:bg-amber-300"
          >
            <span>✦</span>
            Start Your Story
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
