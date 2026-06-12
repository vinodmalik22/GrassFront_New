import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import './RadialOrbitalTimeline.css';

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, setViewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(270); // Discovery & Planning starts at top
  const [autoRotate, setAutoRotate] = useState(false);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);

  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      // Do not restart auto-rotate per user preference
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    // Calculate static angle (no rotationAngle applied here)
    const angle = (index / total) * 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    // To calculate zIndex, we must use the absolute angle (including rotation)
    const absoluteAngle = (angle + rotationAngle) % 360;
    const absoluteRadian = (absoluteAngle * Math.PI) / 180;
    const zIndex = Math.round(100 + 50 * Math.cos(absoluteRadian));
    const opacity = 1;

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <div
      className="rot-container"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="rot-wrapper">
        <div
          className="rot-orbit"
          ref={orbitRef}
          style={{
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px) rotate(${rotationAngle}deg)`,
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Center glowing core donut */}
          <div className="rot-center-core" style={{ transform: `translate(-50%, -50%) rotate(${-rotationAngle}deg)` }}>
            <div className="rot-core-inner"></div>
          </div>

          {/* SVG Orbit Path with exact gaps and dots */}
          <svg
            className="rot-orbit-svg"
            width="442"
            height="442"
            viewBox="0 0 442 442"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%)`, // rotates naturally with the container
              zIndex: 0,
              pointerEvents: 'none'
            }}
          >
            <circle
              cx="221"
              cy="221"
              r="220"
              fill="none"
              stroke="rgba(13, 15, 26, 0.08)"
              strokeWidth="1.5"
              strokeDasharray="186.46 90"
              strokeDashoffset="231.46"
            />
            {timelineData.map((_, index) => {
              const angle = (index / timelineData.length) * 360;
              const offsetDeg = 11.72; // ~45px along the circumference

              const rad1 = ((angle - offsetDeg) * Math.PI) / 180;
              const cx1 = 221 + 220 * Math.cos(rad1);
              const cy1 = 221 + 220 * Math.sin(rad1);

              const rad2 = ((angle + offsetDeg) * Math.PI) / 180;
              const cx2 = 221 + 220 * Math.cos(rad2);
              const cy2 = 221 + 220 * Math.sin(rad2);

              return (
                <g key={`orbit-dots-${index}`}>
                  <circle cx={cx1} cy={cy1} r="3.5" fill="#cbd5e1" />
                  <circle cx={cx2} cy={cy2} r="3.5" fill="#cbd5e1" />
                </g>
              );
            })}
          </svg>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            const ICON_COLORS = [
              "#3b82f6", // Blue
              "#8b5cf6", // Purple
              "#10b981", // Emerald
              "#f59e0b", // Amber
              "#ec4899", // Pink
            ];
            const nodeColor = ICON_COLORS[index % ICON_COLORS.length];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotate(${-rotationAngle}deg)`,
              transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.7s, opacity 0.7s',
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="rot-node"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy Pulse Background */}
                <div
                  className={`rot-node-energy ${isPulsing ? "rot-pulsing" : ""}`}
                  style={{
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                {/* Node Icon Circle */}
                <div
                  className={`
                  rot-node-circle 
                  ${isExpanded ? "expanded" : isRelated ? "related" : "default"}
                `}
                  style={{
                    color: "#ffffff",
                    borderColor: nodeColor,
                    backgroundColor: nodeColor,
                    boxShadow: isExpanded ? `0 0 30px ${nodeColor}80` : `0 0 20px ${nodeColor}50`,
                  }}
                >
                  <Icon size={18} />
                </div>

                {/* Node Label */}
                <div className={`rot-node-label ${isExpanded ? "expanded" : ""}`}>
                  {item.title}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <div className="rot-card">
                    <div className="rot-card-line"></div>
                    <div className="rot-card-header">
                      <div className="rot-card-meta">
                        <span className={`rot-badge ${item.status}`}>
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                              ? "IN PROGRESS"
                              : "PENDING"}
                        </span>
                        <span className="rot-date">{item.date}</span>
                      </div>
                      <h3 className="rot-card-title">{item.title}</h3>
                    </div>
                    <div className="rot-card-content">
                      <p>{item.content}</p>

                      <div className="rot-card-energy">
                        <div className="rot-energy-header">
                          <span className="rot-energy-label">
                            <Zap size={10} className="rot-zap-icon" />
                            Energy Level
                          </span>
                          <span className="rot-energy-value">{item.energy}%</span>
                        </div>
                        <div className="rot-energy-bar-bg">
                          <div
                            className="rot-energy-bar-fill"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="rot-card-related">
                          <div className="rot-related-header">
                            <Link size={10} className="rot-link-icon" />
                            <h4>Connected Nodes</h4>
                          </div>
                          <div className="rot-related-buttons">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <button
                                  key={relatedId}
                                  className="rot-related-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={10} className="rot-arrow-icon" />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
