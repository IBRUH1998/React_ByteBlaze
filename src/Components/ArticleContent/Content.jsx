import { useLoaderData } from 'react-router-dom'
import placeholderImage from './404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'


const Content = () => {
  const blog = useLoaderData()
  const { cover_image, title, description, published_at,tags, body_html } = blog
  return (
    <div className=" mx-auto group borderp-2 border-primary  dark:bg-gray-50 dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />

      {tags.map((tag) => (
        <a
          key={tag}
          rel="noopener noreferrer"
          href="#"
          className="px-3 py-2 font-bold text-2xl rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
        >
          #{tag}
        </a>
      ))}

      <div className='space-y-2'>
        <h2 className="text-2xl underline font-semibold italic py-2 ">{title}</h2>
        <span className=' px-4'>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        
        </span>
      
      </div>
    </div>
  )
}

export default Content
