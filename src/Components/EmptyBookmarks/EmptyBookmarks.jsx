import { Link } from 'react-router-dom'

const EmptyBookmarks = () => {
  return (
    <div className="min-h-[cal(100vh-116)] flex flex-col items-center  justify-center py-28">
      <h2 className=" text-4xl">No BookMakrs available</h2>
      <div className="flex items-center justify-center mt-3  py-8">
        <Link
          to="/blogs"
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-sky-500 rounded-xl group"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-sky-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Go To Blogs
          </span>
        </Link>
      </div>
    </div>
  )
}

export default EmptyBookmarks
