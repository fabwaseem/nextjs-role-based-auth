"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiUserPlus,
  FiUserX,
  FiSettings,
  FiShield,
} from "react-icons/fi";

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-1"
        >
          <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">
            Manage users and monitor system activity
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <FiUsers className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Users</p>
              <p className="text-2xl font-semibold text-white">20</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <FiUserPlus className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active Users</p>
              <p className="text-2xl font-semibold text-white">20</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <FiShield className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Admin Users</p>
              <p className="text-2xl font-semibold text-white">20</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
