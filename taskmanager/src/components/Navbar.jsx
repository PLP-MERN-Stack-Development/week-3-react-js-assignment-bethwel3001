import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Task Manager
            </Link>
            <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Tasks
            </Link>
            <Link to="/api-demo" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              API Demo
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar