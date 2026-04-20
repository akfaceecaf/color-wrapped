import "./App.css";
import Navbar from "./Navbar";
import mockData from "../data/mockData.json";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function groupTracks(tracks) {
  const groupedTracks = Object.groupBy(tracks, ({ cluster }) => cluster);
  return groupedTracks;
}

function ClusterList({ groups }) {
  const clusters = Object.entries(groups);
  return (
    <div className="cluster-list">
      {clusters.map(([cluster_id, tracks]) => (
        <div key={cluster_id}>
          <header className="cluster-header">Cluster {cluster_id}</header>
          <TrackGrid tracks={tracks} />
        </div>
      ))}
    </div>
  );
}

function TrackGrid({ tracks }) {
  const urls = tracks.map((track, i) => (
    <img src={track.image_url} key={i} className="track-image" />
  ));
  return <div className="track-grid">{urls}</div>;
}

function App() {
  const tracks = mockData;
  const groupedTracks = groupTracks(tracks);

  return (
    <div className="app">
      <Navbar />
      <ClusterList groups={groupedTracks} />
    </div>
  );
}

export default App;
