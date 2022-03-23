import { Welcome } from './components/Welcome';
import { Counter } from './components/Counter';

const user = {
  name: 'Caio Lucas',
  surname: 'Pereira da Silva',
  image: 'https://github.com/caiulucas.png'
}

export function App() {
  return (
    <>
      <Welcome user={user} />
      <Counter />
    </>
  );;
}