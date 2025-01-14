import React, { useState } from 'react';
import { sendEmail } from '../utilities/sendEmail';
import { treePaper } from '../assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      await sendEmail({ email, message: 'want get connection from latest news' });
      setIsSuccess(true);
      setEmail(''); // Clear the input field
    } catch (error) {
      setErrorMessage('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#263c28] py-10 px-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start">
        {/* Left Section */}
        <div className="flex flex-col gap-8 w-full md:w-2/3 mb-8 md:mb-0">
          <div className="flex items-center">
            <div className="text-[#f7c35f] text-3xl w-fit font-normal font-primary">
              template 1
            </div>
            <img
              className="w-[40px] h-[30px] sm:w-[60px] sm:h-[50px] animate-pulse ml-4"
              src={treePaper}
              alt="Farm Logo"
            />
          </div>
          <div className="text-white text-base font-semibold leading-6">
            From our farm to your table, with love and care. 🌱🍅🥕
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/3 mb-8 md:mb-0">
          <div className="text-xl font-semibold font-['Livvic'] mb-4">
            Useful Links
          </div>
          <ul className="space-y-2 text-sm font-semibold font-['Lora'] flex flex-col">
            {/* <li>Fresh Vegetables</li>
            <li>Fresh Fruits</li>
            <li>Frozen</li> */}
            <Link  to={'about'}>About Us</Link>
            <Link to={'contact'} >Contact Us</Link>
            <Link to={'products'} >products</Link>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <div>
            <div className="text-xl font-semibold font-['Livvic'] mb-4">
              Newsletter
            </div>
            <div className="text-base font-semibold font-['Lora'] leading-6">
              Subscribe to our Newsletter and receive updates via email.
            </div>
          </div>
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here..."
              className="w-full h-14 bg-[#263c28] text-white placeholder-white/50 rounded-full px-6 py-2 mb-4"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#f7c35f] text-[#1a1a1a] rounded-full px-4 py-2 font-medium font-['Livvic'] uppercase"
            >
              {isSubmitting ? 'Submitting...' : 'Go'}
            </button>
          </form>

          {isSuccess && <div className="text-green-500">Subscribed successfully!</div>}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs rounded-2xl bg-[#f7c35f] px-4 py-2 font-thin font-primary opacity-35">
          <a
            href="https://www.codeocean.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline mb-2 sm:mb-0"
          >
            Copyright ©codeocean.
          </a>
          {/* <div className="flex gap-4">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
