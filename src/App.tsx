import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
            My Portfolio
          </Link>
          <div className="space-x-2 sm:space-x-4 mt-2 sm:mt-0">
            <Link 
              to="/" 
              className="hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className="hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet /> {/* This will render the matched route's component */}
      </main>
    </>
  );
}

export default App;
