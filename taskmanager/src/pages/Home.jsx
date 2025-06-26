import { motion } from 'framer-motion'
import Card from '../components/ui/Card'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A modern React application with Vite, Tailwind CSS, and Framer Motion
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">Task Management</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Organize your tasks with our intuitive task manager. Add, complete, and filter tasks with ease.
          </p>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-3">API Integration</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore our API demo that fetches and displays data from JSONPlaceholder with pagination and search.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home