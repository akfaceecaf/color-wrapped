import "./TrackGrid.css";

export default function TrackGrid({ tracks }) {
  const urls = tracks.map((track, i) => (
    <img src={track.image_url} key={i} className="track-image" />
  ));
  return <div className="track-grid">{urls}</div>;
}
