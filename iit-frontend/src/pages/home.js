import Hero from '../components/hero'
import Footer from '../components/footer'
import RankPredictor from '../components/rankPredictor';
const Home=()=>{
    return(
       <div className="home">
         <Hero/>
         <RankPredictor/>
         <Footer/>
       </div>
    )
}

export default Home;