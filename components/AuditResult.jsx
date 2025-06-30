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

'use client';
export default function AuditResult({ auditText, onDownload, jsonReady }) {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 text-white space-y-8">
      <div className="bg-gray-900/60 p-8 rounded-2xl h-96 overflow-y-auto">
        <pre className="whitespace-pre-wrap text-lg">{auditText}</pre>
      </div>

      <button
        disabled={!jsonReady}
        onClick={onDownload}
        className="px-8 py-3 rounded-xl font-bold bg-purple-700 disabled:bg-gray-700"
      >
        Download JSON
      </button>
    </section>
  );
}