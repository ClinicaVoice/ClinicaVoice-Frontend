import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const loggedIn = !!sessionStorage.getItem("clinica_token");

  function handleLogout() {
    sessionStorage.removeItem("clinica_token");
    navigate("/");
  }

  return (
    <header className="bg-softNavy text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🔹 Logo + Title */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            {/* ✅ Direct path logo (guaranteed to work on Windows + Vite) */}
            <img
              src="/src/assets/logo.jpeg"
              alt="ClinicaVoice Logo"
              className="w-10 h-10 object-contain rounded-full bg-white p-1 shadow-sm hover:shadow-lg transition-all duration-300"
            />
            <span className="text-xl font-semibold tracking-wide">
              ClinicaVoice
            </span>
          </Link>
        </div>

        {/* 🔹 Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-seaGreen transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-seaGreen transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-seaGreen transition-colors duration-300"
          >
            Contact
          </Link>

          {loggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg bg-mapleRed hover:bg-red-700 transition-colors duration-300 text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-softNavy transition-all duration-300"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-softNavy transition-all duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-mapleRed hover:bg-red-700 transition-all duration-300 text-white"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
