import Hero from '../components/Hero'
import FeaturedCars from '../components/FeaturedCars'

interface HomeProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
}

const Home = ({ searchQuery, setSearchQuery }: HomeProps) => {
    return (
        <main>
            <div className="reveal revealed">
                <Hero onSearch={setSearchQuery} />
            </div>
            <div className="reveal">
                <FeaturedCars query={searchQuery} maxPrice={Infinity} />
            </div>
        </main>
    )
}

export default Home
