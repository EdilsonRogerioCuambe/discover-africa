import samoramachel from '@/assets/images/samora-moises-machel.jpg'
import kwamenkrumah from '@/assets/images/kwame-nkrumah.jpg'
import { StaticImageData } from 'next/image'

export interface QuestionsType {
  question: string
  image_url?: StaticImageData
  options: {
    option: string
    isCorrect: boolean
  }[]
  category: string
  color: string
  explanation: string
  country: string
}

export const questions: QuestionsType[] = [
  {
    question: 'Qual é o principal festival de cinema da África?',
    options: [
      { option: 'FESPACO', isCorrect: true },
      { option: 'Cannes', isCorrect: false },
      { option: 'Sundance', isCorrect: false },
      { option: 'Berlinale', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#C8102E',
    explanation:
      'FESPACO (Festival Pan-Africano de Cinema e Televisão de Ouagadougou) é realizado bienalmente em Burkina Faso e é o maior evento de cinema do continente africano.',
    country: 'Burkina Faso',
  },
  {
    question: "Quem é conhecido como o 'Rei do Afrobeat'?",
    options: [
      { option: 'Fela Kuti', isCorrect: true },
      { option: "Youssou N'Dour", isCorrect: false },
      { option: 'Ali Farka Touré', isCorrect: false },
      { option: 'Hugh Masekela', isCorrect: false },
    ],
    category: 'Música',
    color: '#008753',
    explanation:
      'Fela Kuti foi um músico e ativista nigeriano que criou o gênero musical Afrobeat, combinando música tradicional africana com jazz e funk.',
    country: 'Nigéria',
  },
  {
    question: 'Qual é a principal exportação da Nigéria?',
    options: [
      { option: 'Petróleo', isCorrect: true },
      { option: 'Café', isCorrect: false },
      { option: 'Ouro', isCorrect: false },
      { option: 'Diamantes', isCorrect: false },
    ],
    category: 'Economia',
    color: '#008753',
    explanation:
      'A Nigéria é um dos maiores produtores de petróleo do mundo, sendo essa commodity a principal fonte de receita do país.',
    country: 'Nigéria',
  },
  {
    question: 'Qual é o maior deserto da África?',
    options: [
      { option: 'Deserto do Saara', isCorrect: true },
      { option: 'Deserto de Kalahari', isCorrect: false },
      { option: 'Deserto da Namíbia', isCorrect: false },
      { option: 'Deserto da Líbia', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#006233',
    explanation:
      'O Deserto do Saara é o maior deserto quente do mundo, cobrindo grande parte do Norte da África, incluindo a Argélia.',
    country: 'Argélia',
  },
  {
    question: 'Qual é a língua mais falada no continente africano?',
    options: [
      { option: 'Árabe', isCorrect: false },
      { option: 'Suaíli', isCorrect: true },
      { option: 'Inglês', isCorrect: false },
      { option: 'Francês', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#000000',
    explanation:
      'O Suaíli é amplamente falado no leste da África, incluindo países como Quênia e Tanzânia, e é uma das línguas mais faladas no continente.',
    country: 'Quênia',
  },
  {
    question: 'Quem foi o primeiro presidente de Gana?',
    options: [
      { option: 'Kwame Nkrumah', isCorrect: true },
      { option: 'Nelson Mandela', isCorrect: false },
      { option: 'Julius Nyerere', isCorrect: false },
      { option: 'Haile Selassie', isCorrect: false },
    ],
    category: 'História',
    color: '#006B3F',
    explanation:
      'Kwame Nkrumah foi um líder revolucionário e o primeiro presidente de Gana, desempenhando um papel crucial na independência do país em 1957.',
    country: 'Gana',
  },
  {
    question: 'Qual dança é tradicionalmente associada à África do Sul?',
    options: [
      { option: 'Gumboot Dance', isCorrect: true },
      { option: 'Samba', isCorrect: false },
      { option: 'Tango', isCorrect: false },
      { option: 'Hula', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#007847',
    explanation:
      'A Gumboot Dance é uma dança tradicional sul-africana que se originou nas minas de ouro, onde os trabalhadores comunicavam-se batendo as botas de borracha.',
    country: 'África do Sul',
  },
  {
    question:
      'Qual instrumento é frequentemente usado na música tradicional africana?',
    options: [
      { option: 'Djembe', isCorrect: true },
      { option: 'Guitarra', isCorrect: false },
      { option: 'Piano', isCorrect: false },
      { option: 'Violino', isCorrect: false },
    ],
    category: 'Música',
    color: '#EF2B2D',
    explanation:
      'O Djembe é um tambor de origem oeste-africana, amplamente utilizado em várias tradições musicais do continente, especialmente em Mali.',
    country: 'Mali',
  },
  {
    question: 'Qual país é o maior produtor de cacau do mundo?',
    options: [
      { option: 'Costa do Marfim', isCorrect: true },
      { option: 'Gana', isCorrect: false },
      { option: 'Nigéria', isCorrect: false },
      { option: 'Camarões', isCorrect: false },
    ],
    category: 'Economia',
    color: '#F77F00',
    explanation:
      'A Costa do Marfim é o maior produtor e exportador de cacau do mundo, essencial para a indústria global de chocolate.',
    country: 'Costa do Marfim',
  },
  {
    question: 'Qual é o rio mais longo da África?',
    options: [
      { option: 'Rio Nilo', isCorrect: true },
      { option: 'Rio Congo', isCorrect: false },
      { option: 'Rio Zambeze', isCorrect: false },
      { option: 'Rio Níger', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#CE1126',
    explanation:
      'O Rio Nilo, que atravessa países como Egito e Sudão, é o rio mais longo da África e do mundo.',
    country: 'Egito',
  },
  {
    question: 'Quantas línguas oficiais a África do Sul possui?',
    options: [
      { option: '11', isCorrect: true },
      { option: '2', isCorrect: false },
      { option: '5', isCorrect: false },
      { option: '8', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#007847',
    explanation:
      'A África do Sul tem 11 línguas oficiais, refletindo sua rica diversidade cultural e linguística.',
    country: 'África do Sul',
  },
  {
    question: 'Em que ano Nelson Mandela foi libertado da prisão?',
    options: [
      { option: '1990', isCorrect: true },
      { option: '1985', isCorrect: false },
      { option: '1994', isCorrect: false },
      { option: '1989', isCorrect: false },
    ],
    category: 'História',
    color: '#007847',
    explanation:
      'Nelson Mandela foi libertado da prisão em 1990, após 27 anos de encarceramento, e mais tarde se tornou o primeiro presidente negro da África do Sul.',
    country: 'África do Sul',
  },
  {
    question: 'Qual é a capital cultural do Marrocos?',
    options: [
      { option: 'Fez', isCorrect: true },
      { option: 'Rabat', isCorrect: false },
      { option: 'Casablanca', isCorrect: false },
      { option: 'Marrakech', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#C1272D',
    explanation:
      'Fez é considerada a capital cultural do Marrocos, famosa por sua universidade histórica e sua medina bem preservada.',
    country: 'Marrocos',
  },
  {
    question: 'Qual é o gênero musical originário da Etiópia?',
    options: [
      { option: 'Ethio-jazz', isCorrect: true },
      { option: 'Highlife', isCorrect: false },
      { option: 'Afrobeat', isCorrect: false },
      { option: 'Soukous', isCorrect: false },
    ],
    category: 'Música',
    color: '#DA291C',
    explanation:
      'Ethio-jazz é um gênero musical que combina jazz com música tradicional etíope, popularizado por músicos como Mulatu Astatke.',
    country: 'Etiópia',
  },
  {
    question: 'Qual país é o maior exportador de ouro da África?',
    options: [
      { option: 'África do Sul', isCorrect: true },
      { option: 'Gana', isCorrect: false },
      { option: 'Mali', isCorrect: false },
      { option: 'Tanzânia', isCorrect: false },
    ],
    category: 'Economia',
    color: '#007847',
    explanation:
      'A África do Sul é um dos maiores produtores de ouro do mundo, com uma longa história de mineração do metal precioso.',
    country: 'África do Sul',
  },
  {
    question: 'Qual lago é o maior da África?',
    options: [
      { option: 'Lago Vitória', isCorrect: true },
      { option: 'Lago Tanganica', isCorrect: false },
      { option: 'Lago Malawi', isCorrect: false },
      { option: 'Lago Chade', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#FFCE00',
    explanation:
      'O Lago Vitória, localizado na África Oriental, é o maior lago da África e a segunda maior massa de água doce do mundo.',
    country: 'Uganda',
  },
  {
    question: 'Qual é a língua oficial de Moçambique?',
    options: [
      { option: 'Português', isCorrect: true },
      { option: 'Inglês', isCorrect: false },
      { option: 'Suaíli', isCorrect: false },
      { option: 'Francês', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#007847',
    explanation:
      'O Português é a língua oficial de Moçambique, uma herança do período colonial sob domínio português.',
    country: 'Moçambique',
  },
  {
    question: 'Qual civilização antiga é conhecida pelas pirâmides?',
    options: [
      { option: 'Egito', isCorrect: true },
      { option: 'Gana', isCorrect: false },
      { option: 'Zimbábue', isCorrect: false },
      { option: 'Etiópia', isCorrect: false },
    ],
    category: 'História',
    color: '#CE1126',
    explanation:
      'A civilização egípcia é famosa por suas pirâmides, que são alguns dos monumentos antigos mais icônicos e bem preservados do mundo.',
    country: 'Egito',
  },
  {
    question: 'Quem é esta pessoa?',
    image_url: samoramachel,
    options: [
      { option: 'Samora Moisés Machel', isCorrect: true },
      { option: 'Robert Mugabe', isCorrect: false },
      { option: 'Jomo Kenyatta', isCorrect: false },
      { option: 'Haile Selassie', isCorrect: false },
    ],
    category: 'História',
    color: '#006B3F',
    explanation:
      'Samora Machel foi o primeiro presidente de Moçambique, liderando o país para a independência do domínio colonial português.',
    country: 'Moçambique',
  },
  {
    question: 'Quem é esta pessoa?',
    image_url: kwamenkrumah,
    options: [
      { option: 'Kwame Nkrumah', isCorrect: true },
      { option: 'Nelson Mandela', isCorrect: false },
      { option: 'Julius Nyerere', isCorrect: false },
      { option: 'Haile Selassie', isCorrect: false },
    ],
    category: 'História',
    color: '#006B3F',
    explanation:
      'Kwame Nkrumah foi um líder revolucionário e o primeiro presidente de Gana, desempenhando um papel crucial na independência do país em 1957.',
    country: 'Gana',
  },
]
