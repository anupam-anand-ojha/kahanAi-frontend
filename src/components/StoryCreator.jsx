
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

const genres = [
  {
    name: "Fantasy",
    symbol: "✧",
    description: "Magic, kingdoms & mythical worlds",
    accent: "from-violet-500/20 to-purple-500/5",
  },
  {
    name: "Horror",
    symbol: "☾",
    description: "Dark secrets & haunting mysteries",
    accent: "from-red-500/20 to-rose-500/5",
  },
  {
    name: "Sci-Fi",
    symbol: "⌘",
    description: "Future worlds & technology",
    accent: "from-cyan-500/20 to-blue-500/5",
  },
  {
    name: "Adventure",
    symbol: "⟁",
    description: "Quests, discoveries & exploration",
    accent: "from-amber-500/20 to-orange-500/5",
  },
];

const moods = [
  "Mysterious",
  "Dark",
  "Emotional",
  "Magical",
  "Thrilling",
  "Funny",
  "Inspirational",
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

    if (error) setError("");
  };

  const selectGenre = (genre) => {
    setForm((prev) => ({
      ...prev,
      genre,
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.theme.trim()) {
      setError("Give your story an idea before creating it.");
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
          result.message || "Unable to generate your story."
        );
      }

      if (!result.data?.story) {
        throw new Error("The story was not received from the server.");
      }

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
      className="relative overflow-hidden bg-[#09090d] px-5 py-24 text-[#eee8dc] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-600/[0.08] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-700/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-amber-500/40" />
            <span className="font-mono text-[10px] tracking-[0.35em] text-amber-400">
              ✦ THE CREATION CHAMBER ✦
            </span>
            <span className="h-px w-10 bg-amber-500/40" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Every story begins with
            <span className="mt-2 block italic text-amber-400">
              an imagination.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#c5b9a5]/60 sm:text-base">
            A thousand worlds are waiting to be discovered.
            Give your imagination a voice and let KahanAI
            bring your story to life.
          </p>
        </motion.div>

        {/* Main creation card */}
        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleGenerate}
          className="mx-auto max-w-5xl border border-amber-500/20 bg-[#11100f]/95 shadow-[0_25px_100px_rgba(0,0,0,0.35)]"
        >
          {/* Card header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/15 px-6 py-6 sm:px-10">
            <div>
              <p className="font-serif text-xl text-amber-100 sm:text-2xl">
                The Story Blueprint
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Shape the world you want to explore.
              </p>
            </div>

            <span className="badge badge-outline rounded-none border-amber-500/30 px-4 py-3 font-mono text-[9px] tracking-widest text-amber-400">
              CHAPTER 01
            </span>
          </div>

          <div className="space-y-10 p-6 sm:p-10">

            {/* Genre selection */}
            <div>
              <div className="mb-5 flex items-center justify-between gap-3">
                <label className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                  01 — CHOOSE YOUR UNIVERSE
                </label>

                <span className="text-[10px] text-stone-600">
                  Select one genre
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {genres.map((genre) => {
                  const active = form.genre === genre.name;

                  return (
                    <button
                      key={genre.name}
                      type="button"
                      onClick={() => selectGenre(genre.name)}
                      aria-pressed={active}
                      className={`group relative overflow-hidden border p-5 text-left transition-all duration-300 ${
                        active
                          ? "border-amber-400/70 bg-amber-500/[0.09] shadow-[0_0_30px_rgba(245,158,11,0.07)]"
                          : "border-amber-500/15 bg-black/20 hover:border-amber-400/40 hover:bg-amber-500/[0.04]"
                      }`}
                    >
                      {active && (
                        <div className="absolute right-3 top-3 text-xs text-amber-400">
                          ✓
                        </div>
                      )}

                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center bg-gradient-to-br ${genre.accent} text-2xl text-amber-300 transition-transform duration-300 group-hover:scale-110`}
                      >
                        {genre.symbol}
                      </div>

                      <h3 className="font-serif text-xl">
                        {genre.name}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-stone-500">
                        {genre.description}
                      </p>

                      <div
                        className={`mt-5 h-px transition-all duration-300 ${
                          active
                            ? "w-full bg-amber-400/70"
                            : "w-8 bg-amber-500/20 group-hover:w-full"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Story theme */}
            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <label
                  htmlFor="theme"
                  className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                >
                  02 — WHAT IS YOUR STORY ABOUT?
                </label>

                <span className="text-[10px] text-stone-600">
                  {form.theme.length}/500
                </span>
              </div>

              <div className="relative">
                <textarea
                  id="theme"
                  name="theme"
                  rows="5"
                  maxLength={500}
                  value={form.theme}
                  onChange={handleChange}
                  placeholder="A forgotten kingdom where nobody remembers the sun..."
                  className="textarea textarea-bordered min-h-36 w-full resize-y rounded-none border-amber-500/20 bg-black/30 p-5 text-sm leading-7 text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
                  required
                />

                <span className="pointer-events-none absolute bottom-4 right-4 text-xl text-amber-500/30">
                  ✧
                </span>
              </div>
              <p className="mt-2 text-[11px] text-stone-600">
                A simple idea is enough. Let your imagination wander.
              </p>
            </div>

            {/* Characters */}
            <div>
              <label
                htmlFor="characters"
                className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
              >
                03 — YOUR CHARACTERS
                <span className="ml-2 normal-case tracking-normal text-stone-600">
                  (Optional)
                </span>
              </label>

              <input
                id="characters"
                name="characters"
                type="text"
                maxLength={500}
                value={form.characters}
                onChange={handleChange}
                placeholder="A brave warrior, a mysterious stranger..."
                className="input input-bordered h-14 w-full rounded-none border-amber-500/20 bg-black/30 px-5 text-sm text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Language and mood */}
            <div className="grid gap-7 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="language"
                  className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                >
                  04 — STORY LANGUAGE
                </label>

                <select
                  id="language"
                  name="language"
                  value={form.language}
                  onChange={handleChange}
                  className="select select-bordered h-14 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400 focus:outline-none"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Hinglish</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mood"
                  className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                >
                  05 — STORY MOOD
                </label>

                <select
                  id="mood"
                  name="mood"
                  value={form.mood}
                  onChange={handleChange}
                  className="select select-bordered h-14 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400 focus:outline-none"
                >
                  {moods.map((mood) => (
                    <option key={mood} value={mood}>
                      {mood}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live preview */}
            <div className="border border-amber-500/15 bg-amber-500/[0.035] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">✦</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-amber-400">
                  YOUR STORY IN THE MAKING
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-stone-400">
                <span>
                  <span className="text-amber-300">Realm:</span>{" "}
                  {form.genre}
                </span>

                <span>
                  <span className="text-amber-300">Mood:</span>{" "}
                  {form.mood}
                </span>

                <span>
                  <span className="text-amber-300">Language:</span>{" "}
                  {form.language}
                </span>
              </div>

              <p className="mt-4 line-clamp-2 font-serif text-sm italic text-stone-500">
                {form.theme.trim() ||
                  "Your story idea will appear here..."}
              </p>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="alert rounded-none border border-red-500/30 bg-red-950/30 text-sm text-red-300"
                >
                  <span>⚠</span>
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Generate button */}
            <div className="border-t border-amber-500/15 pt-8">
              <button
                type="submit"
                disabled={loading}
                className="btn h-16 w-full rounded-none border border-amber-400/50 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-orange-600/20 font-serif text-base font-normal tracking-wide text-amber-200 transition-all duration-300 hover:border-amber-300 hover:bg-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Weaving your story...
                  </>
                ) : (
                  <>
                    <span className="text-xl">✧</span>
                    Create My Story
                    <span className="text-xl">↗</span>
                  </>
                )}
              </button>

              <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] text-stone-600">
                POWERED BY KAHANAI STORY ENGINE
              </p>
            </div>
          </div>
        </motion.form>

        {/* Bottom note */}
        <p className="mt-10 text-center font-serif text-sm italic text-stone-600">
          "Every great story begins with a single thought. "
        </p>
      </div>
    </section>
  );
}

export default StoryCreator;
