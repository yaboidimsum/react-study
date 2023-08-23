import { arrowRight } from "../assets/icons";
import offer from "../assets/images/offer.svg";
import Button from "./Button";

const SpecialOffers = () => {
  return (
    <section className="justify-wrap max-container flex items-center gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
          <br />
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines you experience with
          unbeatable deals. From premier selections to incredible sabings, we
          offer unparalleled value that sets us apart from the rest
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your jounrey with us is
          nothing short of exceptions
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
