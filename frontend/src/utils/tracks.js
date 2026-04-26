export function groupTracks(tracks) {
  const groupedTracks = Object.groupBy(tracks, ({ cluster }) => cluster);
  return Object.values(groupedTracks);
}
