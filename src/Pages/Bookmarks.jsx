import { useEffect, useState } from 'react'
import { deleteBlogs, getBlogs } from '../Utility'
import BlogsCard from '../Components/BlogsCard/BlogsCard'
import EmptyBookmarks from '../Components/EmptyBookmarks/EmptyBookmarks'

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
  }, [])

  const handeDelete = (id) => {
    deleteBlogs(id)
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
  }

  if(blogs.length<1) return <EmptyBookmarks></EmptyBookmarks>

  return (
    <div className="grid justify-center px-8 py-12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogsCard handeDelete={handeDelete} deletable={true} key={blog.id} blog={blog}></BlogsCard>
      ))}
    </div>
  )
}

export default Bookmarks
