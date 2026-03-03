import { useState, useEffect } from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default function Gallery() {
  const images = [pic1, pic2, pic3];
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery">
      <h2>📸 Beautiful Memories</h2>

      <div className="slideshow">
        <img src={images[current]} alt="memory" />
      </div>
    </div>
  );
}