"use client";
"use client";
import React from "react";

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-blue-600 to-indigo-900 animate-pulse opacity-10 pointer-events-none" />
  );
}
