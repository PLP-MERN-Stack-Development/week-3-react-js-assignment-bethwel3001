import { useState } from 'react'
import useApi from '../hooks/useApi'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const ApiDemo = () => {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading, error, refetch } = useApi(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${searchTerm}`
  )

  const handleSearch = (e) => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">API Demo</h1>
      
      <Card className="mb-6">
        <form onSubmit={handleSearch} className="flex space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit">Search</Button>
        </form>
      </Card>

      {loading && <div className="text-center py-8">Loading...</div>}
      {error && <div className="text-red-500 text-center py-8">Error: {error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="self-center">Page {page}</span>
        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data?.length < 10}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default ApiDemo