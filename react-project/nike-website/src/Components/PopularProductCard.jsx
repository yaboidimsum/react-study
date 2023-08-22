import star from "../assets/icons/star.svg";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex w-full flex-1 flex-col max-sm:w-full">
      <img src={imgURL} alt={name} className="h-[280px] w-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          4.5
        </p>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-semibold leading-normal">
          {name}
        </h3>
        <p className="mt-2 font-montserrat text-2xl font-semibold leading-normal text-coral-red">
          {price}
        </p>
    </div>
  );
};

export default PopularProductCard;
