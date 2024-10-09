import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-amber-600 to-yellow-300 text-white py-12 px-4 mb-20 rounded-lg shadow-lg">
      <p className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Looking to hire? <br className="sm:block hidden" />
        I'm available for work!
      </p>
      <Link
        to="/contact"
        className="bg-white text-amber-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-50 transition-all duration-300"
      >
        Contact me
      </Link>
    </section>

  );
};

export default CTA;
