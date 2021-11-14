import { loadStripe } from "@stripe/stripe-js";
let stripePromise;
const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51JvDF7DJmRsqnuwWuwUOrshddJRJplFlaexZSskTZnXPVNBvqI9gJO78d0GlndlK801r3qMSnZY1kbNirvZszLUp00GWJpOYJv"
    );
  }
  return stripePromise;
};
export default initializeStripe;
