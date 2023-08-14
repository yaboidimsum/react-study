/* eslint-disable no-unused-vars */
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="hidden sm:block" /> in few easy
      </h2>
      <p className={`${styles.paragraph} mt-5 max-w-[540px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="h-[100%] w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
