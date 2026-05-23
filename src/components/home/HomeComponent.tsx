import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  LockKeyhole,
  Fingerprint,
  Sparkles,
  ArrowRight,
  Cpu,
  Globe,
  ScanFace,
  CheckCircle2,
  Zap,
  User,
} from "lucide-react";


function HomeComponent() {
    const features = [
      {
        icon: <Shield className="h-8 w-8" />,
        title: "JWT Authentication",
        description:
          "Secure access and refresh token based authentication using Spring Security and JWT.",
      },
      {
        icon: <LockKeyhole className="h-8 w-8" />,
        title: "OAuth2 Login",
        description:
          "Login securely using Google and GitHub OAuth2 authentication providers.",
      },
      {
        icon: <User className="h-8 w-8" />,
        title: "Role Based Access",
        description:
          "Different dashboard access and UI rendering based on user roles and permissions.",
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Full Stack Deployment",
        description:
          "Frontend deployed on Vercel and backend hosted on Render with secure API communication.",
      },
    ];

    const stats = [
      {
        value: "JWT",
        label: "Token Security",
      },
      {
        value: "OAuth2",
        label: "Social Login",
      },
      {
        value: "Spring Boot",
        label: "Backend API",
      },
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

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-400 mb-8 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Modern Full Stack Authentication System
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              NEXT GEN
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">
                AUTH SYSTEM
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              Modern authentication system with JWT security, 
              Google & GitHub OAuth login, protected routes, 
              and secure session handling.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button className="rounded-full bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-7 text-base font-bold shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Launch Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="
                  rounded-full
                  border-black/10 dark:border-white/20
                  bg-black/5 dark:bg-white/5
                  hover:bg-black/10 dark:hover:bg-white/10
                  px-8 py-7
                  backdrop-blur-xl
                "
              >
                Explore Features
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                  "JWT Authentication",
                  "Google & GitHub OAuth",
                  "Role Based Access",
                  "Protected Routes",
                ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Futuristic UI */}
          <div className="relative flex justify-center items-center">
            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Main Box */}
            <div
              className="
                relative w-full max-w-xl h-[520px]
                rounded-[40px]
                border border-black/10 dark:border-white/10
                bg-white/40 dark:bg-white/5
                backdrop-blur-3xl
                overflow-hidden
                shadow-[0_0_80px_rgba(0,255,255,0.15)]
                p-8
              "
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

              {/* Floating Cards */}
              <div className="absolute top-16 left-10 h-28 w-28 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl flex items-center justify-center rotate-12 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                <Fingerprint className="h-12 w-12 text-cyan-400" />
              </div>

              <div className="absolute top-32 right-10 h-36 w-36 rounded-full border border-violet-400/20 bg-violet-500/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                <Shield className="h-14 w-14 text-violet-400" />
              </div>

              <div className="absolute bottom-20 left-14 h-32 w-32 rounded-full border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                <Cpu className="h-12 w-12 text-cyan-300" />
              </div>

              <div
                className="
                  absolute bottom-10 right-14 h-24 w-24
                  rounded-2xl
                  border border-black/10 dark:border-white/10
                  bg-black/5 dark:bg-white/5
                  backdrop-blur-xl
                  flex items-center justify-center
                  rotate-12
                  shadow-[0_0_30px_rgba(255,255,255,0.08)]
                "
              >
                <LockKeyhole className="h-10 w-10 text-black dark:text-white" />
              </div>

              {/* Center Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20 animate-spin" />

                  <div className="absolute h-56 w-56 rounded-full border border-violet-500/20 animate-[spin_12s_linear_infinite_reverse]" />

                  <div className="h-40 w-40 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.45)]">
                    <ScanFace className="h-20 w-20 text-black" />
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-black/10 dark:border-white/10
                      bg-black/5 dark:bg-white/5
                      backdrop-blur-xl
                      p-4 text-center
                    "
                  >
                    <p className="text-cyan-400 text-2xl font-black">
                      {stat.value}
                    </p>

                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 container mx-auto px-6 py-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Advanced Security Features
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Powerful futuristic authentication tools designed for modern
            applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="
                group
                border border-black/10 dark:border-white/10
                bg-black/5 dark:bg-white/5
                backdrop-blur-2xl
                rounded-[30px]
                hover:border-cyan-400/40
                transition-all duration-500
                hover:-translate-y-3
                overflow-hidden
              "
            >
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-cyan-400/10 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-cyan-400 border border-cyan-400/20">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <Card
          className="
            rounded-[40px]
            border border-cyan-400/20
            bg-gradient-to-r
            from-cyan-500/10
            to-violet-500/10
            backdrop-blur-3xl
            overflow-hidden
          "
        >
          <CardContent className="p-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-400 text-sm mb-8">
              <Zap className="h-4 w-4" />
              The Future Starts Here
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              SECURE FULL STACK 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mt-3">
                AUTH PLATFORM
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built using React, Spring Boot, 
              JWT authentication, OAuth2 login, 
              and secure API communication for modern web applications.
            </p>

            <div className="mt-10 flex justify-center gap-5 flex-wrap">
              <Button className="rounded-full bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-7 text-base font-bold shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Start Building
              </Button>

              <Button
                variant="outline"
                className="
                  rounded-full
                  border-black/10 dark:border-white/20
                  bg-black/5 dark:bg-white/5
                  hover:bg-black/10 dark:hover:bg-white/10
                  px-10 py-7
                "
              >
                Explore Docs
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>


    </div>
  );

}

export default HomeComponent;