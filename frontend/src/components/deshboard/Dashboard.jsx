import {Link} from 'react-router-dom';
const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Library Admin</h2>
        <ul className="space-y-4">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">All Books</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Issued Books</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Add Book</li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Students</li>
        </ul>
       <Link to="/"> <button className="mt-10 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Logout
        </button></Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Books in Library</h2>
            <p className="text-3xl text-blue-600 font-bold">1200</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Books Issued</h2>
            <p className="text-3xl text-green-600 font-bold">345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Students Registered</h2>
            <p className="text-3xl text-purple-600 font-bold">150</p>
          </div>
        </div>

        {/* List Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recently Issued Books</h2>
          <ul className="space-y-2">
            <li className="flex justify-between border-b pb-2">
              <span>🔹 JavaScript Essentials</span>
              <span className="text-sm text-gray-500">Student: Ravi</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>🔹 React for Beginners</span>
              <span className="text-sm text-gray-500">Student: Pooja</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>🔹 Data Structures in C++</span>
              <span className="text-sm text-gray-500">Student: Aman</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
