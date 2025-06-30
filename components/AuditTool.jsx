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
import { useState } from 'react';
import AuditForm from './AuditForm';

export default function AuditTool() {
  const [context, setContext] = useState('');
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    // Simulate backend response
    setTimeout(async () => {
      alert('Audit complete! (This will show the result later)');
      const handle = document.getElementById('twitter-handle').value;
      const context = document.getElementById('business-context').value;

      const data = {
        handle: handle,
        context: context
      };

      try {
        const res = await fetch('https://abc123.ngrok.io/webhook/twitter-audit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (res.ok) {
          alert("Submitted successfully!");
        } else {
          alert("Error submitting form.");
        }
      } catch (err) {
        console.error(err);
        alert("Network error.");
      }

      setLoading(false);
    }, 2000);
  };

  return (
    <AuditForm
      context={context}
      setContext={setContext}
      handle={handle}
      setHandle={setHandle}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
}