import HomePage from "./pages/HomePage";
import useStore from "./store";
import { type AppState } from "./store";

function App() {
  const currentView = useStore((state: AppState) => state.view);

  switch (currentView) {
    case "home":
      return <HomePage />;
    case "gamelist":
      return <h1>Games you can play. Maybe.</h1>;
  }
}

export default App;
