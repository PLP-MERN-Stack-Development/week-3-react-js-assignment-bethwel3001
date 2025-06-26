import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
          {task.text}
        </span>
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </motion.li>
  )
}

export default Task