import { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pink-50/30 to-white"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#ff6fa3 1px, transparent 1px), linear-gradient(90deg, #ff6fa3 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="reveal opacity-0">
              <span className="inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-6">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="reveal opacity-0 stagger-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient">Darshana</span>
            </h1>
            
            <h2 className="reveal opacity-0 stagger-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
              Software Developer | Python Developer | Data Science Student | Web Developer
            </h2>
            
            <p className="reveal opacity-0 stagger-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate about building intelligent solutions with AI, backend development, 
              and full-stack web projects. I love turning complex problems into elegant, 
              user-friendly applications.
            </p>
            
            <div className="reveal opacity-0 stagger-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                size="lg"
                className="bg-gradient-pink text-white hover:shadow-pink-lg transition-all duration-300 hover:-translate-y-0.5"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink text-pink hover:bg-pink-50 transition-all duration-300"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="reveal opacity-0 stagger-5 flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Darshana550313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:darshana.d0313@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="reveal opacity-0 stagger-2 relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-pink opacity-20 blur-2xl scale-110 animate-pulse-glow" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-pink-lg">
                <img
                  src="/images/profile-light.jpg"
                  alt="Darshana Ajit Deshmukh"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-pink-100 animate-float">
                <span className="text-sm font-semibold text-pink">Python</span>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-pink-100 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-semibold text-pink">AI/ML</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-white rounded-xl shadow-lg border border-pink-100 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold text-pink">Web Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center text-gray-400 hover:text-pink transition-colors"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
