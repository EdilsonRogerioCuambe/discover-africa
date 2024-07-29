import { StaticImageData } from 'next/image'
import mozambique from '@/assets/images/mozambique.png'
import angola from '@/assets/images/angola.png'
import nigeria from '@/assets/images/nigeria.png'
import southAfrica from '@/assets/images/south-africa.png'
import ghana from '@/assets/images/ghana.png'
import kenya from '@/assets/images/kenya.png'
import tanzania from '@/assets/images/tanzania.png'
import morocco from '@/assets/images/morocco.png'
import egypt from '@/assets/images/egypt.png'

export interface CountryData {
  name: string
  color: string
  info: {
    independenceDay: string
    spokenLanguages: string[]
    firstPresident: string
    flag: string
    capital: string
    currency: string
    population: string
    image: StaticImageData
  }
}

export const countryData: CountryData[] = [
  {
    name: 'Morocco',
    color: '#C8102E', // Vermelho
    info: {
      independenceDay: '18 de novembro de 1956',
      spokenLanguages: ['Árabe', 'Berbere', 'Francês'],
      firstPresident: 'Mohammed V',
      flag: '🇲🇦',
      capital: 'Rabat',
      currency: 'Dirham',
      population: '36.03 milhões',
      image: morocco,
    },
  },
  {
    name: 'Nigeria',
    color: '#008753', // Verde
    info: {
      independenceDay: '1 de outubro de 1960',
      spokenLanguages: ['Inglês', 'Hausa', 'Ioruba', 'Igbo'],
      firstPresident: 'Nnamdi Azikiwe',
      flag: '🇳🇬',
      capital: 'Abuja',
      currency: 'Naira',
      population: '206 milhões',
      image: nigeria,
    },
  },
  {
    name: 'Egypt',
    color: '#F4C430', // Amarelo
    info: {
      independenceDay: '28 de fevereiro de 1922',
      spokenLanguages: ['Árabe'],
      firstPresident: 'Mohamed Naguib',
      flag: '🇪🇬',
      capital: 'Cairo',
      currency: 'Libra egípcia',
      population: '102.3 milhões',
      image: egypt,
    },
  },
  {
    name: 'South Africa',
    color: '#007847', // Verde escuro
    info: {
      independenceDay: '31 de maio de 1910',
      spokenLanguages: ['Afrikaans', 'Inglês', 'IsiZulu', 'IsiXhosa'],
      firstPresident: 'Charles Robberts Swart',
      flag: '🇿🇦',
      capital: 'Pretória',
      currency: 'Rand',
      population: '59.31 milhões',
      image: southAfrica,
    },
  },
  {
    name: 'Ghana',
    color: '#006B3F', // Verde
    info: {
      independenceDay: '6 de março de 1957',
      spokenLanguages: ['Inglês'],
      firstPresident: 'Kwame Nkrumah',
      flag: '🇬🇭',
      capital: 'Acra',
      currency: 'Cedi',
      population: '31.07 milhões',
      image: ghana,
    },
  },
  {
    name: 'Kenya',
    color: '#BB0A30', // Vermelho
    info: {
      independenceDay: '12 de dezembro de 1963',
      spokenLanguages: ['Inglês', 'Suaíli'],
      firstPresident: 'Jomo Kenyatta',
      flag: '🇰🇪',
      capital: 'Nairóbi',
      currency: 'Xelim queniano',
      population: '53.77 milhões',
      image: kenya,
    },
  },
  {
    name: 'United Republic of Tanzania',
    color: '#1EB53A', // Verde claro
    info: {
      independenceDay: '9 de dezembro de 1961',
      spokenLanguages: ['Suaíli', 'Inglês'],
      firstPresident: 'Julius Nyerere',
      flag: '🇹🇿',
      capital: 'Dodoma',
      currency: 'Xelim tanzaniano',
      population: '59.73 milhões',
      image: tanzania,
    },
  },
  {
    name: 'Angola',
    color: '#E21118', // Vermelho
    info: {
      independenceDay: '11 de novembro de 1975',
      spokenLanguages: ['Português', 'Quimbundo', 'Umbundo', 'Quicongo'],
      firstPresident: 'Agostinho Neto',
      flag: '🇦🇴',
      capital: 'Luanda',
      currency: 'Kwanza',
      population: '32.87 milhões',
      image: angola,
    },
  },
  {
    name: 'Mozambique',
    color: '#00A859', // Verde
    info: {
      independenceDay: '25 de junho de 1975',
      spokenLanguages: ['Português'],
      firstPresident: 'Samora Machel',
      flag: '🇲🇿',
      capital: 'Maputo',
      currency: 'Metical',
      population: '31.26 milhões',
      image: mozambique,
    },
  },
]
