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
    question: 'Qual é o maior parque nacional da África?',
    options: [
      { option: 'Parque Nacional do Serengeti', isCorrect: true },
      { option: 'Parque Nacional Kruger', isCorrect: false },
      { option: 'Parque Nacional Chobe', isCorrect: false },
      { option: 'Parque Nacional Masai Mara', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#006B3F',
    explanation:
      'O Parque Nacional do Serengeti, localizado na Tanzânia, é um dos maiores e mais famosos parques de vida selvagem da África.',
    country: 'Tanzânia',
  },
  {
    question: 'Qual é o país mais populoso da África?',
    options: [
      { option: 'Nigéria', isCorrect: true },
      { option: 'Egito', isCorrect: false },
      { option: 'Etiópia', isCorrect: false },
      { option: 'República Democrática do Congo', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#008753',
    explanation:
      'A Nigéria é o país mais populoso da África, com uma população de mais de 200 milhões de habitantes.',
    country: 'Nigéria',
  },
  {
    question: 'Qual é a religião predominante na Etiópia?',
    options: [
      { option: 'Cristianismo Ortodoxo', isCorrect: true },
      { option: 'Islamismo', isCorrect: false },
      { option: 'Hinduísmo', isCorrect: false },
      { option: 'Budismo', isCorrect: false },
    ],
    category: 'Religião',
    color: '#DA291C',
    explanation:
      'O Cristianismo Ortodoxo é a religião predominante na Etiópia, com raízes históricas que remontam ao século IV d.C.',
    country: 'Etiópia',
  },
  {
    question: 'Qual é o maior parque nacional de vida selvagem do Quênia?',
    options: [
      { option: 'Parque Nacional Tsavo', isCorrect: true },
      { option: 'Reserva Nacional Masai Mara', isCorrect: false },
      { option: 'Parque Nacional Amboseli', isCorrect: false },
      { option: 'Parque Nacional Aberdare', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#006B3F',
    explanation:
      'O Parque Nacional Tsavo, dividido em Tsavo East e Tsavo West, é o maior parque nacional do Quênia e um dos maiores da África.',
    country: 'Quênia',
  },
  {
    question: 'Qual é o país mais rico da África em termos de PIB per capita?',
    options: [
      { option: 'Seychelles', isCorrect: true },
      { option: 'África do Sul', isCorrect: false },
      { option: 'Nigéria', isCorrect: false },
      { option: 'Angola', isCorrect: false },
    ],
    category: 'Economia',
    color: '#00A3E0',
    explanation:
      'Seychelles é o país mais rico da África em termos de PIB per capita, devido à sua economia baseada no turismo e serviços financeiros.',
    country: 'Seychelles',
  },
  {
    question: 'Qual é a língua oficial de Angola?',
    options: [
      { option: 'Português', isCorrect: true },
      { option: 'Inglês', isCorrect: false },
      { option: 'Francês', isCorrect: false },
      { option: 'Espanhol', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#CE1126',
    explanation:
      'O Português é a língua oficial de Angola, uma herança do período colonial sob domínio português.',
    country: 'Angola',
  },
  {
    question: 'Qual é o maior deserto do mundo?',
    options: [
      { option: 'Antártica', isCorrect: true },
      { option: 'Deserto do Saara', isCorrect: false },
      { option: 'Deserto de Kalahari', isCorrect: false },
      { option: 'Deserto da Arábia', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#000000',
    explanation:
      'A Antártica é o maior deserto do mundo, cobrindo uma área de aproximadamente 14 milhões de quilômetros quadrados.',
    country: 'Antártica',
  },
  {
    question: 'Qual é o país mais extenso da África?',
    options: [
      { option: 'Argélia', isCorrect: true },
      { option: 'República Democrática do Congo', isCorrect: false },
      { option: 'Sudão', isCorrect: false },
      { option: 'Líbia', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#006233',
    explanation:
      'A Argélia é o maior país da África em termos de extensão territorial, cobrindo uma área de mais de 2,3 milhões de quilômetros quadrados.',
    country: 'Argélia',
  },
  {
    question: 'Qual é a religião predominante na Nigéria?',
    options: [
      { option: 'Islamismo', isCorrect: false },
      { option: 'Cristianismo', isCorrect: false },
      { option: 'Cristianismo e Islamismo', isCorrect: true },
      { option: 'Hinduísmo', isCorrect: false },
    ],
    category: 'Religião',
    color: '#008753',
    explanation:
      'A Nigéria tem uma população religiosamente diversa, com o Cristianismo e o Islamismo sendo as principais religiões praticadas no país.',
    country: 'Nigéria',
  },
  {
    question: 'Qual é a língua oficial de Gana?',
    options: [
      { option: 'Inglês', isCorrect: true },
      { option: 'Francês', isCorrect: false },
      { option: 'Árabe', isCorrect: false },
      { option: 'Suaíli', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#006B3F',
    explanation:
      'O Inglês é a língua oficial de Gana, uma herança do período colonial sob domínio britânico.',
    country: 'Gana',
  },
  {
    question: 'Qual é a capital da Nigéria?',
    options: [
      { option: 'Abuja', isCorrect: true },
      { option: 'Lagos', isCorrect: false },
      { option: 'Kano', isCorrect: false },
      { option: 'Ibadan', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#008753',
    explanation:
      'Abuja é a capital da Nigéria desde 1991, substituindo Lagos, que ainda é a maior cidade do país.',
    country: 'Nigéria',
  },
  {
    question: 'Qual é a dança tradicional associada à Etiópia?',
    options: [
      { option: 'Eskista', isCorrect: true },
      { option: 'Gumboot Dance', isCorrect: false },
      { option: 'Kizomba', isCorrect: false },
      { option: 'Makossa', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#DA291C',
    explanation:
      'Eskista é uma dança tradicional etíope caracterizada por movimentos rápidos de ombros e peito.',
    country: 'Etiópia',
  },
  {
    question:
      'Quem foi o primeiro presidente da África do Sul após o apartheid?',
    options: [
      { option: 'Nelson Mandela', isCorrect: true },
      { option: 'Jacob Zuma', isCorrect: false },
      { option: 'Thabo Mbeki', isCorrect: false },
      { option: 'Cyril Ramaphosa', isCorrect: false },
    ],
    category: 'História',
    color: '#007847',
    explanation:
      'Nelson Mandela foi o primeiro presidente negro da África do Sul, eleito em 1994 após o fim do apartheid.',
    country: 'África do Sul',
  },
  {
    question: 'Qual é o maior produtor de café na África?',
    options: [
      { option: 'Etiópia', isCorrect: true },
      { option: 'Quênia', isCorrect: false },
      { option: 'Uganda', isCorrect: false },
      { option: 'Camarões', isCorrect: false },
    ],
    category: 'Economia',
    color: '#DA291C',
    explanation:
      'A Etiópia é o maior produtor de café na África, sendo o café uma parte essencial da cultura e economia do país.',
    country: 'Etiópia',
  },
  {
    question: 'Qual é a principal língua falada no Egito?',
    options: [
      { option: 'Árabe', isCorrect: true },
      { option: 'Inglês', isCorrect: false },
      { option: 'Francês', isCorrect: false },
      { option: 'Suaíli', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#CE1126',
    explanation:
      'O árabe é a língua oficial e mais falada no Egito, usado em todos os aspectos da vida cotidiana.',
    country: 'Egito',
  },
  {
    question: 'Qual é a maior cidade do Marrocos?',
    options: [
      { option: 'Casablanca', isCorrect: true },
      { option: 'Rabat', isCorrect: false },
      { option: 'Marrakech', isCorrect: false },
      { option: 'Fez', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#C1272D',
    explanation:
      'Casablanca é a maior cidade do Marrocos, sendo um importante centro econômico e cultural.',
    country: 'Marrocos',
  },
  {
    question: 'Qual é a moeda oficial da África do Sul?',
    options: [
      { option: 'Rand', isCorrect: true },
      { option: 'Dólar Sul-Africano', isCorrect: false },
      { option: 'Libra', isCorrect: false },
      { option: 'Euro', isCorrect: false },
    ],
    category: 'Economia',
    color: '#007847',
    explanation:
      'O Rand é a moeda oficial da África do Sul, usado em todas as transações financeiras do país.',
    country: 'África do Sul',
  },
  {
    question: 'Qual é o país com a maior população de elefantes na África?',
    options: [
      { option: 'Botswana', isCorrect: true },
      { option: 'Quênia', isCorrect: false },
      { option: 'Tanzânia', isCorrect: false },
      { option: 'Zimbábue', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#0033A0',
    explanation:
      'Botswana tem a maior população de elefantes da África, especialmente concentrados no Parque Nacional de Chobe.',
    country: 'Botswana',
  },
  {
    question: 'Qual é a montanha mais alta da África?',
    options: [
      { option: 'Monte Kilimanjaro', isCorrect: true },
      { option: 'Monte Quênia', isCorrect: false },
      { option: 'Montes Drakensberg', isCorrect: false },
      { option: 'Monte Elgon', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#006B3F',
    explanation:
      'O Monte Kilimanjaro na Tanzânia é a montanha mais alta da África, com uma altitude de 5.895 metros.',
    country: 'Tanzânia',
  },
  {
    question: 'Qual é a língua oficial da Namíbia?',
    options: [
      { option: 'Inglês', isCorrect: true },
      { option: 'Alemão', isCorrect: false },
      { option: 'Africâner', isCorrect: false },
      { option: 'Oshiwambo', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#00247D',
    explanation:
      'O Inglês é a língua oficial da Namíbia, usada em todas as transações governamentais e educacionais.',
    country: 'Namíbia',
  },
  {
    question: 'Qual é o maior parque nacional da Zâmbia?',
    options: [
      { option: 'Parque Nacional Kafue', isCorrect: true },
      { option: 'Parque Nacional South Luangwa', isCorrect: false },
      { option: 'Parque Nacional Lower Zambezi', isCorrect: false },
      { option: 'Parque Nacional Mosi-oa-Tunya', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#008000',
    explanation:
      'O Parque Nacional Kafue é o maior parque nacional da Zâmbia, conhecido por sua grande biodiversidade.',
    country: 'Zâmbia',
  },
  {
    question: "Quem é conhecido como o 'Pai da Independência do Quênia'?",
    options: [
      { option: 'Jomo Kenyatta', isCorrect: true },
      { option: 'Daniel arap Moi', isCorrect: false },
      { option: 'Uhuru Kenyatta', isCorrect: false },
      { option: 'Raila Odinga', isCorrect: false },
    ],
    category: 'História',
    color: '#006B3F',
    explanation:
      'Jomo Kenyatta foi o primeiro presidente do Quênia e é amplamente reconhecido como o Pai da Independência do país.',
    country: 'Quênia',
  },
  {
    question: "Qual país é conhecido como o 'Berço da Humanidade'?",
    options: [
      { option: 'Etiópia', isCorrect: true },
      { option: 'Egito', isCorrect: false },
      { option: 'África do Sul', isCorrect: false },
      { option: 'Nigéria', isCorrect: false },
    ],
    category: 'História',
    color: '#DA291C',
    explanation:
      "A Etiópia é conhecida como o 'Berço da Humanidade' devido aos muitos fósseis de hominídeos antigos encontrados no país.",
    country: 'Etiópia',
  },
  {
    question:
      'Qual país africano foi o primeiro a obter independência em 1951?',
    options: [
      { option: 'Líbia', isCorrect: true },
      { option: 'Gana', isCorrect: false },
      { option: 'Nigéria', isCorrect: false },
      { option: 'Egito', isCorrect: false },
    ],
    category: 'História',
    color: '#239E46',
    explanation:
      'A Líbia foi o primeiro país africano a obter independência em 1951, após ser um território sob administração italiana.',
    country: 'Líbia',
  },
  {
    question: "Qual líder africano foi conhecido como o 'Leão de Judá'?",
    options: [
      { option: 'Haile Selassie', isCorrect: true },
      { option: 'Kwame Nkrumah', isCorrect: false },
      { option: 'Jomo Kenyatta', isCorrect: false },
      { option: 'Nelson Mandela', isCorrect: false },
    ],
    category: 'História',
    color: '#DA291C',
    explanation:
      "Haile Selassie, imperador da Etiópia, foi conhecido como o 'Leão de Judá' e é uma figura central no movimento Rastafari.",
    country: 'Etiópia',
  },
  {
    question: 'Qual foi a capital do antigo Reino do Congo?',
    options: [
      { option: "M'banza-Kongo", isCorrect: true },
      { option: 'Léopoldville', isCorrect: false },
      { option: 'Luanda', isCorrect: false },
      { option: 'Kinshasa', isCorrect: false },
    ],
    category: 'História',
    color: '#00A3E0',
    explanation:
      "M'banza-Kongo foi a capital do antigo Reino do Congo, um dos maiores e mais influentes reinos da África Central.",
    country: 'República Democrática do Congo',
  },
  {
    question:
      'Quem foi a primeira mulher a se tornar chefe de estado na África?',
    options: [
      { option: 'Ellen Johnson Sirleaf', isCorrect: true },
      { option: 'Winnie Mandela', isCorrect: false },
      { option: 'Graca Machel', isCorrect: false },
      { option: 'Joyce Banda', isCorrect: false },
    ],
    category: 'História',
    color: '#A81C07',
    explanation:
      'Ellen Johnson Sirleaf foi a primeira mulher a se tornar chefe de estado na África, servindo como presidente da Libéria de 2006 a 2018.',
    country: 'Libéria',
  },
  {
    question: 'Qual país foi o último a abolir a escravidão, em 1981?',
    options: [
      { option: 'Mauritânia', isCorrect: true },
      { option: 'Somália', isCorrect: false },
      { option: 'Sudão', isCorrect: false },
      { option: 'Chade', isCorrect: false },
    ],
    category: 'História',
    color: '#007847',
    explanation:
      'Mauritânia foi o último país do mundo a abolir oficialmente a escravidão, em 1981.',
    country: 'Mauritânia',
  },
  {
    question:
      'Quem foi o primeiro presidente da República Democrática do Congo?',
    options: [
      { option: 'Joseph Kasa-Vubu', isCorrect: true },
      { option: 'Mobutu Sese Seko', isCorrect: false },
      { option: 'Patrice Lumumba', isCorrect: false },
      { option: 'Laurent-Désiré Kabila', isCorrect: false },
    ],
    category: 'História',
    color: '#0033A0',
    explanation:
      'Joseph Kasa-Vubu foi o primeiro presidente da República Democrática do Congo, servindo de 1960 a 1965.',
    country: 'República Democrática do Congo',
  },
  {
    question: 'Qual evento marcou o início da descolonização na África?',
    options: [
      { option: 'Conferência de Bandung', isCorrect: true },
      { option: 'Independência de Gana', isCorrect: false },
      { option: 'Criação da União Africana', isCorrect: false },
      { option: 'Independência da Nigéria', isCorrect: false },
    ],
    category: 'História',
    color: '#FFD700',
    explanation:
      'A Conferência de Bandung, realizada em 1955, marcou o início da descolonização na África e na Ásia, reunindo líderes de países recém-independentes.',
    country: 'Indonésia (relevante para a África)',
  },
  {
    question: 'Quem foi o líder da luta pela independência do Zimbábue?',
    options: [
      { option: 'Robert Mugabe', isCorrect: true },
      { option: 'Julius Nyerere', isCorrect: false },
      { option: 'Samora Machel', isCorrect: false },
      { option: 'Kenneth Kaunda', isCorrect: false },
    ],
    category: 'História',
    color: '#00A1DE',
    explanation:
      'Robert Mugabe foi um dos principais líderes da luta pela independência do Zimbábue, tornando-se o primeiro primeiro-ministro do país em 1980.',
    country: 'Zimbábue',
  },
  {
    question:
      'Qual civilização antiga é conhecida por suas obras de arte em bronze?',
    options: [
      { option: 'Civilização de Benin', isCorrect: true },
      { option: 'Civilização de Gana', isCorrect: false },
      { option: 'Civilização de Mali', isCorrect: false },
      { option: 'Civilização de Songhai', isCorrect: false },
    ],
    category: 'História',
    color: '#FFD700',
    explanation:
      'A civilização de Benin, localizada no atual sul da Nigéria, é conhecida por suas sofisticadas obras de arte em bronze, especialmente as cabeças de Benin.',
    country: 'Nigéria',
  },
  {
    question: 'Qual líder africano recebeu o Prêmio Nobel da Paz em 1984?',
    options: [
      { option: 'Desmond Tutu', isCorrect: true },
      { option: 'Nelson Mandela', isCorrect: false },
      { option: 'Wangari Maathai', isCorrect: false },
      { option: 'Kofi Annan', isCorrect: false },
    ],
    category: 'História',
    color: '#007847',
    explanation:
      'Desmond Tutu, arcebispo sul-africano, recebeu o Prêmio Nobel da Paz em 1984 por seu trabalho na luta contra o apartheid na África do Sul.',
    country: 'África do Sul',
  },
  {
    question: 'Quem foi o primeiro presidente de Angola?',
    options: [
      { option: 'Agostinho Neto', isCorrect: true },
      { option: 'José Eduardo dos Santos', isCorrect: false },
      { option: 'Jonas Savimbi', isCorrect: false },
      { option: 'Manuel Vicente', isCorrect: false },
    ],
    category: 'História',
    color: '#CE1126',
    explanation:
      'Agostinho Neto foi o primeiro presidente de Angola, liderando o país à independência de Portugal em 1975.',
    country: 'Angola',
  },
  {
    question:
      'Qual foi o principal movimento de resistência contra o apartheid na África do Sul?',
    options: [
      { option: 'Congresso Nacional Africano (ANC)', isCorrect: true },
      { option: 'Pan Africanist Congress (PAC)', isCorrect: false },
      { option: 'South African Communist Party (SACP)', isCorrect: false },
      { option: 'Inkatha Freedom Party (IFP)', isCorrect: false },
    ],
    category: 'História',
    color: '#007847',
    explanation:
      'O Congresso Nacional Africano (ANC) foi o principal movimento de resistência contra o apartheid na África do Sul, com Nelson Mandela como um de seus líderes mais proeminentes.',
    country: 'África do Sul',
  },
  {
    question: 'Qual é o idioma principal falado na região norte da África?',
    options: [
      { option: 'Árabe', isCorrect: true },
      { option: 'Suaíli', isCorrect: false },
      { option: 'Zulu', isCorrect: false },
      { option: 'Amárico', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#A52A2A',
    explanation:
      'O árabe é amplamente falado na região norte da África, especialmente em países como Egito, Marrocos e Argélia.',
    country: 'Vários países do norte da África',
  },
  {
    question:
      'Qual é a cerimônia tradicional de iniciação dos meninos Zulu na África do Sul?',
    options: [
      { option: 'Ukuthwasa', isCorrect: true },
      { option: 'Circuncisão', isCorrect: false },
      { option: 'Boma', isCorrect: false },
      { option: 'Jigida', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FFD700',
    explanation:
      'Ukuthwasa é uma cerimônia tradicional Zulu que marca a transição de meninos para a vida adulta na África do Sul.',
    country: 'África do Sul',
  },
  {
    question:
      'Qual é o prato nacional da Etiópia, frequentemente servido com injera?',
    options: [
      { option: 'Doro Wat', isCorrect: true },
      { option: 'Jollof Rice', isCorrect: false },
      { option: 'Bunny Chow', isCorrect: false },
      { option: 'Kisra', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FF4500',
    explanation:
      'Doro Wat é um prato tradicional etíope de frango cozido com especiarias, frequentemente servido com injera, um pão fermentado.',
    country: 'Etiópia',
  },
  {
    question:
      'Qual é a dança tradicional popular em Mali conhecida por sua energia e acrobacias?',
    options: [
      { option: 'Dansa de Djembe', isCorrect: true },
      { option: 'Kizomba', isCorrect: false },
      { option: 'Samba', isCorrect: false },
      { option: 'Mambo', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#228B22',
    explanation:
      'A Dança de Djembe é uma dança tradicional popular em Mali, conhecida por sua energia vibrante e movimentos acrobáticos.',
    country: 'Mali',
  },
  {
    question:
      'Qual festival religioso é celebrado anualmente na cidade de Timbuktu, Mali?',
    options: [
      { option: 'Festival do Maulid', isCorrect: true },
      { option: 'Festival de Diwali', isCorrect: false },
      { option: 'Festival de Navratri', isCorrect: false },
      { option: 'Festival de Holi', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#800080',
    explanation:
      'O Festival do Maulid é uma celebração religiosa anual em Timbuktu, Mali, comemorando o nascimento do profeta Maomé.',
    country: 'Mali',
  },
  {
    question:
      'Qual é a forma de arte tradicional praticada pelos Tuaregues do Saara?',
    options: [
      { option: 'Prata e Joalheria', isCorrect: true },
      { option: 'Escultura em Madeira', isCorrect: false },
      { option: 'Tecer Tapetes', isCorrect: false },
      { option: 'Pintura', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#4682B4',
    explanation:
      'Os Tuaregues são conhecidos por suas habilidades em criar joias de prata e outros ornamentos, uma prática cultural tradicional no Saara.',
    country: 'Vários países do Saara',
  },
  {
    question:
      'Qual festival é conhecido como o maior festival de máscaras da África, realizado em Burkina Faso?',
    options: [
      { option: 'FESTIMA', isCorrect: true },
      { option: 'FESPACO', isCorrect: false },
      { option: 'Carnaval de Dakar', isCorrect: false },
      { option: 'Festival de Lagos', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FF6347',
    explanation:
      'FESTIMA (Festival Internacional de Máscaras e Artes) é o maior festival de máscaras da África, realizado bienalmente em Burkina Faso.',
    country: 'Burkina Faso',
  },
  {
    question:
      'Qual é a cerimônia tradicional dos Maasai no Quênia que marca a transição dos jovens para a idade adulta?',
    options: [
      { option: 'Eunoto', isCorrect: true },
      { option: 'Ukuthwasa', isCorrect: false },
      { option: 'Imbeleko', isCorrect: false },
      { option: 'Jigida', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#B22222',
    explanation:
      'Eunoto é a cerimônia tradicional dos Maasai no Quênia que marca a transição dos jovens guerreiros para a idade adulta.',
    country: 'Quênia',
  },
  {
    question:
      'Qual é o principal evento cultural anual realizado em Durban, África do Sul?',
    options: [
      { option: 'Festival Internacional de Cinema de Durban', isCorrect: true },
      { option: 'Carnaval de Cape Town', isCorrect: false },
      { option: 'Festival de Música de Grahamstown', isCorrect: false },
      { option: 'Festival de Jazz de Joanesburgo', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FF8C00',
    explanation:
      'O Festival Internacional de Cinema de Durban é um dos eventos culturais mais importantes da África do Sul, realizado anualmente em Durban.',
    country: 'África do Sul',
  },
  {
    question:
      'Qual país africano é conhecido por sua rica tradição de contos orais, especialmente as histórias dos griots?',
    options: [
      { option: 'Mali', isCorrect: true },
      { option: 'Etiópia', isCorrect: false },
      { option: 'Quênia', isCorrect: false },
      { option: 'Gana', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FFD700',
    explanation:
      'Mali é conhecido por sua rica tradição de contos orais, especialmente através dos griots, que são contadores de histórias, músicos e historiadores.',
    country: 'Mali',
  },
  {
    question:
      'Qual é a arte marcial tradicional praticada na região do Magrebe, especialmente no Marrocos?',
    options: [
      { option: 'Fantasia', isCorrect: true },
      { option: 'Capoeira', isCorrect: false },
      { option: 'Ngolo', isCorrect: false },
      { option: 'Krav Maga', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#C1272D',
    explanation:
      'Fantasia é uma arte marcial tradicional praticada na região do Magrebe, especialmente no Marrocos, conhecida por sua exibição equestre.',
    country: 'Marrocos',
  },
  {
    question:
      'Qual é a prática espiritual tradicional dos povos San do deserto do Kalahari?',
    options: [
      { option: 'Dança de Cura', isCorrect: true },
      { option: 'Ukuthwasa', isCorrect: false },
      { option: 'Eunoto', isCorrect: false },
      { option: 'Imbeleko', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#A52A2A',
    explanation:
      'A Dança de Cura é uma prática espiritual tradicional dos povos San do deserto do Kalahari, usada para curar e conectar com o mundo espiritual.',
    country: 'Botswana e Namíbia',
  },
  {
    question: 'Qual é a capital de Moçambique?',
    options: [
      { option: 'Maputo', isCorrect: true },
      { option: 'Beira', isCorrect: false },
      { option: 'Nampula', isCorrect: false },
      { option: 'Tete', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#007847',
    explanation:
      'Maputo é a capital e a maior cidade de Moçambique, localizada no sul do país.',
    country: 'Moçambique',
  },
  {
    question: 'Qual é a maior ilha da África?',
    options: [
      { option: 'Madagáscar', isCorrect: true },
      { option: 'Ilhas Seychelles', isCorrect: false },
      { option: 'Ilha de Moçambique', isCorrect: false },
      { option: 'Ilha de Zanzibar', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#4CAF50',
    explanation:
      'Madagáscar é a maior ilha da África e a quarta maior ilha do mundo, localizada no Oceano Índico.',
    country: 'Madagáscar',
  },
  {
    question: 'Qual é a principal língua falada em Madagáscar?',
    options: [
      { option: 'Malgaxe', isCorrect: true },
      { option: 'Inglês', isCorrect: false },
      { option: 'Francês', isCorrect: false },
      { option: 'Suaíli', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#FF5722',
    explanation:
      'O Malgaxe é a língua oficial e mais falada em Madagáscar, juntamente com o francês.',
    country: 'Madagáscar',
  },
  {
    question: 'Qual é o maior produtor de diamantes da África?',
    options: [
      { option: 'Botswana', isCorrect: true },
      { option: 'África do Sul', isCorrect: false },
      { option: 'Angola', isCorrect: false },
      { option: 'Namíbia', isCorrect: false },
    ],
    category: 'Economia',
    color: '#8B0000',
    explanation:
      'Botswana é o maior produtor de diamantes da África, contribuindo significativamente para sua economia.',
    country: 'Botswana',
  },
  {
    question:
      'Quem foi a primeira mulher africana a ganhar o Prêmio Nobel da Paz?',
    options: [
      { option: 'Wangari Maathai', isCorrect: true },
      { option: 'Ellen Johnson Sirleaf', isCorrect: false },
      { option: 'Leymah Gbowee', isCorrect: false },
      { option: 'Graça Machel', isCorrect: false },
    ],
    category: 'História',
    color: '#008000',
    explanation:
      'Wangari Maathai, uma ambientalista do Quênia, ganhou o Prêmio Nobel da Paz em 2004 por seu trabalho no movimento Cinturão Verde.',
    country: 'Quênia',
  },
  {
    question: 'Qual é a principal religião praticada na África?',
    options: [
      { option: 'Cristianismo', isCorrect: true },
      { option: 'Islamismo', isCorrect: false },
      { option: 'Hinduísmo', isCorrect: false },
      { option: 'Budismo', isCorrect: false },
    ],
    category: 'Religião',
    color: '#FFD700',
    explanation:
      'O Cristianismo é a religião mais praticada na África, seguido pelo Islamismo.',
    country: 'Vários países',
  },
  {
    question:
      'Qual país africano é famoso pelo safári e pelo Parque Nacional Serengeti?',
    options: [
      { option: 'Tanzânia', isCorrect: true },
      { option: 'Quênia', isCorrect: false },
      { option: 'África do Sul', isCorrect: false },
      { option: 'Namíbia', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#FFA500',
    explanation:
      'A Tanzânia é famosa por seus safáris e pelo Parque Nacional Serengeti, um dos mais famosos destinos de vida selvagem do mundo.',
    country: 'Tanzânia',
  },
  {
    question: 'Qual é a maior montanha da África do Norte?',
    options: [
      { option: 'Jebel Toubkal', isCorrect: true },
      { option: 'Monte Sinai', isCorrect: false },
      { option: 'Montes Atlas', isCorrect: false },
      { option: 'Montanhas Ruwenzori', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#B22222',
    explanation:
      'Jebel Toubkal é a montanha mais alta da África do Norte, localizada no Marrocos, com 4.167 metros de altitude.',
    country: 'Marrocos',
  },
  {
    question:
      'Qual é o nome do tradicional pão etíope usado como base para muitos pratos?',
    options: [
      { option: 'Injera', isCorrect: true },
      { option: 'Pita', isCorrect: false },
      { option: 'Naan', isCorrect: false },
      { option: 'Chapati', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#FF6347',
    explanation:
      'Injera é um pão fermentado tradicional da Etiópia, usado como base para muitos pratos na culinária etíope.',
    country: 'Etiópia',
  },
  {
    question:
      'Qual país africano é conhecido por suas antigas civilizações e pelas pirâmides de Gizé?',
    options: [
      { option: 'Egito', isCorrect: true },
      { option: 'Sudão', isCorrect: false },
      { option: 'Marrocos', isCorrect: false },
      { option: 'Líbia', isCorrect: false },
    ],
    category: 'História',
    color: '#DAA520',
    explanation:
      'O Egito é conhecido por suas antigas civilizações e pelas pirâmides de Gizé, que são uma das Sete Maravilhas do Mundo Antigo.',
    country: 'Egito',
  },
  {
    question:
      'Qual é a capital do Senegal, conhecida por sua rica herança cultural?',
    options: [
      { option: 'Dakar', isCorrect: true },
      { option: 'Banjul', isCorrect: false },
      { option: 'Bamako', isCorrect: false },
      { option: 'Conacri', isCorrect: false },
    ],
    category: 'Geografia',
    color: '#FF4500',
    explanation:
      'Dakar é a capital do Senegal, conhecida por sua rica herança cultural e histórica.',
    country: 'Senegal',
  },
  {
    question: 'Qual é a língua oficial de Cabo Verde?',
    options: [
      { option: 'Português', isCorrect: true },
      { option: 'Francês', isCorrect: false },
      { option: 'Crioulo', isCorrect: false },
      { option: 'Inglês', isCorrect: false },
    ],
    category: 'Línguas',
    color: '#00008B',
    explanation:
      'O português é a língua oficial de Cabo Verde, usada em todas as funções administrativas e educacionais.',
    country: 'Cabo Verde',
  },
  {
    question:
      'Qual é a dança tradicional associada ao festival de Gnaoua no Marrocos?',
    options: [
      { option: 'Gnaoua', isCorrect: true },
      { option: 'Djembe', isCorrect: false },
      { option: 'Tango', isCorrect: false },
      { option: 'Samba', isCorrect: false },
    ],
    category: 'Cultura',
    color: '#8A2BE2',
    explanation:
      'Gnaoua é uma dança e música tradicional associada ao festival de Gnaoua, realizado anualmente em Essaouira, Marrocos.',
    country: 'Marrocos',
  },
]
