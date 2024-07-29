'use client'

import { useState } from 'react'
import { X, Menu } from 'lucide-react'
import { GiAfrica } from 'react-icons/gi'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <GiAfrica className="text-yellow-500 text-3xl mr-2" />
          <span className={`${styles.logo}`}>Discover Africa</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`${styles.link} hover:text-yellow-600 transition-all ease-in-out duration-300`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.link} hover:text-yellow-600 transition-all ease-in-out duration-300`}
          >
            Sobre
          </Link>
          <Link
            href="/quizzes"
            className={`${styles.link} hover:text-yellow-600 transition-all ease-in-out duration-300`}
          >
            Quizzes
          </Link>
          <Link
            href="/contact"
            className={`${styles.link} hover:text-yellow-600 transition-all ease-in-out duration-300`}
          >
            Contato
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="text-3xl" />
            ) : (
              <Menu className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pb-4 space-y-4">
            <Link
              href="/"
              className={`${styles.link} block text-lg hover:text-yellow-600 transition-all ease-in-out duration-300`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.link} block text-lg hover:text-yellow-600 transition-all ease-in-out duration-300`}
            >
              Sobre
            </Link>
            <Link
              href="/quizzes"
              className={`${styles.link} block text-lg hover:text-yellow-600 transition-all ease-in-out duration-300`}
            >
              Quizzes
            </Link>
            <Link
              href="/contact"
              className={`${styles.link} block text-lg hover:text-yellow-600 transition-all ease-in-out duration-300`}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
