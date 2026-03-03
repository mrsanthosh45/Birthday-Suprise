import { useState } from "react";
import { motion } from "framer-motion";

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="gift-section">
      {!opened ? (
        <motion.div
          className="gift-box"
          whileHover={{ rotate: 5, scale: 1.1 }}
          onClick={() => setOpened(true)}
        >
          🎁
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="gift-message"
        >
          ✨ You are my greatest gift in life ✨
        </motion.div>
      )}
    </div>
  );
}