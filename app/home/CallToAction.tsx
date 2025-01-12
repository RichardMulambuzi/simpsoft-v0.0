import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl mb-4">
          Transform Your Vision Into Reality
        </h2>
        <p className="text-lg text-white mb-8">
          Partner with Simpsoft Tech to create intelligent, scalable solutions
          that solve real-world challenges and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/services" passHref>
            <button className="inline-block bg-secondary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary/80 transition duration-300">
              Explore Our Services
            </button>
          </Link>
          <Link href="/contact" passHref>
            <button className="inline-block bg-white text-secondary py-3 px-6 rounded-lg border border-secondary shadow-md hover:bg-gray-100 transition duration-300">
              Get a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
