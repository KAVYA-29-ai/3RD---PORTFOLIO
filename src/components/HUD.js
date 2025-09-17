import { motion } from 'framer-motion';

export default function HUD() {
  return (
    <motion.div
      className=\"absolute top-4 left-4 p-3 bg-black/50 rounded-xl border border-cyan-400\"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className=\"text-xl font-bold text-cyan-300\">Kavya Rajput</h1>
      <p className=\"text-sm\">B.Tech Student | Tech Enthusiast</p>
    </motion.div>
  );
}