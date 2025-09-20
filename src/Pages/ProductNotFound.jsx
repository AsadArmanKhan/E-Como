import { motion } from "framer-motion";
import { XCircle } from "lucide-react"; 

const ProductNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mb-6"
      >
        <XCircle className="w-20 h-20 text-red-500" />
      </motion.div>

      {/* Animated Text */}
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 dark:text-gray-200"
      >
        Product Not Found
      </motion.h2>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-3 text-gray-500 dark:text-gray-400"
      >
        We couldn’t find any products matching your search.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </motion.button>
    </div>
  );
};

export default ProductNotFound;
