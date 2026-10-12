import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const tools = [
  { id: 1, name: "AI Chat Master", cat: "AI", icon: "🤖", desc: "GPT-Style Chat" },
  { id: 2, name: "Image Generator", cat: "AI", icon: "🎨", desc: "Text to Image AI" },
  { id: 3, name: "Doc Summarizer", cat: "AI", icon: "📄", desc: "PDF to Summary" },
  { id: 4, name: "Voice to Text", cat: "AI", icon: "🎙️", desc: "Audio Transcription" },
  { id: 5, name: "Translator Hub", cat: "AI", icon: "🌐", desc: "100+ Languages" },
  { id: 6, name: "AI Interviewer", cat: "AI", icon: "💼", desc: "Mock Interviews" },
  { id: 7, name: "Email Writer", cat: "AI", icon: "✉️", desc: "Pro Emails" },
  { id: 8, name: "Health AI", cat: "AI", icon: "❤️", desc: "Diet & Workout" },
  { id: 9, name: "Code Convergence", cat: "Dev", icon: "💻", desc: "30+ Lang Code" },
  { id: 10, name: "Web Scraper", cat: "Dev", icon: "🕷️", desc: "Scrape Any Site" },
  { id: 11, name: "Video Maker", cat: "Media", icon: "🎬", desc: "Auto Video Editor" },
  { id: 12, name: "Music AI", cat: "Media", icon: "🎵", desc: "Beats Generator" },
  { id: 13, name: "Logo Maker", cat: "Media", icon: "✨", desc: "Brand Logo" },
  { id: 14, name: "Meme Factory", cat: "Media", icon: "😂", desc: "Viral Memes" },
  { id: 15, name: "Color Palette", cat: "Media", icon: "🎨", desc: "AI Color Match" },
  { id: 16, name: "Resume Builder", cat: "Productivity", icon: "📝", desc: "ATS Resume" },
  { id: 17, name: "Task Convergence", cat: "Productivity", icon: "✅", desc: "Smart Todo" },
  { id: 18, name: "PDF Toolkit", cat: "Productivity", icon: "📚", desc: "Merge/Split/Compress" },
  { id: 19, name: "Note Sync", cat: "Productivity", icon: "📒", desc: "Cloud Notes" },
  { id: 20, name: "Study Helper", cat: "Productivity", icon: "📖", desc: "Quiz & Flashcards" },
  { id: 21, name: "QR Generator", cat: "Utility", icon: "🔳", desc: "Custom QR" },
  { id: 22, name: "Password Vault", cat: "Utility", icon: "🔐", desc: "Secure Vault" },
  { id: 23, name: "URL Shortener", cat: "Utility", icon: "🔗", desc: "Short + Analytics" },
  { id: 24, name: "Weather AI", cat: "Utility", icon: "⛅", desc: "Forecast" },
  { id: 25, name: "Habit Tracker", cat: "Utility", icon: "📈", desc: "Streak Builder" },
  { id: 26, name: "Expense Tracker", cat: "Utility", icon: "💸", desc: "Kharcha Track" },
  { id: 27, name: "Crypto Watch", cat: "Utility", icon: "₿", desc: "Crypto Tracker" },
];

function App() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: 'white', fontFamily: 'sans-serif', padding: '20px' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&display=swap');`}</style>
      
      <header style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: '3rem', background: 'linear-gradient(90deg,#8b5cf6,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CONVERGENCE MASTER 2026</h1>
        <p style={{ opacity: 0.7, marginTop: 10 }}>One Platform. 27 Superpowers. Built for