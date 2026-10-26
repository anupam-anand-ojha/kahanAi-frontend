function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] overflow-hidden bg-base-100 text-base-content"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/80 to-base-100/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-base-100/40" />
      </div>

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
              A world where stories don't follow paths — they follow you. Pick a
              universe, invent a possibility, and watch your imagination become
              a tale of its own.
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
                <span className="mt-4 text-xs opacity-40">YOU DECIDE</span>
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
        
        {/* Story Portal Selection */}
        <section id="zones" className="border-t border-base-content/10 pt-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="badge badge-secondary badge-outline mb-4">
                FIND YOUR UNIVERSE
              </div>

              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Choose your
                <span className="block font-serif font-normal italic text-secondary">
                  narrative
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 opacity-60">
              Every zone opens the door to a different reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                id: "01",
                name: "Fantasy",
                genre: "FANTASY REALM",
                symbol: "✧",
                phrase: "Beyond the impossible",
                description:
                  "Ancient magic, mythical creatures and kingdoms waiting to be discovered.",
                theme: "text-violet-300",
                border: "hover:border-violet-400/60",
                glow: "bg-violet-500/15",
                orb: "border-violet-300/30",
                number: "text-violet-300/20",
              },
              {
                id: "02",
                name: "Horror",
                genre: "HORROR REALM",
                symbol: "☾",
                phrase: "Dare to uncover",
                description:
                  "Dark secrets, unsettling mysteries and stories that haunt your imagination.",
                theme: "text-rose-300",
                border: "hover:border-rose-400/60",
                glow: "bg-rose-500/15",
                orb: "border-rose-300/30",
                number: "text-rose-300/20",
              },
              {
                id: "03",
                name: "Sci-Fi",
                genre: "SCI-FI REALM",
                symbol: "⌘",
                phrase: "Beyond tomorrow",
                description:
                  "Unknown galaxies, artificial intelligence and futures yet unwritten.",
                theme: "text-cyan-300",
                border: "hover:border-cyan-400/60",
                glow: "bg-cyan-500/15",
                orb: "border-cyan-300/30",
                number: "text-cyan-300/20",
              },
              {
                id: "04",
                name: "Adventure",
                genre: "ADVENTURE REALM",
                symbol: "⟁",
                phrase: "Into the unknown",
                description:
                  "Lost civilizations, daring quests and discoveries at every turn.",
                theme: "text-amber-300",
                border: "hover:border-amber-400/60",
                glow: "bg-amber-500/15",
                orb: "border-amber-300/30",
                number: "text-amber-300/20",
              },
            ].map((zone) => (
              <a
                key={zone.id}
                href={`#zone-${zone.id}`}
                className={`card group relative min-h-[360px] overflow-hidden border border-base-content/10 bg-base-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${zone.border}`}
              >
                {/* Atmospheric glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-12 h-56 w-56 rounded-full blur-[70px] transition-all duration-500 group-hover:scale-150 ${zone.glow}`}
                />

                {/* Oversized zone number */}
                <div
                  className={`pointer-events-none absolute -right-3 top-12 font-mono text-8xl font-black tracking-tighter opacity-70 transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1 ${zone.number}`}
                >
                  {zone.id}
                </div>

                <div className="card-body relative z-10 flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-[0.25em] opacity-50">
                      PORTAL / {zone.id}
                    </span>

                    <span className={`badge badge-outline ${zone.theme}`}>
                      {zone.genre}
                    </span>
                  </div>

                  {/* Portal symbol */}
                  <div className="flex flex-1 items-center justify-center py-8">
                    <div
                      className={`relative flex h-32 w-32 items-center justify-center rounded-full border ${zone.orb} transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <div
                        className={`absolute inset-3 rounded-full border border-dashed ${zone.orb}`}
                      />

                      <div
                        className={`absolute inset-6 rounded-full border ${zone.orb}`}
                      />

                      <span className={`relative text-5xl ${zone.theme}`}>
                        {zone.symbol}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p
                      className={`mb-2 font-serif text-sm italic ${zone.theme}`}
                    >
                      {zone.phrase}
                    </p>

                    <h3 className="text-2xl font-black tracking-tight">
                      {zone.name}
                    </h3>

                    <p className="mt-3 min-h-[80px] text-sm leading-6 opacity-60">
                      {zone.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-base-content/10 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Enter this world
                    </span>

                    <span
                      className={`btn btn-circle btn-sm btn-ghost transition-transform duration-300 group-hover:translate-x-1 ${zone.theme}`}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-5 text-center font-mono text-[10px] tracking-[0.25em] opacity-40">
            04 WORLDS / INFINITE STORIES
          </p>
        </section>
      </div>
    </section>
  );
}

export default Hero;
