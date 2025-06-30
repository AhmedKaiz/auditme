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
import React from 'react';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';

export default function AuditResult({ auditText, onDownload, jsonReady, onGoBack }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Soft Purple Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />

      {/* Header */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <button 
            onClick={onGoBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg">Back to Audit Form</span>
          </button>

          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Audit Complete
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your brutally honest Twitter analysis is ready. Here's what we discovered about your presence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Audit Results Card */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Audit Results</h2>
              <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full">
                <span className="text-purple-300 text-sm font-medium">AI Analysis Complete</span>
              </div>
            </div>
            
            {/* Audit Text Display */}
            <div className="bg-black/30 border border-gray-700/50 rounded-xl p-6 max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-gray-200 leading-relaxed font-mono text-sm">
                {auditText}
              </pre>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Download Your Context Profile</h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  Get your personalized JSON context file for enhanced ChatGPT interactions and future reference.
                </p>
              </div>

              {jsonReady ? (
                <button
                  onClick={onDownload}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <Download className="w-5 h-5" />
                  Download JSON Profile
                </button>
              ) : (
                <div className="inline-flex items-center gap-3 bg-gray-700/50 text-gray-400 font-bold py-4 px-8 rounded-xl cursor-not-allowed">
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  Preparing Download...
                </div>
              )}
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <h4 className="text-lg font-semibold text-white mb-2">Run Another Audit</h4>
              <p className="text-gray-400 text-sm mb-4">
                Want to analyze a different Twitter account or update your context?
              </p>
              <button
                onClick={onGoBack}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                Start New Audit →
              </button>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm border border-purple-500/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors">
              <h4 className="text-lg font-semibold text-white mb-2">Share Results</h4>
              <p className="text-gray-400 text-sm mb-4">
                Found the insights valuable? Share your experience with others.
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Share Feedback →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}