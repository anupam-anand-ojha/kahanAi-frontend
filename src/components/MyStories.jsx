
const stories = [
  {
    id: "01",
    title: "The Kingdom of Ash",
    zone: "Fantasy",
    symbol: "✧",
    description:
      "A fallen kingdom, a forgotten prophecy, and a power buried beneath the ashes.",
  },
  {
    id: "02",
    title: "The Last Knock",
    zone: "Horror",
    symbol: "☾",
    description:
      "Every night at 3 AM, someone knocks. The problem is, nobody lives upstairs.",
  },
  {
    id: "03",
    title: "Echoes of Tomorrow",
    zone: "Sci-Fi",
    symbol: "⌘",
    description:
      "A message arrives from the future, carrying a warning no one can explain.",
  },
];

function MyStories() {
  return (
    <section
      id="library"
      className="relative overflow-hidden border-y border-white/10 bg-[#09090d] px-5 py-24 text-[#eee8dc] md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

          <div>
            <div className="badge badge-outline mb-6 border-amber-400/40 px-4 py-4 tracking-[0.3em] text-amber-300">
              YOUR PERSONAL ARCHIVE
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">
              The story
              <span className="block font-normal italic text-amber-400">
                vault.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#eee8dc]/50 md:text-base">
              Every world you imagine leaves a trace.
              Discover your creations and revisit the stories
              that deserve to be remembered.
            </p>
          </div>

          <a
            href="#create"
            className="btn h-12 border-amber-400 bg-amber-400 px-6 text-black hover:border-amber-300 hover:bg-amber-300"
          >
            <span>✦</span>
            New Story
            <span>↗</span>
          </a>
        </div>

        {/* Story Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {stories.map((story) => (
            <article
              key={story.id}
              className="card group overflow-hidden border border-white/10 bg-[#111016] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-[0_20px_60px_rgba(180,120,35,0.08)]"
            >
              <div className="card-body gap-5 p-6 md:p-7">

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-amber-400/60">
                    ARCHIVE / {story.id}
                  </span>

                  <span className="badge badge-outline border-amber-400/30 text-amber-300">
                    {story.zone}
                  </span>
                </div>

                {/* Story Artwork */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-box border border-amber-400/10 bg-gradient-to-br from-[#302019] via-[#19131a] to-[#09090d]">

                  <div className="absolute h-44 w-44 rounded-full bg-amber-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-amber-400/30 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">

                    <div className="absolute inset-3 rounded-full border border-dashed border-amber-400/30" />

                    <div className="absolute inset-7 rounded-full border border-amber-400/20" />

                    <span className="font-serif text-6xl text-amber-400">
                      {story.symbol}
                    </span>
                  </div>

                  <span className="absolute bottom-4 font-mono text-[9px] tracking-[0.3em] text-amber-200/40">
                    A WORLD OF ITS OWN
                  </span>
                </div>

                {/* Story Information */}
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-snug text-[#eee8dc] transition-colors group-hover:text-amber-300">
                    {story.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-[#eee8dc]/50">
                    {story.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="card-actions mt-auto items-center justify-between border-t border-white/10 pt-5">

                  <span className="font-mono text-[10px] tracking-[0.2em] text-amber-400/50">
                    STORY CONCEPT
                  </span>

                  <button
                    type="button"
                    className="btn btn-ghost btn-sm text-amber-400 hover:bg-amber-400/10"
                    onClick={() =>
                      document.getElementById("create")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Create Similar <span>↗</span>
                  </button>


                </div>
              </div>
            </article>
          ))}

        </div>

        {/* Archive Notice */}
        <div className="alert mt-10 border border-amber-400/15 bg-[#111016] text-[#eee8dc]">

          <span className="text-2xl text-amber-400">✦</span>

          <div>
            <h3 className="font-serif text-lg font-bold">
              Your archive begins here.
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#eee8dc]/50">
              These are sample story concepts. Connect your backend
              to display and manage your actual AI-generated stories.
            </p>
          </div>

        </div>

        {/* Bottom Decoration */}
        <div className="mt-14 text-center">
          <p className="font-serif text-xl italic text-[#eee8dc]/40">
            Some stories are too special to be forgotten.
          </p>
          <div className="mt-5 text-amber-400">✦</div>
        </div>

      </div>
    </section>
  );
}

export default MyStories;
