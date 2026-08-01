import {
  CloudSun,
  Thermometer,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function WeatherWidget() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Weather
          </h2>

          <p className="text-gray-400">
            Bangalore
          </p>

        </div>

        <CloudSun
          size={42}
          className="text-yellow-400"
        />

      </div>

      <div className="space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-5">

          <div className="flex items-center gap-3">

            <Thermometer
              className="text-red-400"
            />

            <span className="text-gray-300">
              Temperature
            </span>

          </div>

          <span className="text-2xl font-bold">
            --
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-5">

          <div className="flex items-center gap-3">

            <MapPin
              className="text-blue-400"
            />

            <span className="text-gray-300">
              Location
            </span>

          </div>

          <span className="font-semibold">
            Bangalore
          </span>

        </div>

        <div className="rounded-2xl bg-blue-600/10 p-5">

          <div className="mb-3 flex items-center gap-3">

            <Sparkles
              className="text-blue-400"
            />

            <h3 className="font-semibold">
              Backend Ready
            </h3>

          </div>

          <p className="text-sm leading-6 text-gray-400">
            Live weather recommendations will be
            powered using OpenWeather API after the
            FastAPI backend is connected.
          </p>

        </div>

      </div>

    </div>
  );
}