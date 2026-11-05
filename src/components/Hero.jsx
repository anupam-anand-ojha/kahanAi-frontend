function Hero() {
  const zones = [
    {
      id: "01",
      name: "Fantasy",
      genre: "FANTASY REALM",
      symbol: "✧",
      phrase: "Beyond the impossible",
      description:
        "Ancient magic, mythical creatures and kingdoms waiting to be discovered.",
    },
    {
      id: "02",
      name: "Horror",
      genre: "HORROR REALM",
      symbol: "☾",
      phrase: "Dare to uncover",
      description:
        "Dark secrets, unsettling mysteries and stories that haunt your imagination.",
    },
    {
      id: "03",
      name: "Sci-Fi",
      genre: "SCI-FI REALM",
      symbol: "⌘",
      phrase: "Beyond tomorrow",
      description:
        "Unknown galaxies, artificial intelligence and futures yet unwritten.",
    },
    {
      id: "04",
      name: "Adventure",
      genre: "ADVENTURE REALM",
      symbol: "⟁",
      phrase: "Into the unknown",
      description:
        "Lost civilizations, daring quests and discoveries at every turn.",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090d] text-[#eee8dc]"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="h-full w-full object-cover opacity-[0.22]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#09090d] via-[#09090d]/90 to-[#09090d]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-[#09090d]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent" />
      </div>

      {/* Ambient amber glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-amber-600/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-orange-700/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-4 lg:px-12 lg:pt-6">
        {/* Top label */}
        <div className="flex items-center justify-between border-y border-amber-500/20 py-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-200/60 sm:text-xs">
            KAHANAI / STORY ENGINE
          </span>

          <span className="flex items-center gap-2 text-[10px] tracking-wider text-amber-100/50 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
            IMAGINATION HAS NO RULES
          </span>
        </div>

        {/* Main hero */}
        <div className="grid items-center gap-14 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          {/* Left content */}
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-xs tracking-widest text-amber-400 sm:text-sm">
              <span className="h-px w-8 bg-amber-500/60" />
              THE ART OF WHAT-IF
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              WHAT IF
              <br />
              <span className="font-serif font-normal italic text-amber-400">
                you wrote
              </span>
              <br />
              THE RULES?
            </h1>

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-amber-500/50" />
              <span className="text-sm text-amber-400">✦</span>
              <span className="h-px w-12 bg-amber-500/50" />
            </div>

            <p className="max-w-lg text-base leading-8 text-[#c5b9a5]/70 sm:text-lg">
              A world where stories don't follow paths — they follow you. Pick a
              universe, invent a possibility, and watch your imagination become
              a tale of its own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#zones"
                className="group inline-flex items-center gap-4 border border-amber-500/50 bg-gradient-to-r from-amber-500/20 to-orange-500/10 px-7 py-4 font-serif text-base text-amber-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                Enter the story lab
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                NO TWO STORIES ALIKE
              </span>
            </div>
          </div>

          {/* Right: Story composition */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Circular ornaments */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/20" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-500/30" />

            <div className="relative flex aspect-square items-center justify-center">
              {/* Floating symbols */}
              <div className="absolute left-[13%] top-[14%] flex h-16 w-16 rotate-[-12deg] items-center justify-center border border-amber-400/40 bg-[#17120f]/90 shadow-[0_10px_30px_rgba(0,0,0,0.4)] sm:h-20 sm:w-20">
                <span className="text-3xl text-amber-400">✳</span>
              </div>

              <div className="absolute right-[9%] top-[22%] flex h-14 w-14 rotate-[12deg] items-center justify-center border border-amber-400/20 bg-[#17120f]/90 sm:h-16 sm:w-16">
                <span className="text-2xl text-amber-200">☾</span>
              </div>

              <div className="absolute bottom-[15%] left-[17%] flex h-14 w-14 rotate-[8deg] items-center justify-center border border-amber-400/20 bg-[#17120f]/90 sm:h-16 sm:w-16">
                <span className="text-2xl text-amber-200">⌘</span>
              </div>

              <div className="absolute bottom-[13%] right-[15%] flex h-16 w-16 rotate-[-8deg] items-center justify-center border border-amber-400/40 bg-[#17120f]/90 sm:h-20 sm:w-20">
                <span className="text-3xl text-amber-400">✧</span>
              </div>

              {/* Chapter Zero — 3D Storybook */}
              <div className="relative z-10 [perspective:1000px]">
                {/* Book pages behind cover */}
                <div className="absolute inset-y-2 -right-3 w-full rounded-r-md border border-amber-200/30 bg-[#bda477] shadow-xl" />
                <div className="absolute inset-y-1 -right-2 w-full rounded-r-md border border-amber-200/30 bg-[#e8d5aa]" />
                <div className="absolute inset-y-0 -right-1 w-full rounded-r-md bg-[#d8c397]" />

                {/* Book cover */}
                <div className="group relative flex h-64 w-48 flex-col items-center justify-center overflow-hidden rounded-r-md border border-amber-400/60 bg-gradient-to-br from-[#35200d] via-[#1b120c] to-[#09090d] text-center shadow-[12px_15px_35px_rgba(0,0,0,0.65),0_0_45px_rgba(245,158,11,0.12)] transition-all duration-700 hover:-translate-y-2 hover:rotate-[-2deg] sm:h-72 sm:w-56">
                  {/* Book spine */}
                  <div className="absolute inset-y-0 left-0 w-4 border-r border-amber-400/30 bg-gradient-to-r from-[#080706] via-[#291a0d] to-[#17100a]" />

                  {/* Inner golden frame */}
                  <div className="absolute inset-3 border border-amber-400/30" />
                  <div className="absolute inset-[18px] border border-amber-200/10" />

                  {/* Book ornaments */}
                  <span className="absolute top-7 text-xl text-amber-400/80">
                    ✦
                  </span>
                  <span className="absolute bottom-7 text-xl text-amber-400/80">
                    ✦
                  </span>

                  {/* Book title */}
                  <div className="relative z-10 flex flex-col items-center pl-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-amber-400">
                      KahanAI presents
                    </span>

                    <div className="my-5 h-px w-20 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

                    <span className="font-serif text-3xl italic text-[#eee8dc] sm:text-4xl">
                      Once
                    </span>

                    <span className="mt-1 font-serif text-2xl text-amber-300">
                      upon a...
                    </span>

                    <div className="my-5 h-px w-20 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

                    <span className="font-mono text-[9px] tracking-[0.3em] text-amber-100/50">
                      CHAPTER ZERO
                    </span>

                    <span className="mt-2 text-[8px] tracking-[0.25em] text-amber-100/35">
                      YOUR STORY BEGINS
                    </span>
                  </div>
                </div>
              </div>

              {/* Figure labels */}
              <span className="absolute left-0 top-1/2 font-mono text-[10px] tracking-widest text-amber-100/40">
                FIG. 001
              </span>

              <span className="absolute right-0 top-1/2 font-mono text-[10px] tracking-widest text-amber-100/40 [writing-mode:vertical-rl]">
                IMAGINATION / INFINITE
              </span>
            </div>

            {/* Bottom caption */}
            <div className="mt-2 flex items-center justify-between border-t border-amber-500/20 pt-4 font-mono text-[9px] uppercase tracking-[0.15em] text-amber-100/40 sm:text-[10px] sm:tracking-[0.2em]">
              <span>One blank page</span>
              <span>Infinite outcomes ↗</span>
            </div>
          </div>
        </div>

        {/* Story zone selection */}
        <section id="zones" className="border-t border-amber-500/20 pt-12">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 border border-amber-500/30 px-3 py-1.5 text-[10px] tracking-[0.2em] text-amber-400">
                <span>✦</span>
                FIND YOUR UNIVERSE
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Choose your
                <span className="mt-1 block font-serif font-normal italic text-amber-400">
                  narrative
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#c5b9a5]/60">
              Every zone opens the door to a different reality. Choose a world
              and let your imagination take over.
            </p>
          </div>

          {/* Storybook Zone Collection */}
          <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-2 xl:grid-cols-4">
            {zones.map((zone) => (
              <a
                key={zone.id}
                href={`#zone-${zone.id}`}
                className="group relative block [perspective:1200px]"
              >
                {/* Pages behind the book */}
                <div className="absolute inset-y-3 -right-2 w-full rounded-r-md border border-amber-200/30 bg-[#cbb58a] shadow-lg transition-transform duration-500 group-hover:translate-x-2" />

                <div className="absolute inset-y-1 -right-1 w-full rounded-r-md border border-amber-200/30 bg-[#e5d2a8]" />

                {/* Book cover */}
                <div className="relative flex min-h-[390px] flex-col overflow-hidden rounded-r-md border border-amber-400/40 bg-gradient-to-br from-[#38230f] via-[#1b120c] to-[#09090d] shadow-[10px_15px_35px_rgba(0,0,0,0.55),0_0_25px_rgba(245,158,11,0.05)] transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-[-2deg] group-hover:shadow-[15px_25px_45px_rgba(0,0,0,0.7),0_0_35px_rgba(245,158,11,0.15)]">
                  {/* Book spine */}
                  <div className="absolute inset-y-0 left-0 z-20 w-5 border-r border-amber-400/30 bg-gradient-to-r from-[#080706] via-[#291a0d] to-[#17100a]" />

                  {/* Inner golden frame */}
                  <div className="pointer-events-none absolute inset-3 border border-amber-400/35" />
                  <div className="pointer-events-none absolute inset-5 border border-amber-200/10" />

                  {/* Ambient glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/[0.10] blur-[70px] transition-all duration-500 group-hover:bg-amber-400/[0.20]" />

                  {/* Book content */}
                  <div className="relative z-10 flex flex-1 flex-col items-center px-7 pb-7 pl-9 pt-9 text-center">
                    {/* Book number */}
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.25em] text-amber-200/45">
                        VOL. {zone.id}
                      </span>

                      <span className="text-lg text-amber-400/80 transition-transform duration-500 group-hover:rotate-45">
                        ✦
                      </span>
                    </div>

                    {/* Decorative symbol */}
                    <div className="my-8 flex h-28 w-28 items-center justify-center rounded-full border border-amber-400/30 transition-all duration-700 group-hover:scale-110 group-hover:border-amber-300/70 group-hover:shadow-[0_0_35px_rgba(245,158,11,0.18)]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-amber-400/30">
                        <span className="font-serif text-5xl text-amber-300">
                          {zone.symbol}
                        </span>
                      </div>
                    </div>

                    {/* Genre */}
                    <span className="font-mono text-[9px] tracking-[0.3em] text-amber-400/75">
                      {zone.genre}
                    </span>

                    {/* Book title */}
                    <h3 className="mt-3 font-serif text-3xl italic tracking-wide text-[#eee8dc] transition-colors duration-300 group-hover:text-amber-200">
                      {zone.name}
                    </h3>

                    <div className="my-4 h-px w-20 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                    {/* Book description */}
                    <p className="max-w-[220px] font-serif text-sm italic leading-6 text-[#c5b9a5]/65">
                      {zone.phrase}
                    </p>

                    <p className="mt-3 min-h-[60px] text-xs leading-5 text-[#c5b9a5]/45">
                      {zone.description}
                    </p>

                    {/* Book footer */}
                    <div className="mt-auto flex w-full items-center justify-between border-t border-amber-500/20 pt-5">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-amber-100/50">
                        OPEN THE BOOK
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/30 text-amber-300 transition-all duration-300 group-hover:translate-x-1 group-hover:border-amber-300 group-hover:bg-amber-400/10">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Bottom ornament */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-amber-400/50">
                    ✦
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-7 text-center font-mono text-[10px] tracking-[0.25em] text-amber-100/30">
            04 WORLDS / INFINITE STORIES
          </p>
        </section>
      </div>
    </section>
  );
}

export default Hero;
