import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="client"
    className={`${styles.paddingY} ${styles.flexCenter} relative flex-col`}
  >
    <div className="blue__gradient absolute -right-[50%] z-[0] h-[60%] w-[60%] rounded-full" />

    <div className="relative z-[1] mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
      <h2 className={styles.heading2}>
        What people are <br className="hidden sm:block" /> saying about us.
      </h2>

      <div className="mt-6 w-full max-w-[450px] md:mt-0">
        <p className={styles.paragraph}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
