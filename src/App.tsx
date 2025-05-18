import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

// Import custom Swiper styles
import './swiper.css'

const App = () => {
  const [email, setEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const features = [
    {
      title: "Custom Software Development",
      description: "We build tailored solutions that perfectly match your business needs and goals.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Create powerful mobile experiences with our expert app development services.",
      icon: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing with our scalable and secure solutions.",
      icon: "☁️"
    },
    {
      title: "Technical Consulting",
      description: "Get expert guidance to make informed decisions about your technology strategy.",
      icon: "🎯"
    }
  ]

  const techStack = [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Laravel', icon: 'https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg', isLarge: true },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>,
      href: '#'
    },
    {
      name: 'X',
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>,
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>,
      href: '#'
    },
    {
      name: 'GitHub',
      icon: <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>,
      href: '#'
    }
  ]

  const galleryItems = [
    {
      title: "Web Development",
      image: "/images/gallery/web-dev.jpg",
      description: "Custom web applications using React, Vue.js, and Laravel"
    },
    {
      title: "Mobile App Development",
      image: "/images/gallery/mobile-dev.jpg",
      description: "Native and cross-platform apps with Flutter and React Native"
    },
    {
      title: "E-commerce Solutions",
      image: "/images/gallery/ecommerce.jpg",
      description: "Online stores and marketplaces with secure payment integration"
    },
    {
      title: "Enterprise Software",
      image: "/images/gallery/enterprise.jpg",
      description: "Scalable business solutions and management systems"
    },
    {
      title: "Cloud Infrastructure",
      image: "/images/gallery/cloud.jpg",
      description: "AWS and Google Cloud based solutions for modern businesses"
    },
    {
      title: "UI/UX Design",
      image: "/images/gallery/design.jpg",
      description: "Modern and intuitive user interfaces for web and mobile"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Thanks for subscribing! 🎉', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#4ade80',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
        icon: '✨'
      })
      console.log('Email submitted:', email)
      setEmail('')
    } else {
      toast.error('Please enter your email address', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
      })
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (contactForm.name && contactForm.email && contactForm.subject && contactForm.message) {
      toast.success('Message sent successfully! 🚀', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#4ade80',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
        icon: '📨'
      })
      console.log('Contact form submitted:', contactForm)
      setContactForm({ name: '', email: '', subject: '', message: '' })
    } else {
      toast.error('Please fill in all fields', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#ef4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '10px',
        },
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <Toaster />
      <header className="w-full bg-white/80 backdrop-blur-sm shadow-md py-4 fixed top-0 left-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Tayokod" 
              className="h-16 sm:h-20 hover:opacity-90 transition-opacity duration-300"
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-400 tracking-wider hover:text-blue-500 transition-colors duration-300 uppercase">
              Tayokod
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <section className="py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full md:max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center md:text-left">
              Welcome to <span className="text-blue-400">Tayokod</span>
            </h1>
            
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-center md:text-left">
              At Tayokod, we specialize in crafting innovative software solutions and robust systems 
              that drive digital transformation. Our expertise spans across modern technologies, 
              delivering custom software applications, enterprise systems, and scalable solutions 
              that help businesses thrive in the digital age.
            </p>

            <form onSubmit={handleSubmit} className="w-full mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-400 bg-white/80 w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 w-full md:max-w-xl">
            <div className="bg-gray-900/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 font-mono text-xs sm:text-sm overflow-x-auto">
                <code className="typing-animation">
{`function createMagic() {
  const tayokod = {
    vision: "💫 Digital Excellence",
    tools: ["⚡️ Web", "📱 Mobile", "☁️ Cloud"],
    deliver: () => "✨ Amazing Solutions"
  };

  console.log("🚀 Building the future...");
  return tayokod.deliver();
}

// Let's make something amazing!
createMagic(); // => ✨ Amazing Solutions`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Tayokod</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are a passionate team of developers and designers dedicated to creating 
                exceptional digital experiences. Our mission is to help businesses succeed 
                in the digital world through innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="p-6 bg-white/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`object-contain filter group-hover:grayscale transition-all duration-300 animate-float ${
                    tech.isLarge ? 'w-24 sm:w-32 h-16 sm:h-24' : 'w-16 sm:w-20 h-16 sm:h-20'
                  }`}
                />
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Our <span className="text-blue-400">Gallery</span>
            </h2>
            <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and innovative solutions that showcase our expertise and commitment to excellence.
            </p>

            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full py-12"
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[300px] sm:w-[400px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ width: '300px', height: '400px' }}
                >
                  <div className="relative h-full group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg mb-8 sm:mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Get in Touch</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-gray-600">
                      <span className="text-xl sm:text-2xl">📍</span>
                      <p className="text-sm sm:text-base">Jigjiga-Ethiopia</p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 text-gray-600">
                      <span className="text-xl sm:text-2xl">📧</span>
                      <p className="text-sm sm:text-base">info@tayokod.com</p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 text-gray-600">
                      <span className="text-xl sm:text-2xl">📱</span>
                      <p className="text-sm sm:text-base">+251 714652202</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Follow Us</h3>
                  <div className="flex space-x-4 sm:space-x-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Send us a Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-400 bg-white/80 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-400 bg-white/80 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-400 bg-white/80 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-400 bg-white/80 resize-none text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-2 sm:py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 bg-white/30 backdrop-blur-sm border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-8">
            {/* Company Info - Full width on mobile, normal on larger screens */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">Tayokod</h3>
              <p className="text-gray-600">
                Transforming ideas into powerful digital solutions. Your trusted partner in software development and technology innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
              <ul className="space-y-2 grid grid-cols-1 gap-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Portfolio</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Services</h4>
              <ul className="space-y-2 grid grid-cols-1 gap-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Web Development</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Mobile Apps</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Cloud Solutions</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">UI/UX Design</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300 block">Consulting</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Contact Info</h4>
              <div className="space-y-2 grid grid-cols-1 gap-2">
                <p className="text-gray-600 flex items-center space-x-2">
                  <span>📍</span>
                  <span>Jigjiga-Ethiopia</span>
                </p>
                <p className="text-gray-600 flex items-center space-x-2">
                  <span>📧</span>
                  <span>info@tayokod.com</span>
                </p>
                <p className="text-gray-600 flex items-center space-x-2">
                  <span>📱</span>
                  <span>+251 714652202</span>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600">© {new Date().getFullYear()} Tayokod. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
        }

        /* Swiper Custom Styles */
        .swiper {
          padding: 32px 0;
        }
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        .swiper-slide-active {
          transform: scale(1.05);
        }
        .swiper-pagination-bullet {
          background: #60A5FA;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #3B82F6;
        }
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
        }
      `}</style>
    </div>
  )
}

export default App
