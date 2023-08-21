import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Button from "./Button";

const Hero = () => (
  <section
    id="home"
    className="max-container flex min-h-screen w-full flex-col justify-center gap-10 p-2 xl:flex-row"
  >
    <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
      <p className="font-montserrat text-xl text-coral-red">
        Our Summer Collection
      </p>
      <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
        <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
          The New Arrival
        </span>
        <br />
        <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
      </h1>
      <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
        Discover stylish with new Nike products with good quality, comfort and
        innovation for your healthy lifestyle.
      </p>
      <Button label="Show now" iconURL={arrowRight} />
      <div className="flax-wrap mt-20 flex w-full items-start justify-start gap-16">
        {statistics.map((stat) => (
          <div key={stat.label}>
            <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
            <p className="font-montserrat leading-7 text-slate-gray">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex-container relative flex flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img
        src={bigShoe1}
        alt="shoe collection"
        width={610}
        height={500}
        className="relative z-10 object-contain "
      />

      <div>
        {shoes.map((shoe) => (
          <div key={shoe}>
            <ShoeCard/>
          </div>))}
      </div>
    </div>
  </section>
);

export default Hero;
