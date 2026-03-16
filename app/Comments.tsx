"use client";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function Comments() {
  const [allComments, setAllComments] = useState<Comment[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const comments = await GetAllComments();
    setAllComments(comments);
  };

  const handleSubmit = async () => {
    const messageElement = document.getElementById(
      "message",
    ) as HTMLTextAreaElement;
    const senderElement = document.getElementById("sender") as HTMLInputElement;

    if (!messageElement.value.trim()) return; // Validasi sederhana

    // Tambah komentar
    await AddComment(senderElement.value, messageElement.value);

    // Refresh data komentar
    await fetchComments();

    // Clear input
    messageElement.value = "";
    if (senderElement) senderElement.value = "";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
          Comments
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Comments List */}
      <div className="space-y-4 mb-12">
        {allComments.map((item, index) => (
          <div
            key={item.id}
            className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{
              animation: `slideIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
              {ShowComment(item)}
            </div>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <div className="relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />

        <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold text-center mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Share Your Thoughts
          </h3>

          <div className="space-y-4">
            {/* Name Input */}
            <div className="group">
              <div className="relative">
                <input
                  type="text"
                  id="sender"
                  name="Sender"
                  placeholder=" "
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 peer"
                />
                <label
                  htmlFor="sender"
                  className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-900"
                >
                  Your Name
                </label>
              </div>
            </div>

            {/* Message Input */}
            <div className="group">
              <div className="relative">
                <textarea
                  id="message"
                  name="Message"
                  placeholder=" "
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none peer"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:bg-gray-900"
                >
                  Your Message
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 overflow-hidden"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Button Content */}
                <span className="relative flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add New Comment
                </span>
              </button>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-sm text-gray-500 text-right mt-4">
            <span className="font-mono">
              Share your thoughts with the community ✨
            </span>
          </p>
        </div>
      </div>

      {/* Global Styles for Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export async function AddComment(name: string, message: string) {
  const { data, error } = await supabase.from("comments").insert([
    {
      name: name,
      message: message,
    },
  ]);

  if (error) {
    console.error("Error adding comment:", error);
    return null;
  }

  return data;
}

export async function GetAllComments(): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Comment[];
}

function ShowComment(data: Comment) {
  return (
    <div className="p-6 group cursor-default">
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar dengan inisial */}
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
          {data.name ? data.name.charAt(0).toUpperCase() : "A"}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">
            {data.name || "Anonymous"}
          </h3>
          <p className="text-xs text-gray-500">
            {new Date(data.created_at).toLocaleString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>

        {/* Decorative Quote Icon */}
        <svg
          className="w-8 h-8 text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 6h-4v-4h4v4zm8 0h-4v-4h4v4z" />
        </svg>
      </div>

      {/* Message Content */}
      <div className="relative">
        {/* Decorative Quote Mark */}
        <svg
          className="absolute -top-2 -left-2 w-6 h-6 text-blue-500/20 group-hover:text-blue-500/30 transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4z" />
        </svg>

        <p className="text-gray-300 pl-6 pr-4 py-2 leading-relaxed border-l-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
          {data.message}
          <span className="text-blue-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ✦
          </span>
        </p>
      </div>

      {/* Decorative Bottom Border */}
      <div className="mt-4 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent group-hover:via-blue-500 transition-all duration-300" />
    </div>
  );
}
