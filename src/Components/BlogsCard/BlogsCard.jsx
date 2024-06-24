import { Link } from 'react-router-dom'
import placeholderImage from './404.jpg'
import { MdDelete } from 'react-icons/md'


const BlogsCard = ({ blog, deletable,handeDelete }) => {
  const { cover_image, title, description, id, published_at } = blog

 
  return (
    <div className="flex ">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50 dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handeDelete(id)}
          className="absolute bg-primary hover:bg-red-600 rounded-full hover:scale-105 text-2xl p-3 top-24 cursor-pointer  "
        >
          {' '}
          <MdDelete className="text-secondary  group-hover:text-primary" />
        </div>
      )}
    </div>
  )
}

export default BlogsCard
