import useStore from "../store";
import { type Actions } from "../store";

function HomePage() {
  const setView = useStore((action: Actions) => action.setView);

  const loadGames = (formData: FormData) => {
    const steamId = formData.get("playerID");
    setView("gamelist");
  };
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 text-center font-sans">
      <div className="w-full max-w-sm space-y-8">
        <header className="space-y-4">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            LAN Party Hub
          </h1>

          <div className="space-y-2">
            <p className="text-xl font-medium text-violet-400">
              Find games you own. Play together.
            </p>
            <p className="text-md text-zinc-400">
              Connect Steam. Discover multiplayer. Coordinate LAN night.
            </p>
          </div>
        </header>

        <form action={loadGames} className="flex flex-col gap-3">
          <label htmlFor="playerID" className="sr-only">
            Steam ID
          </label>

          <input
            name="playerID"
            placeholder="Enter your Steam ID"
            className="w-full rounded-full bg-zinc-900 py-3 text-center text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-violet-700 py-3 font-bold text-white hover:bg-violet-600"
          >
            Let's Go!
          </button>
        </form>
      </div>
    </main>
  );
}

export default HomePage;
