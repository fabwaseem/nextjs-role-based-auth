"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiUser, FiMail, FiShield, FiSettings } from "react-icons/fi";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-1"
        >
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {session?.user?.name}
          </h1>
          <p className="text-gray-400">
            Here's what's happening with your account today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-3"
        >
          <button
            onClick={() => signOut()}
            className="px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </motion.div>
      </div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid gap-6"
      >
        {/* Profile Info */}
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <FiUser className="w-5 h-5" />
            Profile Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/5 rounded-lg">
                <FiUser className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="text-white font-medium">
                  {session?.user?.name || "Not provided"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/5 rounded-lg">
                <FiMail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">{session?.user?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/5 rounded-lg">
                <FiShield className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-white font-medium">
                  {session?.user?.role || "USER"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
