import HomePage from "./pages/HomePage";
import GameList from "./pages/GameList";

import useStore from "./store";
import { type AppState } from "./store";

function App() {
  const currentView = useStore((state: AppState) => state.view);

  switch (currentView) {
    case "home":
      return <HomePage />;
    case "gamelist":
      return <GameList />;
  }
}

export default App;
