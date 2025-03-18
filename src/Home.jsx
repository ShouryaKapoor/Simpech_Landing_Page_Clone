import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Cloud, 
  Layout, 
  Rocket, 
  PenTool, 
  MousePointer,
  Send,
  Check
} from 'lucide-react';

const Header = () => (
  <motion.header 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-lg"
  >
    <div className="container mx-auto flex items-center justify-between p-4">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2"
      >
        <h1 className="font-bold text-2xl text-blue-600">Simpech
        <span className="text-[10px] text-black ml-1">SIMPLICITY IN TECHNOLOGY</span>
        </h1>
       
      </motion.div>
      <nav className="flex space-x-5">
        {['Home', 'Products', 'Services', 'Contact'].map((item) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </nav>
    </div>
  </motion.header>
);

const Intro = () => (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-5xl font-bold mb-6 text-gray-800"
      >
        Transforming Ideas into Digital Reality
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl text-blue-600 max-w-2xl mx-auto mb-8"
      >
        Empowering Your Business with Cutting-Edge Technology Solutions
      </motion.p>
       <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-[18px] text-gray-600 max-w-2xl mx-auto mb-8"
      >At Simpech, we don't just build software – we craft digital experiences that drive growth, enhance efficiency, and revolutionize the way you do business. Discover our suite of innovative products designed to meet your unique needs.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-all"
      >
        Explore Products <ArrowRight className="inline ml-2" />
      </motion.button>
    </div>
  </motion.section>
);

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(null);
  const products = [
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: 'Virtual Classroom',
      description: 'Revolutionize online learning with our state-of-the-art virtual classroom platform.',
      features: [
        'Real-time collaboration',
        'Interactive whiteboard',
        'Performance analytics'
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-indigo-500" />,
      title: 'Cloud Recorder',
      description: 'Capture and store web content effortlessly with our advanced Cloud Recorder API.',
      features: [
        'Seamless recording',
        'Secure cloud storage',
        'Easy sharing'
      ]
    },
    {
      icon: <Layout className="w-12 h-12 text-green-500" />,
      title: 'Document Converter',
      description: 'Transform documents seamlessly between various formats with our powerful Converter API.',
      features: [
        'Multi-format support',
        'Batch conversion',
        'Preserves formatting'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Innovative Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.title}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveProduct(product)}
              className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer 
                ${activeProduct === product ? 'border-2 border-blue-500' : ''}`}
            >
              <div className="flex items-center mb-4">
                {product.icon}
                <h3 className="text-xl text-black font-semibold ml-4">{product.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {activeProduct === product && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <h4 className="font-semibold mb-2 text-black">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      icon: <Rocket className="w-10 h-10 text-purple-500" />, 
      title: 'Web Development', 
      description: 'Create stunning, high-performance websites that captivate your audience.'
    },
    { 
      icon: <PenTool className="w-10 h-10 text-pink-500" />, 
      title: 'UX/UI Design', 
      description: 'Design unforgettable digital experiences with expert UI/UX services.'
    },
    { 
      icon: <MousePointer className="w-10 h-10 text-teal-500" />, 
      title: 'Custom Software', 
      description: 'Tailored software solutions to streamline your business operations.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Comprehensive Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              key={service.title}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductDescription = () => (
  <section className="py-20 bg-blue-50" id="product-description">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-600">Dive Deeper into Our Solutions</h2>
        <p className="text-gray-700 mb-4">
          Our products are meticulously crafted to address the most complex business challenges. 
          With cutting-edge technology and intuitive design, we provide solutions that not only 
          meet but exceed your expectations.
        </p>
        <ul className="space-y-3 mb-6 text-gray-600">
          {[
            'Scalable and Flexible Architecture',
            'Advanced Security Protocols',
            'Seamless Integration Capabilities'
          ].map((item) => (
            <li key={item} className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-3" />
              {item}
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          Learn More
        </motion.button>
      </div>
      <div className="w-1/2">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <img 
            src="/api/placeholder/500/400" 
            alt="Product Description" 
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Trust = () => {
  const trustData = [
    {
      icon: '💡',
      title: 'Innovative Products',
      description: 'Cutting-edge solutions to give you a competitive edge.'
    },
    {
      icon: '🔒',
      title: 'Robust Security',
      description: 'Industry-leading security measures to protect your data.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Expert team always ready to assist you.'
    }
  ];

  return (
    <section className="py-20 bg-gray-100" id="trust">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Trust Simpech ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trustData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-sky-200" id="contact">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Contact Our Experts
          </h2>
          {!submitted ? (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-4 text-gray-600">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center"
                >
                  <Send className="mr-2" /> Send Message
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-4 flex justify-center text-green-500">
                <Check />
              </div>
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-600">
                We'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-blue-500">Simpech</h3>
        <p className="text-gray-400">
          Empowering businesses through innovative technology solutions.
        </p>
        {/* <div className="flex space-x-4 mt-6">
          <a href="#" className="hover:text-blue-500"><Facebook /></a>
          <a href="#" className="hover:text-blue-500"><Instagram /></a>
          <a href="#" className="hover:text-blue-500"><Linkedin /></a>
          <a href="#" className="hover:text-blue-500"><Twitter /></a>
        </div> */}
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'Products', 'Services', 'Contact'].map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-blue-500">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Our Products</h4>
        <ul className="space-y-2">
          {['Virtual Classroom', 'Cloud Recorder', 'Document Converter'].map((product) => (
            <li key={product}>
              <a href="#" className="hover:text-blue-500">{product}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact Info</h4>
        <ul className="space-y-2">
          <li>Email: support@simpech.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 Tech Lane, Innovation City</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
      <p className="text-gray-500">
        © 2025 Simpech. All Rights Reserved.
      </p>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <Intro />
      <Products />
      <Services />
      <ProductDescription />
      <Trust />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
