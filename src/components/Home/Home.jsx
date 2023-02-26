import './Home.css'
 import Card from '../Card/Card'
 import Cards from '../Cards/Cards'
 import SearchBar from '../SearchBar/SearchBar'
 import dogs, { Rick } from '../../doge'

function Home() {
  return (
    <div className='Home' style={{ padding: '25px' }}>
      <div>
        <Card
          name={Rick.name}
          breed_group={Rick.breed_group}
          life_span={Rick.life_span}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          dogs={dogs}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(dogID) => window.alert(dogID)}
        />
      </div>
    </div>
  )
}

export default Home;
