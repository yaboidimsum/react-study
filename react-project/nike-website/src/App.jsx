import {
  Hero,
  Nav,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Components";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-pale-blue ">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:pt-32">
        <Subscribe />
      </section>
      <section className="padding padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </section>
  </main>
);

export default App;