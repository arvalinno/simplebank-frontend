import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';

function Homepage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-700 p-6">
      <div className="max-w-2xl bg-white shadow-xl rounded-3xl p-8 border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900">Hi, I'm Arvalinno</h1>
        <p className="text-gray-600 mt-2 text-lg">Software Engineer | QA Engineer</p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Passionate about software development and quality assurance. 
          Experienced in Go, Java, Selenium, and CI/CD (Jenkins & Github Actions).
        </p>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-700 mt-1">Email: arvalinno@gmail.com</p>
          <p className="text-gray-700">LinkedIn: linkedin.com/in/arvalinno</p>
        </div>
        <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
        <Link
            to="/simple-bank"
            className="text-blue-600 hover:text-blue-800 transition duration-300 font-medium text-lg">
            - Simple Bank
        </Link>
        </div>
      </div>
    </div>    
  );
}

export default Homepage;
