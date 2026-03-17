"use client";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

type Comment = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

type ToastType = {
  show: boolean;
  message: string;
  type: "success" | "error" | "info";
};

export default function Comments() {
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [toast, setToast] = useState<ToastType>({
    show: false,
    message: "",
    type: "info",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchComments();
  }, []);

  const showToast = (message: string, type: ToastType["type"] = "info") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "info" }),
      3000,
    );
  };

  const fetchComments = async () => {
    const comments = await GetAllComments();
    setAllComments(comments);
  };

  const handleSubmit = async () => {
    const messageElement = document.getElementById(
      "message",
    ) as HTMLTextAreaElement;
    const senderElement = document.getElementById(
      "sender"
    ) as HTMLInputElement;

    if (isSubmitting) return; // Prevent double submit

    setIsSubmitting(true);

    // Validasi
    if (!senderElement.value.trim()) {
      showToast("Name is required", "error");
      setIsSubmitting(false);
      return;
    }

    if (!messageElement.value.trim()) {
      showToast("Message is required", "error");
      setIsSubmitting(false);
      return;
    }

    if (messageElement.value.length > 500) {
      showToast("Message is too long (max 500 characters)", "error");
      setIsSubmitting(false);
      return;
    }

    // Tambah komentar
    const error = await AddComment(senderElement.value, messageElement.value);

    if (!error) {
      showToast("Comment added successfully! 🎉", "success");
      await fetchComments();

      // Clear input
      messageElement.value = "";
      senderElement.value = "";
    } else {
      showToast("Failed to add comment", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      {/* Custom Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl animate-slide-down
          ${toast.type === "success" ? "bg-green-500/20 border-green-500/50 text-green-400" : ""}
          ${toast.type === "error" ? "bg-red-500/20 border-red-500/50 text-red-400" : ""}
          ${toast.type === "info" ? "bg-blue-500/20 border-blue-500/50 text-blue-400" : ""}
        `}
        >
          <div className="flex items-center gap-3">
            {toast.type === "success" && <span>✅</span>}
            {toast.type === "error" && <span>❌</span>}
            {toast.type === "info" && <span>ℹ️</span>}
            <p className="font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      {/* Rest of your component... */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block">
          Comments
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Comments List */}
      <div className="space-y-4 mb-12">
        {allComments.length === 0 ? (
          <div className="text-center py-12 bg-gray-800/30 rounded-2xl border border-gray-700/50">
            <p className="text-gray-400">
              No comments yet. Be the first to share! 💬
            </p>
          </div>
        ) : (
          allComments.map((item, index) => (
            <div
              key={item.id}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10">
                {ShowComment(item)}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Comment Form */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10" />

        <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold text-center mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Share Your Thoughts
          </h3>

          <div className="space-y-4">
            {/* Name Input dengan auto-fill dari localStorage */}
            <div className="group">
              <div className="relative">
                <input
                  type="text"
                  id="sender"
                  name="Sender"
                  placeholder=" "
                  defaultValue={
                    typeof window !== "undefined"
                      ? localStorage.getItem("commentName") || ""
                      : ""
                  }
                  onChange={(e) =>
                    localStorage.setItem("commentName", e.target.value)
                  }
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all duration-300 peer"
                />
                <label
                  htmlFor="sender"
                  className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-purple-400 peer-focus:bg-gray-900"
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
                  maxLength={500}
                  className="w-full px-6 py-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none peer"
                />
                <label
                  htmlFor="message"
                  className="absolute left-6 -top-3 bg-gray-900 px-2 text-sm text-gray-400 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-6 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm peer-focus:text-purple-400 peer-focus:bg-gray-900"
                >
                  Your Message
                </label>
              </div>
              {/* Character counter */}
              <div className="text-right mt-1 text-xs text-gray-500">
                <span id="message-counter">0/500</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                className={`group relative px-8 py-4 bg-linear-to-r from-purple-500 to-purple-600 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 active:scale-95 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Add New Comment
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-right mt-4">
            <span className="font-mono">
              Share your thoughts with the others ✨
            </span>
          </p>
        </div>
      </div>

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
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideInRight 0.3s ease-out forwards;
        }

        @keyframes slideDown {
        from {
          opacity: 0;
          transform: translate(0, -20px);
        }
        to {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
      .animate-slide-down {
        animation: slideDown 0.3s ease-out forwards;
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
    console.log(error);
    console.error("Error adding comment:", error);
    return null;
  }

  console.log("Comment added successfully:", data);
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
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
          {data.name ? data.name.charAt(0).toUpperCase() : "A"}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-transparent bg-linear-to-r from-purple-400 to-purple-400 bg-clip-text">
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

        <svg
          className="w-8 h-8 text-gray-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 6h-4v-4h4v4zm8 0h-4v-4h4v4z" />
        </svg>
      </div>

      <div className="relative">
        <svg
          className="absolute -top-2 -left-2 w-6 h-6 text-purple-500/20 group-hover:text-purple-500/30 transition-colors duration-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4z" />
        </svg>

        <p className="text-gray-300 pl-6 pr-4 py-2 leading-relaxed border-l-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
          {data.message}
          <span className="text-purple-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ✦
          </span>
        </p>
      </div>

      <div className="mt-4 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent group-hover:via-purple-500 transition-all duration-300" />
    </div>
  );
}
