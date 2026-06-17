import { useEffect, useRef } from 'react';
import { Calendar, MapPin, CheckCircle2, Code } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Earth Logicware Technologies',
    position: 'Software Development Intern',
    duration: '2024 - Present',
    location: 'Remote',
    type: 'Internship',
    description: 'Working on full-stack web development projects, contributing to both frontend and backend modules while learning industry best practices.',
    responsibilities: [
      'Developed full-stack modules using PHP, MySQL, and JavaScript',
      'Implemented responsive UI components with HTML5 and CSS3',
      'Collaborated with senior developers on code reviews',
      'Optimized database queries for improved performance',
      'Participated in agile development processes',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    icon: Code,
    color: 'from-pink-400 to-rose-400',
  },
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-pink-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-4">
            Work Experience
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600 max-w-2xl mx-auto">
            Building real-world experience through internships and hands-on projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`reveal opacity-0 stagger-${index + 1} relative`}
            >
              {/* Timeline connector */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-pink to-pink-100 hidden lg:block" />
              
              <div className="lg:pl-20">
                {/* Experience Card */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-pink-100 hover:shadow-pink transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-pink font-medium">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 bg-pink-50 text-pink text-sm font-medium rounded-full w-fit">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-pink flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-pink-50 text-pink text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to Opportunities */}
        <div className="reveal opacity-0 stagger-3 mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-sm border border-pink-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-700 font-medium">Open to new opportunities</span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-pink hover:text-pink-dark font-medium hover:underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
