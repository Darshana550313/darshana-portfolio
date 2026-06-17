import { useEffect, useRef } from 'react';
import { Check, Target, Users, Code, Brain, Sparkles } from 'lucide-react';

const strengths = [
  {
    icon: Brain,
    title: 'Logical Thinking',
    description: 'Approach problems systematically with analytical reasoning',
  },
  {
    icon: Target,
    title: 'Attention to Detail',
    description: 'Ensure accuracy and quality in every line of code',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work effectively with cross-functional teams',
  },
  {
    icon: Code,
    title: 'Quick Learner',
    description: 'Adapt to new technologies and frameworks rapidly',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-4">
            About Me
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get to Know <span className="text-gradient">Me Better</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600 max-w-2xl mx-auto">
            A passionate developer with a strong foundation in data science and software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="reveal opacity-0 stagger-2 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/10 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-100/50 rounded-full" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/profile-dark.jpg"
                  alt="Darshana Ajit Deshmukh"
                  className="w-full aspect-[4/5] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink/20 to-transparent" />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 bg-white rounded-xl shadow-lg p-4 border border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2+</p>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <div className="reveal opacity-0 stagger-3 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I'm a Data Science Student & Software Developer
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Currently pursuing my B.Tech in Data Science at D Y Patil Agricultural & Technical University, 
                I have built a strong foundation in programming, machine learning, and web development. 
                My journey began with a Diploma in Computer Engineering from Dr. Bapuji Salunkhe Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in Python development, creating intelligent applications that leverage 
                AI and machine learning to solve real-world problems. My passion lies in building 
                full-stack web applications with clean, efficient code.
              </p>
            </div>

            {/* Education Quick Info */}
            <div className="reveal opacity-0 stagger-4 space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-pink" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">B.Tech in Data Science</p>
                  <p className="text-sm text-gray-500">D Y Patil Agricultural & Technical University</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-pink" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Diploma in Computer Engineering</p>
                  <p className="text-sm text-gray-500">Dr. Bapuji Salunkhe Institute</p>
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="reveal opacity-0 stagger-5 grid grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <div
                  key={strength.title}
                  className="p-4 rounded-xl bg-pink-50/50 border border-pink-100 hover:bg-pink-50 hover:shadow-pink transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <strength.icon className="w-6 h-6 text-pink mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{strength.title}</h4>
                  <p className="text-xs text-gray-500">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
