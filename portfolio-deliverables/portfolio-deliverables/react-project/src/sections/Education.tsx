import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Data Science',
    institution: 'D Y Patil Agricultural & Technical University',
    location: 'Talsande, Kolhapur',
    duration: '2022 - 2025',
    status: 'Pursuing',
    description: 'Focusing on data science fundamentals, machine learning, statistical analysis, and big data technologies.',
    achievements: [
      'Strong foundation in Python and R programming',
      'Hands-on experience with ML algorithms',
      'Data visualization and analytics projects',
    ],
    courses: [
      'Machine Learning',
      'Data Mining',
      'Statistical Analysis',
      'Big Data Analytics',
      'Database Management',
    ],
    icon: GraduationCap,
    color: 'from-pink-400 to-rose-400',
  },
  {
    id: 2,
    degree: 'Diploma in Computer Engineering',
    institution: 'Dr. Bapuji Salunkhe Institute of Engineering & Technology',
    location: 'Kolhapur',
    duration: '2019 - 2022',
    status: 'Completed',
    description: 'Built a strong foundation in computer science principles, programming, and software development.',
    achievements: [
      'Proficiency in C, C++, and Java programming',
      'Web development fundamentals',
      'Database design and management',
    ],
    courses: [
      'Data Structures',
      'Object-Oriented Programming',
      'Web Development',
      'Computer Networks',
      'Operating Systems',
    ],
    icon: BookOpen,
    color: 'from-purple-400 to-pink-400',
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-4">
            Education
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600 max-w-2xl mx-auto">
            A strong educational foundation in computer science and data science
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`reveal opacity-0 stagger-${index + 1} bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-pink-100 hover:shadow-pink transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <edu.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'bg-green-50 text-green-600'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-pink font-medium text-sm">{edu.institution}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-pink" />
                  Key Learnings
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-pink flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Core Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 bg-pink-50 text-pink text-xs font-medium rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal opacity-0 stagger-3 mt-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-pink-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-pink" />
              Certifications & Additional Learning
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Python Programming',
                'Machine Learning Fundamentals',
                'Web Development',
                'Data Analysis with Python',
                'SQL & Database Management',
                'Git & Version Control',
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-pink" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
