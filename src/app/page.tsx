"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === "Enter" && url) {
      router.push(`/${url}`); // Directly append the input URl
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-md w-full rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md p-8 shadow-2xl"
      >
        <motion.div className="absolute -top-4 -right-4 animate-pulse">
          <Sparkles className="text-gray-500" size={28} />
        </motion.div>
        <h1 className="mb-4 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          ChatWithWEB
        </h1>
        <p className="mb-4 text-center text-gray-400">
          This tool lets you chat with or ask questions about any website&apos;s content using AI. Simply enter a URL and press Enter to get started!
        </p>
        <input
          type="text"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full mb-4 rounded-lg bg-gray-800 text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </motion.div>
    </main>
  );
}
