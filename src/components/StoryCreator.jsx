
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

const genres = [
  {
    name: "Fantasy",
    symbol: "✧",
    description: "Magic, kingdoms & mythical worlds",
  },
  {
    name: "Horror",
    symbol: "☾",
    description: "Dark secrets & haunting mysteries",
  },
  {
    name: "Sci-Fi",
    symbol: "⌘",
    description: "Future worlds & technology",
  },
  {
    name: "Adventure",
    symbol: "⟁",
    description: "Quests, discoveries & exploration",
  },
];

const initialForm = {
  genre: "Fantasy",
  theme: "",
  characters: "",
  language: "English",
  mood: "Mysterious",
};

function StoryCreator() {
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.theme.trim()) {
      setError("Please enter a story theme first.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/stories/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to generate story."
        );
      }

      if (!result.data?.story) {
        throw new Error("Story was not received from the server.");
      }

      // Open the generated story on a separate page.
      navigate("/story", {
        state: {
          story: result.data,
        },
      });
    } catch (err) {
      console.error("Story generation error:", err);

      setError(
        err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="create"
      className="relative overflow-hidden bg-[#09090d] px-6 py-24 text-[#eee8dc] lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-amber-400">
            ✦ THE CREATION CHAMBER ✦
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Every story begins with
            <span className="mt-2 block font-serif font-normal italic text-amber-400">
              an imagination.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#c5b9a5]/60">
            Choose your universe, create your characters and give life
            to a story that has never been told.
          </p>
        </div>

        <form
          onSubmit={handleGenerate}
          className="mx-auto max-w-4xl border border-amber-500/20 bg-[#11100f] p-6 shadow-2xl sm:p-10"
        >
          <div className="mb-8 flex items-center justify-between border-b border-amber-500/20 pb-5">
            <span className="font-serif text-xl text-amber-200">
              The Story Blueprint
            </span>

            <span className="font-mono text-[10px] tracking-widest text-amber-400/50">
              CHAPTER 01
            </span>
          </div>

          <label className="mb-4 block text-xs tracking-[0.2em] text-amber-200/70">
            01 — CHOOSE YOUR UNIVERSE
          </label>

          <div className="mb-9 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {genres.map((genre) => (
              <button
                key={genre.name}
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    genre: genre.name,
                  }))
                }
                className={`border p-4 text-left transition-all ${
                  form.genre === genre.name
                    ? "border-amber-400 bg-amber-500/10 shadow-[0_0_20px_rgba(245,158,11,0.08)]"
                    : "border-amber-500/15 bg-black/20 hover:border-amber-400/50"
                }`}
              >
                <span className="text-2xl text-amber-300">
                  {genre.symbol}
                </span>

                <span className="mt-3 block font-serif text-lg">
                  {genre.name}
                </span>

                <span className="mt-1 block text-[11px] leading-5 text-[#c5b9a5]/45">
                  {genre.description}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-7">
            <label
              htmlFor="theme"
              className="mb-3 block text-xs tracking-[0.2em] text-amber-200/70"
            >
              02 — WHAT IS YOUR STORY ABOUT?
            </label>

            <textarea
              id="theme"
              name="theme"
              rows="4"
              maxLength="500"
              value={form.theme}
              onChange={handleChange}
              placeholder="A forgotten kingdom where nobody remembers the sun..."
              className="textarea textarea-bordered w-full resize-none rounded-none border-amber-500/20 bg-black/30 text-sm leading-7 text-[#eee8dc] placeholder:text-[#c5b9a5]/30 focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="characters"
              className="mb-3 block text-xs tracking-[0.2em] text-amber-200/70"
            >
              03 — YOUR CHARACTERS
              <span className="ml-2 normal-case tracking-normal text-[#c5b9a5]/35">
                (Optional)
              </span>
            </label>

            <input
              id="characters"
              name="characters"
              type="text"
              maxLength="500"
              value={form.characters}
              onChange={handleChange}
              placeholder="A brave warrior, a mysterious stranger..."
              className="input input-bordered w-full rounded-none border-amber-500/20 bg-black/30 text-sm text-[#eee8dc] placeholder:text-[#c5b9a5]/30 focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div className="mb-9 grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="language"
                className="mb-3 block text-xs tracking-[0.2em] text-amber-200/70"
              >
                04 — STORY LANGUAGE
              </label>

              <select
                id="language"
                name="language"
                value={form.language}
                onChange={handleChange}
                className="select select-bordered w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Hinglish</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="mood"
                className="mb-3 block text-xs tracking-[0.2em] text-amber-200/70"
              >
                05 — STORY MOOD
              </label>

              <select
                id="mood"
                name="mood"
                value={form.mood}
                onChange={handleChange}
                className="select select-bordered w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
              >
                <option>Mysterious</option>
                <option>Dark</option>
                <option>Emotional</option>
                <option>Magical</option>
                <option>Thrilling</option>
                <option>Funny</option>
                <option>Inspirational</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="alert mb-6 rounded-none border border-red-500/30 bg-red-950/30 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn h-auto min-h-14 w-full rounded-none border border-amber-400/50 bg-gradient-to-r from-amber-600/20 to-orange-600/10 font-serif text-base font-normal tracking-wide text-amber-200 hover:border-amber-300 hover:bg-amber-500/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm" />
                Writing your story...
              </>
            ) : (
              <>✦ &nbsp; Generate My Story &nbsp; ↗</>
            )}
          </button>

          <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] text-amber-100/30">
            POWERED BY KAHANAI STORY ENGINE
          </p>
        </form>
      </div>
    </section>
  );
}

export default StoryCreator;
