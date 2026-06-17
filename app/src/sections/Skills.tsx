import { useEffect, useRef } from 'react';
import {
  Code2,
  Globe,
  Brain,
  Wrench,
  Terminal,
  Database,
  FileCode,
  Coffee,
  Server,
  Layout,
  Table,
  Cpu,
  MessageSquare,
  BarChart3,
  GitBranch,
  Layers,
  Scan,
  Atom,
  Sparkles,
  Notebook,
  Code,
  Github,
  Cloud,

} from 'lucide-react';

const skillCategories = [
  {
    name: 'Programming',
    icon: Code2,
    color: 'from-pink-400 to-pink-500',
    skills: [
      { name: 'Python', icon: Terminal, level: 90 },
      { name: 'SQL', icon: Database, level: 85 },
      { name: 'JavaScript', icon: FileCode, level: 80 },
      { name: 'PHP', icon: Server, level: 80 },
      { name: 'C++', icon: Code2, level: 75 },
    ],
  },

  {
    name: 'Web Development',
    icon: Globe,
    color: 'from-purple-400 to-pink-400',
    skills: [
      { name: 'HTML5', icon: Layout, level: 95 },
      { name: 'CSS3', icon: Coffee, level: 90 },
      { name: 'React.js', icon: Atom, level: 65 },
      { name: 'MySQL', icon: Table, level: 85 },
      { name: 'Tailwind CSS', icon: Layout, level: 80 },
    ],
  },

  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-blue-400 to-purple-400',
    skills: [
      { name: 'Machine Learning', icon: Cpu, level: 80 },
      { name: 'Deep Learning', icon: Brain, level: 70 },
      { name: 'NLP', icon: MessageSquare, level: 75 },
      { name: 'Generative AI', icon: Sparkles, level: 70 },
      { name: 'Prompt Engineering', icon: MessageSquare, level: 80 },
      { name: 'RAG Systems', icon: Database, level: 75 },
    ],
  },

  {
    name: 'Data Science',
    icon: BarChart3,
    color: 'from-cyan-400 to-blue-400',
    skills: [
      { name: 'Pandas', icon: Table, level: 85 },
      { name: 'NumPy', icon: Cpu, level: 80 },
      { name: 'Scikit-Learn', icon: Brain, level: 80 },
      { name: 'Power BI', icon: BarChart3, level: 75 },
      { name: 'Matplotlib', icon: BarChart3, level: 75 },
    ],
  },

  {
    name: 'Cloud & Tools',
    icon: Wrench,
    color: 'from-orange-400 to-pink-400',
    skills: [
      { name: 'Git', icon: GitBranch, level: 85 },
      { name: 'GitHub', icon: Github, level: 85 },
      { name: 'AWS EC2', icon: Cloud, level: 70 },
      { name: 'AWS RDS', icon: Database, level: 65 },
      { name: 'Google Cloud', icon: Cloud, level: 60 },
      { name: 'Streamlit', icon: Layers, level: 90 },
      { name: 'Jupyter Notebook', icon: Notebook, level: 95 },
    ],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-pink-50/30"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-4">
            My Skills
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic excellence and hands-on project experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`reveal opacity-0 stagger-${categoryIndex + 1} bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-pink-100 hover:shadow-pink transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.skills.length} technologies</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-4 h-4 text-pink" />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink to-pink-dark rounded-full transition-all duration-1000 ease-out group-hover:from-pink-400 group-hover:to-pink-500"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="reveal opacity-0 stagger-5 mt-12">
          <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">
            Additional Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures',
              'Algorithms',
              'Feature Engineering',
              'Data Preprocessing',
              'Data Cleaning',
              'Model Training',
              'Model Evaluation',
              'Model Deployment',
              'ETL Pipelines',
              'LangChain',
              'RAG Architecture',
              'Vector Databases',
              'Embeddings',
              'TensorFlow',
              'PyTorch',
              'REST APIs',
              'Database Design',
              'Query Optimization',
              'GitHub',
              'Docker',
              'Tailwind CSS',


            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium border border-pink-100 hover:border-pink hover:text-pink hover:shadow-pink transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
