import "./App.css";
import Navbar from "./Navbar";
import mockData from "../data/mockData.json";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function TrackGrid({ tracks }) {
  const urls = tracks.map((track, i) => <img src={track.image_url} key={i} />);
  return <div className="track-grid">{urls}</div>;
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <TrackGrid tracks={mockData} />
    </div>
  );
}

export default App;
