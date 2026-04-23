import "./ClusterList.css";
import TrackGrid from "./TrackGrid";

export default function ClusterList({ groups }) {
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
