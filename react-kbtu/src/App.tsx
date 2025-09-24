import './App.css'
import Card from './components/partials/Card/Card'
import Header from './components/partials/Header/Header'
import type { CardProps } from './types/card'

const cards: CardProps = {
  title: 'Short info',
  fields: [
    {
      title: 'Fullname',
      value: 'Arlan Zhumagulov'
    },
    {
      title: 'ID',
      value: '22B030488'
    },
    {
      title: 'Course',
      value: 'Information Systems'
    }
  ]
}

function App() {

  return (
    <div className='app-wrapper'>
    <Header/>
    <Card props = {cards}
    />
    </div>
  )
}

export default App
