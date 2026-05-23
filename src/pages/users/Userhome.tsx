import { useState } from "react";
import {
  ShieldCheck,
  Users,
  Activity,
  Globe,
  TrendingUp,
  Cpu,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/AuthService";
import useAuth from "@/auth/store";
import toast from "react-hot-toast";
import type User from "@/models/User";

function Userhome() {

  const user = useAuth((state) => state.user);
  const isAdmin = user?.role === "ADMIN" || user?.role === "ROLE_ADMIN";
  const [user1, setUser1] = useState<User | null>(null)

const getUserData = async () => {

try {

  const user1 = await getCurrentUser(user?.email);
  setUser1(user1);
  toast.success("You are able to access secured API's");
  
} catch (error) {
  console.log(error)
  toast.error("Failed to fetch user data");
}

};

  const stats = [
    {
      title: "Total Users",
      value: "12,450",
      growth: "+12%",
      icon: <Users className="h-7 w-7 text-cyan-400" />,
    },
    {
      title: "Active Sessions",
      value: "2,134",
      growth: "+8%",
      icon: <Activity className="h-7 w-7 text-violet-400" />,
    },
    {
      title: "Security Score",
      value: "98%",
      growth: "+4%",
      icon: <ShieldCheck className="h-7 w-7 text-emerald-400" />,
    },
    {
      title: "Global Reach",
      value: "84 Countries",
      growth: "+18%",
      icon: <Globe className="h-7 w-7 text-pink-400" />,
    },
  ];

  const activities = [
    "New user registered successfully",
    "Biometric login enabled",
    "Security scan completed",
    "AI monitoring system updated",
  ];

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

      {/* Main */}
      <main className="relative z-10 container mx-auto px-6 py-10">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400 mb-5">
              <Sparkles className="h-4 w-4" />
              AI Powered Dashboard
            </div>

            <h1 className="text-5xl font-black leading-tight">
              Welcome Back,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
                    {user?.name?.split(" ")[0]} 👋
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Monitor authentication activities, security analytics, and
              futuristic platform statistics in real time.
            </p>
          </div>

            {
              isAdmin && (
                <Button
                  onClick={getUserData}
                  className="rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold h-14 px-8 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                >
                  Get Current User
                </Button>
              )
            }
          <p>
            {user1?.name}
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-14">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="
                border border-black/10 dark:border-white/10
                bg-white/40 dark:bg-white/5
                backdrop-blur-3xl
                rounded-[28px]
                overflow-hidden
                hover:-translate-y-2
                transition-all duration-500
                hover:border-cyan-400/30
              "
            >
              <CardContent className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>

                    <h2 className="text-4xl font-black mt-3">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="rounded-2xl bg-black/5 dark:bg-white/5 p-4 border border-black/10 dark:border-white/10">
                    {stat.icon}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <TrendingUp className="h-4 w-4" />
                  {stat.growth} this month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          
          {/* Security Status */}
          <Card
            className="
              lg:col-span-2
              border border-black/10 dark:border-white/10
              bg-white/40 dark:bg-white/5
              backdrop-blur-3xl
              rounded-[30px]
            "
          >
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black">
                    Security Overview
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Real-time authentication security analytics.
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-4">
                  <Cpu className="h-8 w-8 text-cyan-400" />
                </div>
              </div>

              {/* Dummy Graph */}
              <div className="mt-10 h-72 rounded-[28px] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-black/10 dark:border-white/10 relative overflow-hidden">
                
                <div className="absolute inset-0 flex items-end justify-around p-6">
                  {[40, 70, 55, 90, 75, 95, 85].map((height, index) => (
                    <div
                      key={index}
                      className="w-10 rounded-t-2xl bg-gradient-to-t from-cyan-400 to-violet-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity */}
          <Card
            className="
              border border-black/10 dark:border-white/10
              bg-white/40 dark:bg-white/5
              backdrop-blur-3xl
              rounded-[30px]
            "
          >
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black">
                  Recent Activity
                </h2>

                <ArrowUpRight className="text-cyan-400" />
              </div>

              <div className="mt-8 space-y-5">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      p-4
                    "
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                      <div>
                        <p className="text-sm font-medium">
                          {activity}
                        </p>

                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          Just now
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default Userhome
