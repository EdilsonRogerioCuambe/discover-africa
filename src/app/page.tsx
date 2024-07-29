'use client'

import React, { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
} from 'react-simple-maps'
import africaMapData from '../utils/africa.topo.json'
import { Pacifico } from 'next/font/google'
import { CountryData, countryData } from '@/utils/countries.data'
import Image from 'next/image'
import backgroundImage from '@/assets/images/background.svg'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

const getColor = (countryName: string): string => {
  const country = countryData.find((c) => c.name === countryName)
  return country ? country.color : '#202020'
}

const Home: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null,
  )

  return (
    <main
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="container flex flex-wrap bg-white/30 backdrop-blur-lg rounded-lg p-4">
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="text-white">
            <h1
              className={`${pacifico.className} md:text-4xl text-3xl text-white font-bold mb-4 text-center`}
            >
              Discover África
            </h1>
            <p className="text-center font-mono text-xl md:text-base">
              Bem-vindo à nossa plataforma de quizzes! Aqui você pode testar
              seus conhecimentos sobre os países africanos e aprender mais sobre
              este incrível continente. Clique em um país no mapa para ver mais
              informações.
            </p>
            {selectedCountry && (
              <div
                className="mt-4 p-4 border rounded-lg shadow-lg text-black font-mono bg-white/70 backdrop-blur-md"
                style={{ border: `2px solid ${selectedCountry.color}` }}
              >
                <h2
                  className="md:text-2xl text-xl font-extrabold"
                  style={{ color: selectedCountry.color }}
                >
                  {selectedCountry.name}
                </h2>
                <p>
                  <strong>Dia da Independência:</strong>{' '}
                  {selectedCountry.info.independenceDay}
                </p>
                <p>
                  <strong>Línguas Faladas:</strong>{' '}
                  {selectedCountry.info.spokenLanguages.join(', ')}
                </p>
                <p>
                  <strong>Primeiro Presidente:</strong>{' '}
                  {selectedCountry.info.firstPresident}
                </p>
                <div className="flex items-center mb-2">
                  <strong className="mr-2">Bandeira:</strong>
                  <div className="relative w-12 h-12">
                    <Image
                      src={selectedCountry.info.image}
                      layout="fill"
                      alt={`Bandeira de ${selectedCountry.name}`}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p>
                  <strong>Capital:</strong> {selectedCountry.info.capital}
                </p>
                <p>
                  <strong>Moeda:</strong> {selectedCountry.info.currency}
                </p>
                <p>
                  <strong>População:</strong>{' '}
                  {selectedCountry.info.population.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <ComposableMap
            projectionConfig={{
              scale: 400,
              center: [20, 0],
            }}
          >
            <Geographies geography={africaMapData}>
              {({ geographies }) =>
                geographies.map((geo: GeographyProps['geography']) => {
                  const countryName = geo.properties.name
                  const country = countryData.find(
                    (c) => c.name === countryName,
                  )
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onClick={() => setSelectedCountry(country ?? null)}
                      style={{
                        default: {
                          fill: getColor(countryName),
                          outline: 'none',
                        },
                        hover: { fill: '#FFAB91', outline: 'none' },
                        pressed: { fill: '#FF7043', outline: 'none' },
                      }}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </main>
  )
}

export default Home
