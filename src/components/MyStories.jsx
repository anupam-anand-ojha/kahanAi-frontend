const stories = [
  {
    id: "01",
    title: "The Kingdom of Ash",
    zone: "Fantasy",
    symbol: "✧",
    description:
      "A fallen kingdom, a forgotten prophecy, and a power buried beneath the ashes.",
    theme: "text-violet-300",
    badge: "badge-secondary",
  },
  {
    id: "02",
    title: "The Last Knock",
    zone: "Horror",
    symbol: "☾",
    description:
      "Every night at 3 AM, someone knocks. The problem is, nobody lives upstairs.",
    theme: "text-rose-300",
    badge: "badge-error",
  },
  {
    id: "03",
    title: "Echoes of Tomorrow",
    zone: "Sci-Fi",
    symbol: "⌘",
    description:
      "A message arrives from the future, carrying a warning no one can explain.",
    theme: "text-cyan-300",
    badge: "badge-info",
  },
];


function MyStories() {
  return (
    <section id="library" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="badge badge-secondary badge-outline mb-4">
              YOUR PERSONAL ARCHIVE
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              The story
              <span className="block font-serif font-normal italic text-secondary">
                vault.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 opacity-60">
              Every world you imagine leaves a trace. Your next
              favourite story might begin right here.
            </p>
          </div>

          <a href="#create" className="btn btn-secondary">
            <span>✦</span> New Story
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="card border border-base-content/10 bg-base-200/40 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl"
            >
              <div className="card-body p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs opacity-40">
                    ARCHIVE / {story.id}
                  </span>

                  <span className={`badge badge-outline ${story.theme}`}>
                    {story.zone}
                  </span>
                </div>

                <div className="flex h-40 items-center justify-center overflow-hidden rounded-box border border-base-content/10 bg-base-300/50">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-base-content/15">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-base-content/20">
                      <span className={`text-5xl ${story.theme}`}>
                        {story.symbol}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="mt-2 text-2xl font-bold tracking-tight">
                  {story.title}
                </h3>

                <p className="min-h-20 text-sm leading-6 opacity-60">
                  {story.description}
                </p>

                <div className="card-actions mt-3 justify-between border-t border-base-content/10 pt-4">
                  <span className="self-center text-xs opacity-40">
                    STORY CONCEPT
                  </span>

                  <button
                    type="button"
                    className="btn btn-ghost btn-sm text-secondary"
                    onClick={() =>
                      document.getElementById("create")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    Create similar <span>↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="alert mt-8 border border-base-content/10 bg-base-200/30">
          <span className="text-xl text-secondary">✦</span>
          <div>
            <h3 className="font-bold">Your archive starts here</h3>
            <p className="text-sm opacity-60">
              These are sample story concepts. Connect the backend to display
              stories actually generated and saved by users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyStories;