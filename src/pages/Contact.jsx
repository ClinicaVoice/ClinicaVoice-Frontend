import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-softNavy">{t("contact_title")}</h1>
      {sent ? (
        <div className="bg-green-50 border border-green-200 p-4 rounded text-center text-green-700 font-medium">
          {t("contact_success")}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border shadow-sm">
          <label className="block mb-3">
            <div className="text-sm text-gray-600 mb-1">{t("contact_name")}</div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </label>

          <label className="block mb-3">
            <div className="text-sm text-gray-600 mb-1">{t("contact_email")}</div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </label>

          <label className="block mb-4">
            <div className="text-sm text-gray-600 mb-1">{t("contact_message")}</div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 border rounded h-32"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-mapleRed text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            {t("contact_send")}
          </button>
        </form>
      )}
    </div>
  );
}
