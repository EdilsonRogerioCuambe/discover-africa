'use client'
import React, { useState, useEffect } from 'react'
import { questions as questionsData } from '@/utils/questions'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
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
  const [player1Questions, setPlayer1Questions] = useState(
    questionsData.slice(0, 16),
  )
  const [player2Questions, setPlayer2Questions] = useState(
    questionsData.slice(16, 32),
  )
  const [currentQuestion1, setCurrentQuestion1] = useState(0)
  const [currentQuestion2, setCurrentQuestion2] = useState(0)
  const [selectedOption1, setSelectedOption1] = useState<string | null>(null)
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null)
  const [player1Progress, setPlayer1Progress] = useState(50)
  const [player2Progress, setPlayer2Progress] = useState(50)
  const [winner, setWinner] = useState<string | null>(null)

  useEffect(() => {
    const shuffledQuestions = shuffleArray([...questionsData])
    const player1Qs = shuffledQuestions.slice(0, 16)
    const player2Qs = shuffledQuestions.slice(16, 32)

    player1Qs.forEach((question) => {
      question.options = shuffleArray([...question.options])
    })

    player2Qs.forEach((question) => {
      question.options = shuffleArray([...question.options])
    })

    setPlayer1Questions(player1Qs)
    setPlayer2Questions(player2Qs)
  }, [])

  const handleOptionClick = (option: string, player: number) => {
    if (winner) return

    if (player === 1) {
      setSelectedOption1(option)
      const selectedAnswer = player1Questions[currentQuestion1].options.find(
        (opt) => opt.option === option,
      )
      const isCorrect = selectedAnswer?.isCorrect || false

      if (isCorrect) {
        correctSound.play()
        setPlayer1Progress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            setWinner('Player 1')
          }
          return newProgress
        })
        setPlayer2Progress((prev) => {
          const newProgress = prev - 5
          if (newProgress <= 0) {
            setWinner('Player 1')
          }
          return newProgress
        })
      } else {
        incorrectSound.play()
        setPlayer1Progress((prev) => {
          const newProgress = prev - 5
          if (newProgress <= 0) {
            setWinner('Player 2')
          }
          return newProgress
        })
        setPlayer2Progress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            setWinner('Player 2')
          }
          return newProgress
        })
      }
      setCurrentQuestion1((prev) => (prev + 1) % player1Questions.length)
    } else {
      setSelectedOption2(option)
      const selectedAnswer = player2Questions[currentQuestion2].options.find(
        (opt) => opt.option === option,
      )
      const isCorrect = selectedAnswer?.isCorrect || false

      if (isCorrect) {
        correctSound.play()
        setPlayer2Progress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            setWinner('Player 2')
          }
          return newProgress
        })
        setPlayer1Progress((prev) => {
          const newProgress = prev - 5
          if (newProgress <= 0) {
            setWinner('Player 2')
          }
          return newProgress
        })
      } else {
        incorrectSound.play()
        setPlayer2Progress((prev) => {
          const newProgress = prev - 5
          if (newProgress <= 0) {
            setWinner('Player 1')
          }
          return newProgress
        })
        setPlayer1Progress((prev) => {
          const newProgress = prev + 5
          if (newProgress >= 100) {
            setWinner('Player 1')
          }
          return newProgress
        })
      }
      setCurrentQuestion2((prev) => (prev + 1) % player2Questions.length)
    }
  }

  const question1 = player1Questions[currentQuestion1]
  const question2 = player2Questions[currentQuestion2]

  return (
    <main
      className="flex flex-col justify-center mt-14 items-center min-h-screen p-4"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {winner && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75">
          <h1 className="text-white text-4xl mb-4">{winner} venceu!</h1>
          <button
            title="Jogar Novamente"
            type="button"
            className="bg-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Jogar Novamente
          </button>
        </div>
      )}
      <div className="flex flex-col items-center w-full max-w-xl p-4">
        <div className="flex flex-col items-center w-full max-w-xl p-4">
          <div className="flex flex-col items-center mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border p-4 rounded-lg mb-4 bg-white shadow-lg max-w-full"
              style={{
                borderColor: question2.color,
                transform: 'rotate(180deg)',
              }}
            >
              <h2 className="md:text-xl text-sm sm:text-lg text-center font-bold mb-4">
                {question2.question}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {question2.options.map((option, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleOptionClick(option.option, 2)}
                    className={`border p-2 rounded-full text-xs sm:text-sm hover:bg-gray-100 ${
                      selectedOption2 === option.option
                        ? option.isCorrect
                          ? 'bg-green-200'
                          : 'bg-red-200'
                        : ''
                    }`}
                    style={{
                      borderColor:
                        selectedOption2 === option.option
                          ? option.isCorrect
                            ? 'green'
                            : 'red'
                          : question2.color,
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
            </motion.div>
          </div>

          <div className="relative w-full h-2 mb-6 bg-gray-300 rounded-full">
            <div
              className="absolute h-full bg-blue-500 rounded-full rounded-r-none"
              style={{ width: `${player1Progress}%` }}
            ></div>
            <div
              className="absolute h-full bg-green-500 rounded-l-none rounded-full"
              style={{
                width: `${player2Progress}%`,
                left: `${player1Progress}%`,
              }}
            />
          </div>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border p-4 rounded-lg mb-4 bg-white shadow-lg max-w-full"
              style={{
                borderColor: question1.color,
              }}
            >
              <h2 className="md:text-xl text-sm sm:text-lg text-center font-bold mb-4">
                {question1.question}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {question1.options.map((option, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => handleOptionClick(option.option, 1)}
                    className={`border p-2 rounded-full text-xs hover:bg-gray-100 ${
                      selectedOption1 === option.option
                        ? option.isCorrect
                          ? 'bg-green-200'
                          : 'bg-red-200'
                        : ''
                    }`}
                    style={{
                      borderColor:
                        selectedOption1 === option.option
                          ? option.isCorrect
                            ? 'green'
                            : 'red'
                          : question1.color,
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
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
