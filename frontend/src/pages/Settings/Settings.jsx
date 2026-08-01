import {
  User,
  Bell,
  Moon,
  Shield,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function Settings() {
  const sections = [
    {
      title: "Profile",
      description: "Manage your personal information",
      icon: User,
    },
    {
      title: "Notifications",
      description: "Configure reminder preferences",
      icon: Bell,
    },
    {
      title: "Appearance",
      description: "Dark mode and theme",
      icon: Moon,
    },
    {
      title: "Privacy & Security",
      description: "Password and account security",
      icon: Shield,
    },
    {
      title: "About",
      description: "Wardrobe AI Version 1.0",
      icon: Info,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your account preferences.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <div className="mb-8 flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold">
            A
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Avichal Bhattacharjee
            </h2>

            <p className="text-gray-400">
              AI & Data Science Student
            </p>

            <span className="mt-2 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
              Premium User
            </span>
          </div>

        </div>

        <div className="space-y-4">

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <button
                key={section.title}
                className="flex w-full items-center justify-between rounded-2xl bg-slate-950 p-5 transition hover:border hover:border-blue-500"
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-zinc-800 p-3">
                    <Icon size={22} />
                  </div>

                  <div className="text-left">

                    <h3 className="font-semibold">
                      {section.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {section.description}
                    </p>

                  </div>

                </div>

                <ChevronRight />

              </button>
            );
          })}

        </div>

        <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 text-lg font-semibold transition hover:bg-red-700">

          <LogOut size={22} />

          Logout

        </button>

      </div>
    </div>
  );
}