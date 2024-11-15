import React from 'react'

function Loading() {
  return (
    <div style={styles.skeletonContainer}>
      <div style={styles.loader}></div>
      {/* Sidebar skeleton */}
      <div style={styles.skeletonSidebar}>
        {[...Array(1)].map((_, index) => (
          <div key={index} style={styles.skeletonDialog}></div>
        ))}
      </div>

      {/* Chat window skeleton */}
      <div style={styles.skeletonChat}>
        <div style={styles.skeletonChatHeader}></div>

        {/* Messages skeleton */}
        <div style={styles.skeletonMessageContainer}>
          {[...Array(1)].map((_, index) => (
            <div key={index} style={styles.skeletonMessage}></div>
          ))}
        </div>

        {/* Input bar skeleton */}
        <div style={styles.skeletonInputBar}></div>
      </div>
    </div>
  )
}

export default Loading

const styles = {
  skeletonContainer: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    padding: '10px',
    position: 'relative',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '5px solid #ddd',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  skeletonSidebar: {
    width: '200px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  skeletonDialog: {
    height: '50px',
    backgroundColor: '#ddd',
    borderRadius: '8px',
    animation: 'shimmer 1.5s infinite',
    background: 'linear-gradient(90deg, #ddd 25%, #e0e0e0 50%, #ddd 75%)',
    backgroundSize: '400% 100%',
  },
  skeletonChat: {
    flex: 1,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  skeletonChatHeader: {
    height: '40px',
    backgroundColor: '#ddd',
    borderRadius: '8px',
    animation: 'shimmer 1.5s infinite',
    background: 'linear-gradient(90deg, #ddd 25%, #e0e0e0 50%, #ddd 75%)',
    backgroundSize: '400% 100%',
  },
  skeletonMessageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  skeletonMessage: {
    height: '20px',
    backgroundColor: '#ddd',
    borderRadius: '8px',
    animation: 'shimmer 1.5s infinite',
    background: 'linear-gradient(90deg, #ddd 25%, #e0e0e0 50%, #ddd 75%)',
    backgroundSize: '400% 100%',
  },
  skeletonInputBar: {
    height: '40px',
    backgroundColor: '#ddd',
    borderRadius: '8px',
    animation: 'shimmer 1.5s infinite',
    background: 'linear-gradient(90deg, #ddd 25%, #e0e0e0 50%, #ddd 75%)',
    backgroundSize: '400% 100%',
  },
};

// Inject keyframe animations directly into the document's style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);