export default function Hero({ onEnter }) {
  return (
   <div className="text-container">
  <h1 className="glow-title">🎂 Happy Birthday Mom 💖</h1>
  <button onClick={onEnter}>Click for Your Surprise 🎁</button>
</div>
  );
}