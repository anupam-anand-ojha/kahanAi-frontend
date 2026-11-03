
function StoryResult() {
  // Temporary sample data.
  // Later, replace this with your backend API response.
  const story = {
    title: "The Kingdom of Forgotten Souls",
    zone: "FANTASY REALM",
    chapter: "CHAPTER ONE",
    content: [
      "Beyond the mountains where sunlight had long forgotten to shine, there existed a kingdom hidden from the eyes of the living.",
      "Its towers touched the clouds, its rivers whispered ancient secrets, and its forests remembered every soul that had ever walked beneath their shadows.",
      "One evening, a mysterious light appeared above the abandoned throne. Somewhere in the darkness, an ancient prophecy was beginning to awaken.",
    ],
  };

  return (
    <main className="min-h-screen bg-base-100 px-5 py-16 md:px-10">
      <div className="mx-auto max-w-4xl">

        {/* Top Navigation */}
        <div className="mb-12 flex items-center justify-between">
          <a href="/" className="btn btn-ghost text-lg font-bold">
            <span className="text-secondary">✦</span>
            Kahan<span className="text-secondary">AI</span>
          </a>

          <a href="/" className="btn btn-outline btn-sm">
            ← Back Home
          </a>
        </div>

        {/* Story Header */}
        <div className="mb-12 text-center">
          <div className="badge badge-secondary badge-outline mb-6">
            {story.zone}
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
            {story.title}
          </h1>

          <div className="divider mx-auto max-w-xs">
            <span className="text-secondary">✦</span>
          </div>

          <p className="font-mono text-xs tracking-[0.3em] opacity-50">
            {story.chapter}
          </p>
        </div>

        {/* Story Cover */}
        <div className="card mb-12 overflow-hidden border border-base-content/10 bg-base-200">
          <div className="flex min-h-64 items-center justify-center bg-gradient-to-br from-secondary/20 via-base-300 to-base-100">
            <div className="text-center">
              <div className="mb-4 text-7xl text-secondary">✧</div>
              <p className="font-serif text-xl italic opacity-70">
                A world waiting to be discovered
              </p>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <article className="mx-auto max-w-2xl">
          {story.content.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-7 font-serif text-lg leading-9 opacity-80 md:text-xl md:leading-10 ${
                index === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-bold first-letter:text-secondary" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="divider my-12">
            <span className="text-secondary">✦ ✦ ✦</span>
          </div>

          <p className="text-center font-serif text-xl italic opacity-60">
            And so, the story begins...
          </p>
        </article>

        {/* Story Actions */}
        <div className="card mt-16 border border-base-content/10 bg-base-200/40">
          <div className="card-body items-center gap-5 text-center">
            <h2 className="text-2xl font-bold">
              Your imagination created this world.
            </h2>

            <p className="text-sm opacity-60">
              Ready to explore another story?
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#create" className="btn btn-secondary">
                Create Another Story ✦
              </a>

              <a href="/#library" className="btn btn-outline">
                My Stories
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default StoryResult;
