import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useLocalStorage from '../../hooks/useLocalStorage'
import Task from './Task'
import TaskForm from './TaskForm'

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      
      <TaskForm onAddTask={addTask} />
      
      <div className="flex space-x-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>
      
      <ul className="bg-white dark:bg-gray-800 rounded-lg shadow divide-y divide-gray-200 dark:divide-gray-700">
        <AnimatePresence>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleComplete={toggleComplete}
                onDelete={deleteTask}
              />
            ))
          ) : (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 text-center text-gray-500 dark:text-gray-400"
            >
              No tasks found
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </div>
  )
}

export default TaskManager