
import React from "react";

function About() {
  const steps = [
    { number: "01", label: "Imagine" },
    { number: "02", label: "Create" },
    { number: "03", label: "Discover" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090d] px-5 py-28 text-[#eee8dc] md:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-600/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-700/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* About content */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-amber-500" />
              <span className="text-xs font-semibold tracking-[0.3em] text-amber-400">
                THE MIND BEHIND THE MAGIC
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-7xl">
              Stories are
              <span className="mt-2 block font-serif font-normal italic text-amber-400">
                more than words.
              </span>
            </h2>

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-amber-500/40" />
              <span className="text-sm text-amber-400">✦</span>
              <span className="h-px w-12 bg-amber-500/40" />
            </div>

            <p className="max-w-xl text-base leading-8 text-[#c5b9a5]/70">
              KahanAI is an AI-powered storytelling experience built
              for curious minds and limitless imagination. It gives
              you the freedom to explore different worlds, shape
              unforgettable characters, and bring your own ideas to life.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#c5b9a5]/70">
              From ancient kingdoms filled with magic to distant
              futures beyond the stars, every story begins with you.
              Choose your universe, imagine the impossible, and let
              your next adventure unfold.
            </p>

            <div className="mt-10">
              <a
                href="#create"
                className="group inline-flex items-center gap-4 border border-amber-500/40 bg-amber-500/10 px-7 py-4 font-serif text-lg text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500/15 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]"
              >
                Create Your Story
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Manifesto card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-2xl bg-amber-500/[0.06] blur-2xl" />

            <div className="relative overflow-hidden border border-amber-500/20 bg-[#111016] shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              {/* Inner decorative border */}
              <div className="pointer-events-none absolute inset-2 border border-amber-500/10" />

              <div className="relative p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-amber-400/80">
                    THE KAHANAI MANIFESTO
                  </span>
                  <span className="font-mono text-xs text-white/30">
                    001 / ∞
                  </span>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                <div className="py-7 text-center">
                  <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-amber-400/30 bg-amber-500/[0.06] shadow-[0_0_35px_rgba(245,158,11,0.1)]">
                    <span className="font-serif text-6xl text-amber-400">
                      ✦
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl leading-snug text-[#eee8dc] md:text-4xl">
                    “Every mind holds
                    <span className="mt-2 block italic text-amber-400">
                      a thousand worlds.”
                    </span>
                  </h3>

                  <p className="mx-auto mt-7 max-w-sm text-sm leading-7 text-[#c5b9a5]/55">
                    We believe imagination should have no boundaries.
                    Your ideas are the beginning. The story is yours to create.
                  </p>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

                <div className="grid grid-cols-3 gap-3 text-center">
                  {steps.map((step) => (
                    <div key={step.number} className="py-3">
                      <div className="font-serif text-3xl text-amber-400">
                        {step.number}
                      </div>
                      <div className="mt-2 text-xs tracking-wider text-[#c5b9a5]/55">
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] text-amber-500/40">
              <span>✧</span>
              <span>LET YOUR IMAGINATION BEGIN</span>
              <span>✧</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
