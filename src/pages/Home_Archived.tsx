import Hero from '../components/Hero'
import FeaturedCars from '../components/FeaturedCars'
import ValueProps from '../components/ValueProps'
import SellCTA from '../components/SellCTA'

interface HomeProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
}

import { useEffect } from 'react'

const Home = ({ searchQuery, setSearchQuery }: HomeProps) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <main>
            <div className="reveal revealed">
                <Hero onSearch={setSearchQuery} />
            </div>

            <div className="reveal">
                <FeaturedCars query={searchQuery} maxPrice={Infinity} />
            </div>

            <div className="reveal">
                <ValueProps />
            </div>

            <div className="reveal">
                <SellCTA />
            </div>
        </main>
    )
}

export default Home
