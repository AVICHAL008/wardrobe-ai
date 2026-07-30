import Header from "./Header";
import Stats from "./Stats";
import WeatherWidget from "./WeatherWidget";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <Header />
      <Stats />
      <WeatherWidget />
    </div>
  );
}