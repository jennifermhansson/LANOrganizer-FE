import useStore from "../store";
import { type Actions } from "../store";

const MOCK_DATA = {
  players: [
    {
      steamId: "76561198000000001",
      displayName: "PlayerOne",
      avatarUrl:
        "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
    },
    {
      steamId: "76561198000000002",
      displayName: "PlayerTwo",
      avatarUrl:
        "https://avatars.steamstatic.com/c5d56249ee5d28a07db4ac9f7f60af961fab5426_full.jpg",
    },
  ],
  commonGames: [
    {
      appId: 730,
      name: "Counter-Strike 2",
      headerImage:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      isMultiplayer: true,
    },
    {
      appId: 105600,
      name: "Terraria",
      headerImage:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
      isMultiplayer: true,
    },
    {
      appId: 570,
      name: "Dota 2",
      headerImage:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
      isMultiplayer: true,
    },
  ],
};

function GameList() {
  const setView = useStore((action: Actions) => action.setView);

  return (
    <main className="min-h-screen bg-zinc-950 p-8 font-sans text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header Section */}
        <header className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            We found{" "}
            <span className="text-violet-400">
              {MOCK_DATA.commonGames.length} Games
            </span>
          </h1>

          {/* Player Avatars */}
          <div className="flex -space-x-3">
            {MOCK_DATA.players.map((player) => (
              <img
                key={player.steamId}
                src={player.avatarUrl}
                alt={player.displayName}
                title={player.displayName}
                className="h-12 w-12 rounded-full border-4 border-zinc-950 bg-zinc-800"
              />
            ))}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-950 bg-zinc-800 text-xs font-bold text-zinc-400">
              +
            </div>
          </div>
        </header>

        {/* Game Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {MOCK_DATA.commonGames.map((game) => (
            <div
              key={game.appId}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition hover:scale-105 hover:shadow-violet-900/20"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={game.headerImage}
                  alt={game.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:brightness-110"
                />
              </div>
              <div className="p-4">
                <h3 className="truncate text-lg font-bold text-white">
                  {game.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-400">
                    Multiplayer
                  </span>
                  <button className="rounded-full bg-violet-700 px-4 py-1 text-sm font-bold text-white hover:bg-violet-600">
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Back Button */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setView("home")}
            className="text-sm font-medium text-zinc-500 hover:text-white transition-colors"
          >
            ← Scan another lobby
          </button>
        </div>
      </div>
    </main>
  );
}

export default GameList;
