import "./Tooltip.css";

export default function Tooltip({ track }) {
  return (
    <div className={`hover-tooltip${track ? " hover-tooltip--visible" : ""}`}>
      {track && (
        <>
          <span className="hover-tooltip-track">{track.track_name}</span>
          <span> - </span>
          <span className="hover-tooltip-artist">{track.artist}</span>
        </>
      )}
    </div>
  );
}
