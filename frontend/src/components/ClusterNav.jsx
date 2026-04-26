import "./ClusterNav.css";

export default function ClusterNav({
  cluster,
  nClusters,
  showColor,
  onClickNav,
  onToggleColor,
}) {
  return (
    <div className="cluster-nav">
      <button
        onClick={() => onClickNav((cluster - 1 + nClusters) % nClusters)}
        className="cluster-nav-button"
      >
        <img
          src="/skip.svg"
          alt="Prev"
          className="skip-button skip-button--left"
        />
      </button>
      <div className="cluster-nav-center">
        <button onClick={() => onToggleColor()} className="cluster-nav-toggle">
          <div
            style={{
              position: "relative",
              width: 36,
              height: 36,
            }}
            className="cluster-nav-toggle-icon"
          >
            <svg
              style={{
                position: "absolute",
                inset: 0,
                opacity: showColor ? 1 : 0,
                transition: "opacity 0.2s ease",
              }}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <defs>
                <mask id="circle-mask">
                  <rect width="36" height="36" fill="white" />
                  <circle cx="18" cy="18" r="9" fill="black" />
                </mask>
              </defs>
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                fill="currentColor"
                mask="url(#circle-mask)"
              />
            </svg>
            <svg
              style={{
                position: "absolute",
                inset: 0,
                opacity: showColor ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <rect
                x="0"
                y="0"
                width="36"
                height="36"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle cx="18" cy="18" r="9" fill="currentColor" />
            </svg>
          </div>
        </button>
        <span className="cluster-nav-count">
          {cluster + 1} / {nClusters}
        </span>
      </div>
      <button
        onClick={() => onClickNav((cluster + 1) % nClusters)}
        className="cluster-nav-button"
      >
        <img
          src="/skip.svg"
          alt="Next"
          className="skip-button skip-button--right"
        />
      </button>
    </div>
  );
}
