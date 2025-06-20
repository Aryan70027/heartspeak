// pages/create-card.jsx

import { useState } from "react"

// Flower rain animation (simple)
function FlowerRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(16)].map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 6.3) % 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: `${1.5 + Math.random()}em`,
          }}
          className="absolute animate-flower"
        >
          {Math.random() > 0.5 ? "🌺" : "🌸"}
        </span>
      ))}
      <style>{`
        .animate-flower {
          top: -2em;
          animation: flowerFall 7s linear infinite;
        }
        @keyframes flowerFall {
          to { top: 108vh; transform: rotate(360deg);}
        }
      `}</style>
    </div>
  )
}

const SEGMENTS = [
  { value: "Birthday", label: "🎂 Birthday", bg: "from-pink-100 to-fuchsia-200" },
  { value: "Sorry", label: "🙏 Sorry", bg: "from-blue-100 to-indigo-200" },
  { value: "Proposal", label: "💌 Proposal", bg: "from-rose-100 to-amber-100" },
  { value: "Anniversary", label: "💍 Anniversary", bg: "from-purple-100 to-yellow-100" },
  { value: "Other", label: "🌟 Other", bg: "from-sky-100 to-teal-100" },
]

export default function CreateCard() {
  const [segment, setSegment] = useState("Birthday")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [title, setTitle] = useState("")
  const [mainMessage, setMainMessage] = useState("")
  const [letter, setLetter] = useState("")
  const [photo, setPhoto] = useState(null)
  const [voice, setVoice] = useState(null)
  const [showMainSuggestions, setShowMainSuggestions] = useState(false)
  const [showLetterSuggestions, setShowLetterSuggestions] = useState(false)

  // Demo suggestions (replace with your PDF/real content)
  const preWrittenMain = [
    "Happy Birthday! 🎉",
    "You make life brighter.",
    "To my favorite person!"
  ]
  const preWrittenLetter = [
    "May your year be filled with joy and adventure...",
    "I can't imagine life without you. You light up every moment.",
    "You are special beyond words—never forget it!"
  ]

  // Dynamic bg based on segment
  const bgClass =
    "min-h-screen flex items-center justify-center px-2 py-8 " +
    `bg-gradient-to-br ${SEGMENTS.find(s => s.value === segment).bg}`

  return (
    <div className={bgClass + " relative"}>
      <FlowerRain />
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/90 shadow-2xl p-8 mx-auto border border-white/30 backdrop-blur">
        {/* Segment/occasion selector */}
        <div className="flex justify-center mb-6 gap-2">
          {SEGMENTS.map(seg => (
            <button
              key={seg.value}
              onClick={() => setSegment(seg.value)}
              className={`px-3 py-2 rounded-lg font-medium transition ${
                segment === seg.value
                  ? "bg-pink-200/90 text-pink-700 scale-105 shadow"
                  : "bg-white/70 text-gray-500 hover:bg-pink-50"
              }`}
              type="button"
            >
              {seg.label}
            </button>
          ))}
        </div>

        <form className="space-y-5 mt-3">
          <input
            type="text"
            className="w-full rounded-xl border border-pink-200 px-4 py-3 mb-1 font-medium bg-white focus:outline-pink-300"
            placeholder="Receiver Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          {segment === "Birthday" && (
            <input
              type="number"
              className="w-full rounded-xl border border-pink-200 px-4 py-3 mb-1 font-medium bg-white focus:outline-pink-300"
              placeholder="Age"
              value={age}
              onChange={e => setAge(e.target.value)}
              min={1}
              max={120}
              required
            />
          )}
          <input
            type="text"
            className="w-full rounded-xl border border-pink-200 px-4 py-3 mb-1 font-medium bg-white focus:outline-pink-300"
            placeholder="Card Title (for your dashboard)"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />

          {/* Main Message + pre-written */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="w-full rounded-xl border border-pink-200 px-4 py-3 font-medium bg-white focus:outline-pink-300"
              placeholder="Main Message (short, for card)"
              value={mainMessage}
              onChange={e => setMainMessage(e.target.value)}
              required
            />
            <button
              type="button"
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-pink-200 to-yellow-100 text-pink-700 font-bold shadow hover:scale-105 transition"
              onClick={() => setShowMainSuggestions(true)}
              title="Show Pre-written"
            >📜</button>
          </div>
          {showMainSuggestions && (
            <div className="bg-pink-50 border border-pink-200 rounded-xl shadow p-3 mt-1 mb-2">
              <div className="font-medium text-pink-600 mb-1">Suggestions:</div>
              {preWrittenMain.map((msg, i) => (
                <button
                  key={i}
                  className="block text-left w-full py-1 px-2 hover:bg-pink-100 rounded"
                  onClick={e => {e.preventDefault(); setMainMessage(msg); setShowMainSuggestions(false);}}
                >{msg}</button>
              ))}
              <button className="block mt-2 text-sm text-gray-400" onClick={() => setShowMainSuggestions(false)}>Close</button>
            </div>
          )}

          {/* Letter Message + pre-written */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label className="font-medium text-gray-600">Letter Message</label>
              <button
                type="button"
                className="px-3 py-2 rounded-xl bg-gradient-to-r from-pink-200 to-yellow-100 text-pink-700 font-bold shadow hover:scale-105 transition"
                onClick={() => setShowLetterSuggestions(true)}
                title="Show Pre-written"
              >📜</button>
            </div>
            <textarea
              className="w-full rounded-xl border border-pink-200 px-4 py-3 font-medium bg-white focus:outline-pink-300 resize-vertical"
              placeholder="Write your heartfelt letter here..."
              value={letter}
              onChange={e => setLetter(e.target.value)}
              required
            />
            {showLetterSuggestions && (
              <div className="bg-pink-50 border border-pink-200 rounded-xl shadow p-3 mt-1 mb-2">
                <div className="font-medium text-pink-600 mb-1">Suggestions:</div>
                {preWrittenLetter.map((msg, i) => (
                  <button
                    key={i}
                    className="block text-left w-full py-1 px-2 hover:bg-pink-100 rounded"
                    onClick={e => {e.preventDefault(); setLetter(msg); setShowLetterSuggestions(false);}}
                  >{msg}</button>
                ))}
                <button className="block mt-2 text-sm text-gray-400" onClick={() => setShowLetterSuggestions(false)}>Close</button>
              </div>
            )}
          </div>

          {/* Uploads */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600">Upload Photo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-gray-600"
              onChange={e => setPhoto(e.target.files[0])}
            />
            <label className="text-gray-600">Upload Voice</label>
            <input
              type="file"
              accept="audio/*"
              className="w-full text-gray-600"
              onChange={e => setVoice(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-2xl py-3 bg-gradient-to-r from-pink-400 to-rose-300 text-white font-bold text-lg shadow-lg hover:from-pink-500 hover:to-pink-400 transition"
          >Continue</button>
        </form>
      </div>
    </div>
  )
}
