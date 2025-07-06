/*
Project: Brutal Twitter Audit Tool

Description:
This is the front-end for a solopreneur-focused AI tool that performs a brutal audit of a user's Twitter profile. The user enters:
- Their business context (in a large text area)
- Their Twitter handle (in a short input field)

The UI should be minimal, modern, and reactive. After submitting, the backend will process the data and return:
- A brutally honest audit (as readable text)
- A downloadable JSON file containing a ChatGPT-compatible context profile

Design Requirements:
- Vertical stack layout, centered on the page
- Large bold header ("Get a Brutal Twitter Audit")
- Large multiline text input for the interview/context questions (font-size: 24px)
- Single-line input for Twitter handle (prefixed with "@", large font)
- A “Start Audit” button (disabled until both inputs are filled)
- While waiting: show a loading spinner or change the button state to "Running Audit..."
- When results are ready:
  - Show audit text in a scrollable box
  - Show a "Download JSON" button (only after results are available)
- Error message if API fails or Twitter handle is invalid
- Fully responsive (mobile + desktop)
- Use React functional components with hooks
- Component must manage states: inputs, loading, audit result, download ready, error

Goal:
Build the full front-end React component(s) in a clean, modular way with all UI states and transitions handled.

*/
import { FaGhost } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';

export default function AuditForm({
  context,
  setContext,
  handle,
  setHandle,
  onSubmit,
  loading,
}) {
  const isFormValid = context.trim() && handle.trim();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>

      <div className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">

            <h1
            className="text-7xl md:text-8xl font-black bg-clip-text text-transparent leading-tight"
            style={{
                backgroundImage: 'linear-gradient(to right, #5e1cc4, #c453f3)'
            }}
            >
            Audit Me
            </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Uncover the invisible patterns in your Twitter presence. Get brutally honest insights that most won't tell you.
            </p>
          </div>

          {/* Main Form */}
          <div className="space-y-8">
            {/* Business Context Input */}
            <div>
              <label htmlFor="business-context" className="block text-lg font-semibold text-gray-200 mb-4">
                Tell me about your business and goals
              </label>
              <textarea
                id="business-context"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="What's your business? Who's your target audience? What are you trying to achieve on Twitter? Be specific..."
                className="w-full h-48 px-6 py-4 text-2xl bg-gray-900/50 border-2 border-gray-700 rounded-2xl focus:border-purple-500 focus:ring-0 resize-none placeholder-gray-500 transition-all duration-300 backdrop-blur-sm text-white"
                disabled={loading}
              />
            </div>

            {/* Twitter Handle Input */}
            <div>
              <label htmlFor="twitter-handle" className="block text-lg font-semibold text-gray-200 mb-4">
                Your Twitter handle
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl text-purple-400 font-medium">
                  @
                </span>
                <input
                  id="twitter-handle"
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="yourusername"
                  className="w-full pl-16 pr-6 py-4 text-3xl bg-gray-900/50 border-2 border-gray-700 rounded-2xl focus:border-purple-500 focus:ring-0 placeholder-gray-500 transition-all duration-300 text-white"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={onSubmit}
                disabled={!isFormValid || loading}
                className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl hover:from-purple-500 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all duration-300 min-w-[220px] flex items-center justify-center mx-auto shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                {loading ? (
                  <>
                    <ImSpinner2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Audit Me'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}