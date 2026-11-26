
import { useLocation, useNavigate } from "react-router-dom";

function StoryResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const storyData = location.state?.story;

  if (!storyData?.story) {
    return (
      <main className="min-h-screen bg-[#09090d] px-6 py-24 text-center text-[#eee8dc]">
        <p className="font-mono text-xs tracking-[0.3em] text-amber-400">
          THE STORY ARCHIVE
        </p>

        <h1 className="mt-6 font-serif text-3xl">
          No story found
        </h1>

        <p className="mt-4 text-sm text-[#c5b9a5]/60">
          Create a new story to begin your journey.
        </p>

        <button
          onClick={() => navigate("/")}
          className="btn mt-8 rounded-none border-amber-400/50 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20"
        >
         ← Back to KahanAI
        </button>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090d] px-5 py-12 text-[#eee8dc] sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-600/[0.07] blur-[120px]" />

      <article className="relative mx-auto max-w-4xl border border-amber-500/20 bg-[#11100f] px-6 py-10 shadow-2xl sm:px-14 sm:py-16">
        <div className="mb-10 flex items-center justify-between border-b border-amber-500/20 pb-5">
          <button
            onClick={() => navigate("/")}
            className="font-serif text-lg text-amber-200 hover:text-amber-400"
          >
            KahanAI
          </button>

          <span className="font-mono text-[10px] tracking-[0.2em] text-amber-400/60">
            THE STORY ARCHIVE
          </span>
        </div>

        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-amber-400">
            {storyData.genre || "A NEW STORY"} REALM
          </p>

          <h1 className="mt-6 font-serif text-3xl italic leading-tight text-amber-100 sm:text-5xl">
            {storyData.title || "A New Tale Begins"}
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-amber-400/50" />

          <p className="text-xs leading-6 text-[#c5b9a5]/50">
            {storyData.theme}
          </p>
        </div>

        <div className="my-12 border-t border-amber-500/10" />

        <div className="whitespace-pre-wrap font-serif text-base leading-9 text-[#e4d8c5]/85 sm:text-lg sm:leading-10">
          {storyData.story}
        </div>

        <div className="mt-16 border-t border-amber-500/20 pt-8 text-center">
          <p className="mb-6 font-serif text-lg italic text-amber-200/60">
            Every ending is another beginning.
          </p>

          <button
            onClick={() => navigate("/")}
            className="btn rounded-none border border-amber-400/50 bg-amber-500/10 px-8 text-amber-200 hover:bg-amber-500/20"
          >
            Create Another Story ↗
          </button>
        </div>
      </article>
    </main>
  );
}

export default StoryResult;
