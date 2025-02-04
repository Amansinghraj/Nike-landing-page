import { CustomerReviews, 
  Footer, 
  Hero, 
  PopularProduct, 
  Services, 
  SpecialOffers, 
  Subscribe, 
  SuperQuality 
  
} from "./sections"
import Nav from "./components/Nav"

function App() {


  return (
    <>
      <main className="relative ">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className="padding">
         <PopularProduct/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews/>
        </section>
        <section className="padding-x py-16 sm:py-32 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8 ">
          <Footer/>
        </section>
      </main>
    </>
  )
}

export default App
