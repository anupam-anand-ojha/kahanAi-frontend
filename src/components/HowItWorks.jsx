
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
    <section id="how-it-works" className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="badge badge-secondary badge-outline mb-5">
            THE CREATION PROCESS
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            How the magic
            <span className="block font-serif font-normal italic text-secondary">
              happens.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 opacity-60 md:text-base">
            Every great story begins with an idea.
            Here's how you can turn yours into an unforgettable experience.
          </p>
        </div>

        {/* Steps */}
        <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">

          {steps.map((step, index) => (
            <li key={step.number}>

              {index !== 0 && <hr className="bg-secondary/30" />}

              {/* Timeline Icon */}
              <div className="timeline-middle">
                <div className="avatar placeholder">
                  <div className="w-12 rounded-full border border-secondary/40 bg-secondary/10 text-secondary">
                    <span className="text-xl">{step.icon}</span>
                  </div>
                </div>
              </div>

              {/* Step Card */}
              <div
                className={`mb-10 ${
                  index % 2 === 0
                    ? "timeline-start md:text-end"
                    : "timeline-end"
                }`}
              >
                <div className="card border border-base-content/10 bg-base-200/40 text-left shadow-lg transition-all duration-300 hover:border-secondary/40 hover:shadow-xl">

                  <div className="card-body gap-3 p-6 md:p-8">

                    <span className="font-mono text-xs tracking-[0.25em] text-secondary">
                      STEP / {step.number}
                    </span>

                    <h3 className="text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 opacity-60">
                      {step.description}
                    </p>

                  </div>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <hr className="bg-secondary/30" />
              )}

            </li>
          ))}

        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#create" className="btn btn-secondary btn-lg">
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

