import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>
      <div className="hero  -mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">
              Wellcome to{' '}
              <span className="bg-gradient-to-r from-orange-600 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
                ByteBlaze
              </span>{' '}
            </h1>
            <p className="py-6 text-xl font-semibold bg-gradient-to-r    to-green-400 via-blue-500  from-orange-700 text-transparent bg-clip-text animate-gradient">
              ByteBlaze is the bridge between the complex world of technology
              and curious minds eager to understand
            </p>
            <div className="flex text-center justify-center gap-3">
              <div className="flex justify-center items-center gap-4">
                <Link
                  to="/blogs"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-sky-500 rounded-xl group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-sky-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Read Blogs
                  </span>
                </Link>

                <Link
                  to="/bookmarked"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
                >
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    Bookmarks
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
