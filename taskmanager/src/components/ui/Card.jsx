// const Card = ({ children, className = '' }) => {
//   return (
//     <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
//       {children}
//     </div>
//   )
// }

// export default Card

import { motion } from 'framer-motion'

const Card = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card