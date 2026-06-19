import Header from "./components/Header";
import PodcastList from "./pages/PodcastList";
import { PodcastProvider } from "./context/PodcastContext";

/**
 * App - The root component of the Podcast Explorer application. It provides
 * the podcast data context and renders the list page with filtering controls.
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  return (
    <PodcastProvider>
      <Header />
      <main>
        <PodcastList />
      </main>
    </PodcastProvider>
  );
}
