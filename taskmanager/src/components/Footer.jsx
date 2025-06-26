const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Task Manager App. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer