import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 570,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-900 text-white pt-8 pb-2 mt-16">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-start">
          <Link
            to={paths.HOME}
            className="text-3xl font-bold text-primary mb-6"
          >
            RENTACAR
          </Link>
          <p className="text-sm text-gray-400">
            Rent a car with ease and enjoy the ride. Discover our wide selection
            of vehicles for every occasion.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg text-gray-200 mb-6">
            Quick Links
          </h3>
          <ul>
            <li>
              <Link
                to={paths.HOME}
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={paths.RESERVATIONS}
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Our Cars
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Rental Information
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg text-gray-200 mb-6">
            Customer Support
          </h3>
          <ul>
            <li>
              <Link
                to=""
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Payment Methods
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-sm text-gray-400 hover:text-white mb-3"
              >
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-lg text-gray-200 mb-6">
            Book Your Ride
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Ready for your next adventure? Book a car now and hit the road with
            comfort and style!
          </p>
          <Link
            onClick={scrollToTop}
            to={paths.HOME}
            className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-all"
          >
            Rent Now
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 py-6 mt-12">
        <div className="container flex justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 RENTACAR. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link to="" className="text-sm text-gray-400 hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
