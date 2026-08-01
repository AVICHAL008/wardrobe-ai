import Header from "./Header";
import Stats from "./Stats";
import WeatherWidget from "./WeatherWidget";
import OutfitSuggestionCard from "./OutfitSuggestionCard";
import ActivityFeed from "./ActivityFeed";
import QuickActions from "./QuickActions";
import RecentUploads from "./RecentUploads";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">

      <Header />

      <Stats />

      <div className="grid gap-6 lg:grid-cols-2">
        <WeatherWidget />
        <OutfitSuggestionCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <QuickActions />
        <ActivityFeed />
      </div>

      <RecentUploads />

    </div>
  );
}