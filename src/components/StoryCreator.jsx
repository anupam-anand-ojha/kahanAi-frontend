
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

const genres = [
  { name: "Fantasy", symbol: "✧", detail: "Magic & mythical worlds" },
  { name: "Horror", symbol: "☾", detail: "Shadows & dark secrets" },
  { name: "Sci-Fi", symbol: "⌘", detail: "Future & technology" },
  { name: "Adventure", symbol: "⚔", detail: "Quests & discoveries" },
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
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.theme.trim()) {
      setError("Your story needs an idea to begin.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/stories/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to generate your story.");
      }

      if (!result.data?.story) {
        throw new Error("The story was not received from the server.");
      }

      navigate("/story", {
        state: { story: result.data },
      });
    } catch (err) {
      console.error("Story generation error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectedGenre =
    genres.find((genre) => genre.name === form.genre) || genres[0];

  return (
    <section
      id="create"
      className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-[#eee8dc] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-amber-700/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-800/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-amber-500/40" />
            <span className="font-mono text-[9px] tracking-[0.4em] text-amber-400">
              THE ART OF STORYTELLING
            </span>
            <span className="h-px w-10 bg-amber-500/40" />
          </div>

          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-6xl">
            Open a book.
            <span className="block italic text-amber-400">
              Create a universe.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-500">
            Every world begins with an idea. Choose your setting,
            shape its characters, and let a new legend unfold.
          </p>
        </motion.div>

        {/* Main studio */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT: Book preview */}
          <motion.aside
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[570px] flex-col overflow-hidden border border-amber-500/20 bg-[#17120e] p-7 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-3 border border-amber-500/10" />
            <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border border-amber-400/[0.07]" />
            <div className="pointer-events-none absolute -right-10 top-30 h-44 w-44 rounded-full border border-amber-400/[0.07]" />

            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.3em] text-amber-500/70">
                KAHANAI PRESS
              </span>
              <span className="font-serif text-sm italic text-amber-500/50">
                Vol. I
              </span>
            </div>

            <div className="relative my-auto py-16">
              <div className="mb-9 flex h-20 w-20 items-center justify-center border border-amber-500/30 bg-amber-500/[0.04]">
                <span className="font-serif text-5xl text-amber-400">
                  {selectedGenre.symbol}
                </span>
              </div>

              <p className="font-mono text-[9px] tracking-[0.35em] text-amber-500">
                A NEW WORLD AWAITS
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={form.genre + form.theme}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="mt-6 break-words font-serif text-4xl leading-tight text-[#f1e6d1] sm:text-5xl">
                    {form.theme.trim()
                      ? form.theme.trim().length > 55
                        ? `${form.theme.trim().slice(0, 55)}...`
                        : form.theme.trim()
                      : "The Untold Chronicles"}
                  </h3>

                  <p className="mt-5 font-serif text-lg italic text-amber-200/50">
                    {selectedGenre.name} · {form.mood}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="my-9 flex items-center gap-3 text-amber-500/60">
                <span className="h-px w-12 bg-amber-500/30" />
                ✦
                <span className="h-px w-12 bg-amber-500/30" />
              </div>

              <p className="max-w-xs font-serif text-sm italic leading-7 text-stone-400">
                {form.theme.trim()
                  ? "A new tale is taking shape. Its first page is waiting to be written..."
                  : "Somewhere between imagination and reality, a story is waiting to be born..."}
              </p>
            </div>

            <div className="relative flex items-end justify-between border-t border-amber-500/15 pt-6">
              <div>
                <p className="font-mono text-[9px] tracking-[0.2em] text-amber-500/60">
                  WRITTEN IN
                </p>
                <p className="mt-2 font-serif text-sm text-stone-300">
                  {form.language}
                </p>
              </div>

              <span className="font-serif text-3xl text-amber-500/30">
                K.
              </span>
            </div>
          </motion.aside>

          {/* RIGHT: Form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleGenerate}
            className="border border-amber-500/20 bg-[#11100f] shadow-2xl"
          >
            {/* Form header */}
            <div className="flex items-center justify-between border-b border-amber-500/15 px-6 py-6 sm:px-9">
              <div>
                <p className="font-serif text-2xl text-amber-100">
                  The Writer's Desk
                </p>
                <p className="mt-1 text-xs text-stone-500">
                  Your creative journey starts here.
                </p>
              </div>

              <span className="badge badge-outline rounded-none border-amber-500/30 px-3 py-3 font-mono text-[9px] tracking-widest text-amber-400">
                01 / 05
              </span>
            </div>

            <div className="space-y-8 p-6 sm:p-9">

              {/* Genre */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70">
                    01 — SELECT YOUR GENRE
                  </label>
                  <span className="text-[10px] text-stone-600">
                    Choose a universe
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {genres.map((genre) => {
                    const active = form.genre === genre.name;

                    return (
                      <button
                        key={genre.name}
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            genre: genre.name,
                          }))
                        }
                        aria-pressed={active}
                        className={`group flex items-center gap-3 border p-4 text-left transition-all duration-300 ${
                          active
                            ? "border-amber-400/70 bg-amber-500/[0.09]"
                            : "border-amber-500/15 bg-black/20 hover:border-amber-500/40"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center text-xl ${
                            active
                              ? "bg-amber-500/15 text-amber-300"
                              : "bg-white/[0.03] text-stone-400"
                          }`}
                        >
                          {genre.symbol}
                        </span>

                        <span className="min-w-0">
                          <span className="block font-serif text-base text-stone-200">
                            {genre.name}
                          </span>
                          <span className="mt-1 block text-[9px] text-stone-500">
                            {genre.detail}
                          </span>
                        </span>

                        {active && (
                          <span className="ml-auto self-start text-xs text-amber-400">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <label
                    htmlFor="theme"
                    className="font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                  >
                    02 — YOUR STORY IDEA
                  </label>
                  <span className="text-[10px] text-stone-600">
                    {form.theme.length}/500
                  </span>
                </div>

                <textarea
                  id="theme"
                  name="theme"
                  rows={4}
                  maxLength={500}
                  value={form.theme}
                  onChange={handleChange}
                  placeholder="In a kingdom where memories are traded like gold..."
                  required
                  className="textarea textarea-bordered min-h-32 w-full resize-y rounded-none border-amber-500/20 bg-black/30 p-4 text-sm leading-7 text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Characters */}
              <div>
                <label
                  htmlFor="characters"
                  className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                >
                  03 — CHARACTERS
                  <span className="ml-2 normal-case tracking-normal text-stone-600">
                    OPTIONAL
                  </span>
                </label>

                <input
                  id="characters"
                  name="characters"
                  type="text"
                  maxLength={500}
                  value={form.characters}
                  onChange={handleChange}
                  placeholder="A lonely prince, an immortal traveller..."
                  className="input input-bordered h-13 w-full rounded-none border-amber-500/20 bg-black/30 px-4 text-sm text-[#eee8dc] placeholder:text-stone-600 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Language */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="language"
                    className="mb-4 block font-mono text-[10px] tracking-[0.2em] text-amber-200/70"
                  >
                    04 — LANGUAGE
                  </label>

                  <select
                    id="language"
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    className="select select-bordered h-13 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
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
                    05 — ATMOSPHERE
                  </label>

                  <select
                    id="mood"
                    name="mood"
                    value={form.mood}
                    onChange={handleChange}
                    className="select select-bordered h-13 w-full rounded-none border-amber-500/20 bg-[#17120f] text-sm text-[#eee8dc] focus:border-amber-400"
                  >
                    {moods.map((mood) => (
                      <option key={mood}>{mood}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="alert rounded-none border border-red-500/30 bg-red-950/30 text-sm text-red-300"
                  >
                    <span>⚠</span>
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <div className="border-t border-amber-500/15 pt-7">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn h-16 w-full rounded-none border border-amber-400/50 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-orange-600/20 font-serif text-base font-normal tracking-wide text-amber-100 transition-all duration-300 hover:border-amber-300 hover:bg-amber-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Writing your tale...
                    </>
                  ) : (
                    <>
                      <span className="text-xl">✧</span>
                      Bring My Story to Life
                      <span className="text-xl">↗</span>
                    </>
                  )}
                </button>

                <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] text-stone-600">
                  YOUR IMAGINATION · OUR STORY ENGINE
                </p>
              </div>
            </div>
          </motion.form>
        </div>

        {/* Bottom signature */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-amber-500/20" />
          <p className="font-serif text-sm italic text-stone-600">
            Every legend deserves a first page.
          </p>
          <span className="h-px w-10 bg-amber-500/20" />
        </div>
      </div>
    </section>
  );
}

export default StoryCreator;
