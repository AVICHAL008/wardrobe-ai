import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        👋 Welcome {user?.name}
      </h1>

      <p className="mt-2 text-gray-400">
        Ready for today's outfit?
      </p>
    </div>
  );
}