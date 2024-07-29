'use client'

import React, { useState, useEffect } from 'react'
import { questions as questionsData } from '@/utils/questions'
import { CheckCircle, Circle, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import Image from 'next/image'
import backgroundImage from '@/assets/images/background.svg'
import wrong from '@/assets/songs/wrong.mp3'
import correct from '@/assets/songs/correct.mp3'

const correctSound = new Howl({ src: [correct] })
const incorrectSound = new Howl({ src: [wrong] })

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function Page() {
  const [questions, setQuestions] = useState(questionsData)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [results, setResults] = useState<(boolean | null)[]>([])

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...questionsData])
    shuffledQuestions.forEach((question) => {
      question.options = shuffleArray([...question.options])
    })
    setQuestions(shuffledQuestions)
    setResults(new Array(shuffledQuestions.length).fill(null))
  }, [])

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setShowExplanation(true)
    const selectedAnswer = questions[currentQuestion].options.find(
      (opt) => opt.option === option,
    )
    if (selectedAnswer?.isCorrect) {
      correctSound.play()
      setResults((prev) => {
        const newResults = [...prev]
        newResults[currentQuestion] = true
        return newResults
      })
    } else {
      incorrectSound.play()
      setResults((prev) => {
        const newResults = [...prev]
        newResults[currentQuestion] = false
        return newResults
      })
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowExplanation(false)
    setCurrentQuestion((prev) => (prev + 1) % questions.length)
  }

  const question = questions[currentQuestion]

  return (
    <main
      className="flex flex-col justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-xl p-4">
        <div className="flex justify-center items-center mb-4 flex-wrap">
          {results.map((result, index) => (
            <div key={index} className="flex items-center mx-1 my-1">
              {result === true ? (
                <CheckCircle className="text-green-500 bg-white rounded-full" />
              ) : result === false ? (
                <XCircle className="text-red-500 bg-white rounded-full" />
              ) : (
                <Circle className="text-amber-600 bg-white rounded-full" />
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border p-4 rounded-lg mb-4 justify-center items-center bg-white shadow-lg"
          style={{ borderColor: question.color }}
        >
          {question.image_url && (
            <div className="relative w-48 justify-center items-center h-48 mb-4">
              <Image
                src={question.image_url}
                fill
                alt="Imagem da pergunta"
                className="object-cover justify-center items-center rounded-lg h-48 w-48"
              />
            </div>
          )}
          <h2 className="text-xl font-bold text-center mb-4">
            {question.question}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleOptionClick(option.option)}
                className={`border p-2 rounded-full hover:bg-gray-100 ${
                  selectedOption === option.option
                    ? option.isCorrect
                      ? 'bg-green-200'
                      : 'bg-red-200'
                    : ''
                }`}
                style={{
                  borderColor:
                    selectedOption === option.option
                      ? option.isCorrect
                        ? 'green'
                        : 'red'
                      : question.color,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {option.option}
              </motion.button>
            ))}
          </div>
          {showExplanation && (
            <div className="mt-4 p-2 bg-gray-100 rounded-lg">
              <p>{question.explanation}</p>
              <motion.button
                title="Próxima pergunta"
                onClick={handleNextQuestion}
                className={`mt-4 px-4 py-2 rounded text-white`}
                style={{ backgroundColor: question.color }}
                type="button"
                whileHover={{ scale: 1.1 }}
              >
                Próxima pergunta
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  )
}
