
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden bg-base-100 text-base-content"
    >
      "{/* Editorial background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(139,92,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>"

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-12 lg:pt-24">
        {/* Top label */}
        <div className="flex items-center justify-between border-y border-base-content/15 py-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] opacity-60">
            KAHANAI / STORY ENGINE
          </span>
          <span className="flex items-center gap-2 text-xs opacity-60">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            IMAGINATION HAS NO RULES
          </span>
        </div>

        {/* Main hero */}
        <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="mb-6 font-mono text-sm text-secondary">
              [ THE ART OF WHAT-IF ]
            </p>

            <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              WHAT IF
              <br />
              <span className="font-serif font-normal italic text-secondary">
                you wrote
              </span>
              <br />
              THE RULES?
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 opacity-65 sm:text-lg">
              A world where stories don't follow paths — they follow
              you. Pick a universe, invent a possibility, and watch
              your imagination become a tale of its own.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#zones" className="btn btn-secondary rounded-none px-7">
                Enter the story lab <span>↗</span>
              </a>
              <span className="font-mono text-xs opacity-50">
                NO TWO STORIES ALIKE
              </span>
            </div>
          </div>

          {/* Story composition — typographic, not a travel image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/20" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-secondary/30" />

            <div className="relative flex aspect-square items-center justify-center">
              <div className="absolute left-[13%] top-[14%] flex h-16 w-16 rotate-[-12deg] items-center justify-center border border-secondary/40 bg-base-200 shadow-xl sm:h-20 sm:w-20">
                <span className="text-3xl text-secondary">✳</span>
              </div>

              <div className="absolute right-[9%] top-[22%] flex h-14 w-14 rotate-[12deg] items-center justify-center border border-base-content/20 bg-base-200 sm:h-16 sm:w-16">
                <span className="text-2xl">☾</span>
              </div>

              <div className="absolute bottom-[15%] left-[17%] flex h-14 w-14 rotate-[8deg] items-center justify-center border border-base-content/20 bg-base-200 sm:h-16 sm:w-16">
                <span className="text-2xl">⌘</span>
              </div>

              <div className="absolute bottom-[13%] right-[15%] flex h-16 w-16 rotate-[-8deg] items-center justify-center border border-secondary/40 bg-base-200 sm:h-20 sm:w-20">
                <span className="text-3xl text-secondary">✧</span>
              </div>

              <div className="relative z-10 flex h-48 w-48 flex-col items-center justify-center border border-secondary/50 bg-base-200 text-center shadow-[0_0_80px_rgba(139,92,246,0.15)] sm:h-56 sm:w-56">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-secondary">
                  Chapter Zero
                </span>
                <span className="mt-4 font-serif text-5xl italic">Once</span>
                <span className="mt-1 font-serif text-3xl">upon a...</span>
                <span className="mt-4 text-xs opacity-40">
                  YOU DECIDE
                </span>
              </div>

              <span className="absolute left-0 top-1/2 font-mono text-[10px] tracking-widest opacity-40">
                FIG. 001
              </span>
              <span className="absolute right-0 top-1/2 font-mono text-[10px] tracking-widest opacity-40 [writing-mode:vertical-rl]">
                IMAGINATION / INFINITE
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between border-t border-base-content/15 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">
              <span>One blank page</span>
              <span>Infinite outcomes ↗</span>
            </div>
          </div>
        </div>

        {/* Zone preview strip */}
        <div
          id="zones"
          className="border-t border-base-content/15 pt-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.25em] opacity-60">
              Choose your narrative universe
            </p>
            <span className="font-mono text-xs opacity-40">01 — 04</span>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { number: "01", name: "FANTASY", symbol: "✳" },
              { number: "02", name: "HORROR", symbol: "☾" },
              { number: "03", name: "SCI-FI", symbol: "⌘" },
              { number: "04", name: "ADVENTURE", symbol: "✧" },
            ].map((zone) => (
              <a
                key={zone.number}
                href={`#zone-${zone.number}`}
                className="group border border-base-content/15 bg-base-200/40 p-4 transition-all duration-300 hover:border-secondary/60 hover:bg-secondary/10 sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs opacity-40">
                    {zone.number}
                  </span>
                  <span className="text-xl text-secondary transition-transform duration-300 group-hover:rotate-12">
                    {zone.symbol}
                  </span>
                </div>
                <p className="mt-5 text-sm font-bold tracking-wider">
                  {zone.name}
                </p>
                <p className="mt-1 text-xs opacity-40">
                  Enter universe ↗
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
