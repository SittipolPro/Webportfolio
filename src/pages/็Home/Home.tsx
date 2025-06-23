import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <section className={`home-container ${darkMode ? 'dark' : ''}`}>
      <div className="text-center px-4 py-10">
        <h1 className="text-5xl font-bold mb-4 text-primary-custom">
          👋 ยินดีต้อนรับสู่เว็บไซต์ของผม
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          ผมเป็นนักพัฒนา Frontend ที่ใช้ React และ Tailwind ในการสร้างเว็บที่ดูดีและใช้งานง่าย!
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/projects"
            className="btn-primary"
          >
            ดูโปรเจกต์
          </Link>
          <Link
            to="/contact"
            className="btn-outline"
          >
            ติดต่อผม
          </Link>
        </div>

        <button
          onClick={toggleDarkMode}
          className="mt-10 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          {darkMode ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด'}
        </button>
      </div>
    </section>
  )
}

export default Home
