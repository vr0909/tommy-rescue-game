import React from 'react';
import { motion } from 'framer-motion';
import '../styles/DialogBox.css';

function DialogBox({ character, text }) {
  return (
    <motion.div
      className="dialog-box"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="dialog-header">
        <strong>{character}</strong>
      </div>
      <div className="dialog-text">
        {text}
      </div>
    </motion.div>
  );
}

export default DialogBox;