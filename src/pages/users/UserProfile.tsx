import React, { useState } from "react";

import {
  Mail,
  ShieldCheck,
  Calendar,
  Pencil,
  Save,
  User2,
  Camera,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import useAuth from "@/auth/store";

function UserProfile() {

const [isEditing, setIsEditing] = useState(false);
const user = useAuth(state => state.user);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      
      {/* Background Glow */}
      <div
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_top_left,#06b6d420,transparent_30%),radial-gradient(circle_at_bottom_right,#8b5cf615,transparent_35%)]
        dark:bg-[radial-gradient(circle_at_top_left,#00ffff15,transparent_30%),radial-gradient(circle_at_bottom_right,#8b5cf620,transparent_35%)]
      "
      />

      {/* Grid Background */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
        dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:70px_70px]
      "
      />

      <div className="relative z-10 container mx-auto px-6 py-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400 mb-5">
              <ShieldCheck className="h-4 w-4" />
              Secure User Profile
            </div>

            <h1 className="text-5xl font-black">
              User Profile
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Manage and update your futuristic authentication profile
              and account information.
            </p>
          </div>

          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="
              rounded-2xl
              bg-cyan-400
              hover:bg-cyan-300
              text-black
              font-bold
              h-14
              px-8
              shadow-[0_0_40px_rgba(34,211,238,0.35)]
            "
          >
            {isEditing ? (
              <>
                <Save className="mr-2 h-5 w-5" />
                Save Profile
              </>
            ) : (
              <>
                <Pencil className="mr-2 h-5 w-5" />
                Edit Profile
              </>
            )}
          </Button>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mt-14">
          
          {/* Left Profile Card */}
          <Card
            className="
              border border-black/10 dark:border-white/10
              bg-white/40 dark:bg-white/5
              backdrop-blur-3xl
              rounded-[32px]
              overflow-hidden
            "
          >
            <CardContent className="p-8">
              
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={user?.image}
                    alt="profile"
                    className="
                      h-40 w-40 rounded-full object-cover
                      border-4 border-cyan-400/30
                      shadow-[0_0_40px_rgba(34,211,238,0.35)]
                    "
                  />

                  {isEditing && (
                    <button
                      className="
                        absolute bottom-2 right-2
                        h-12 w-12 rounded-full
                        bg-cyan-400 text-black
                        flex items-center justify-center
                        shadow-lg
                      "
                    >
                      <Camera className="h-5 w-5" />
                    </button>
                  )}
                </div>

                <h2 className="mt-6 text-3xl font-black">
                  {user?.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {user?.email}
                </p>

                <div className="flex gap-3 mt-5">
                  <Badge className="bg-cyan-400/15 text-cyan-400 border border-cyan-400/20 px-4 py-1 rounded-full">
                    {user?.provider}
                  </Badge>

                  <Badge
                    className={`
                      px-4 py-1 rounded-full border
                      ${
                        user?.enabled
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-400/20"
                          : "bg-red-500/10 text-red-400 border-red-400/20"
                      }
                    `}
                  >
                    {user?.enabled ? "Active" : "Disabled"}
                  </Badge>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/5 dark:bg-white/5
                    p-5 text-center
                  "
                >
                  <p className="text-cyan-400 text-2xl font-black">
                    28
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Logins
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/10
                    bg-black/5 dark:bg-white/5
                    p-5 text-center
                  "
                >
                  <p className="text-violet-400 text-2xl font-black">
                    99%
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Security
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Information */}
          <Card
            className="
              lg:col-span-2
              border border-black/10 dark:border-white/10
              bg-white/40 dark:bg-white/5
              backdrop-blur-3xl
              rounded-[32px]
            "
          >
            <CardContent className="p-8">
              
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">
                    Personal Information
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    View and manage your account details.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-4">
                  <User2 className="h-8 w-8 text-cyan-400" />
                </div>
              </div>

              {/* Fields */}
              <div className="grid gap-6 md:grid-cols-2 mt-10">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>

                  {isEditing ? (
                    <Input
                      name="name"
                      value={user?.name}
                     // onChange={handleChange}
                      className="
                        h-14 rounded-2xl
                        border-black/10 dark:border-white/10
                        bg-black/5 dark:bg-white/5
                      "
                    />
                  ) : (
                    <div
                      className="
                        h-14 rounded-2xl
                        border border-black/10 dark:border-white/10
                        bg-black/5 dark:bg-white/5
                        flex items-center px-5
                      "
                    >
                      {user?.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>

                  {isEditing ? (
                    <Input
                      name="email"
                      value={user?.email}
                      //onChange={handleChange}
                      className="
                        h-14 rounded-2xl
                        border-black/10 dark:border-white/10
                        bg-black/5 dark:bg-white/5
                      "
                    />
                  ) : (
                    <div
                      className="
                        h-14 rounded-2xl
                        border border-black/10 dark:border-white/10
                        bg-black/5 dark:bg-white/5
                        flex items-center px-5
                      "
                    >
                      <Mail className="h-5 w-5 text-cyan-400 mr-3" />
                      {user?.email}
                    </div>
                  )}
                </div>

                {/* User ID */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    User ID
                  </label>

                  <div
                    className="
                      h-14 rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      flex items-center px-5
                    "
                  >
                    {user?.id}
                  </div>
                </div>

                {/* Provider */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Authentication Provider
                  </label>

                  <div
                    className="
                      h-14 rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      flex items-center px-5
                    "
                  >
                    {user?.provider}
                  </div>
                </div>

                {/* Created */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Created At
                  </label>

                  <div
                    className="
                      h-14 rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      flex items-center px-5
                    "
                  >
                    <Calendar className="h-5 w-5 text-cyan-400 mr-3" />
                    {user?.createdAt}
                  </div>
                </div>

                {/* Updated */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Updated At
                  </label>

                  <div
                    className="
                      h-14 rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      flex items-center px-5
                    "
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-3" />
                    {user?.updatedAt}
                  </div>
                </div>
              </div>

              {/* Bottom Save Button */}
              {isEditing && (
                <div className="flex justify-end mt-10">
                  <Button
                    className="
                      rounded-2xl
                      bg-cyan-400
                      hover:bg-cyan-300
                      text-black
                      font-bold
                      h-14
                      px-8
                    "
                  >
                    <Save className="mr-2 h-5 w-5" />
                    Save Changes
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default UserProfile