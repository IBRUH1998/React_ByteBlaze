import { Link, useLoaderData, useNavigation } from 'react-router-dom'
import BlogsCard from '../Components/BlogsCard/BlogsCard'
import Loader from '../Components/Loader/Loader'

const Blogs = () => {
  const navigation = useNavigation()
  const blogs = useLoaderData()

  if (navigation.state === 'loading') return <Loader></Loader>

  return (
    <Link to="blogs">
      <section className="dark:bg-gray-100 dark:bg-gray-100 dark:text-gray-800 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 dark:bg-gray-50"
          >
            <img
              src={blogs[0].cover_image}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600 dark:text-gray-600">
                {new Date(blogs[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1,19).map((blog) => (
              <BlogsCard key={blog.id} blog={blog}></BlogsCard>
            ))}
          </div>
          <div className="flex justify-center">
           
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Blogs
