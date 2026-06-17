import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Sparkles, GraduationCap, Fuel, Heart, Activity, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [

  {
    id: 1,
    title: 'BloodBridge',
    tagline: 'AWS-Powered Blood Donation Management Platform',

    description:
      'A Flask and MySQL-based blood donation and emergency request management system deployed using AWS EC2 and AWS RDS.',

    fullDescription:
      'BloodBridge is a production-ready healthcare platform that connects donors, hospitals, blood banks, and administrators through a centralized system. The application provides role-based dashboards, emergency blood request management, donor matching, inventory tracking, analytics dashboards, and cloud deployment using AWS EC2 and AWS RDS. It helps optimize blood availability and emergency response workflows.',

    image: '/images/project-bloodbridge.png',

    icon: Heart,

    techStack: [
      'Python',
      'Flask',
      'MySQL',
      'AWS EC2',
      'AWS RDS',
      'Bootstrap',
      'Chart.js',
      'PyMySQL'
    ],

    features: [
      'Role-based authentication system',
      'Emergency blood request matching',
      'Donor eligibility tracking',
      'Blood inventory management',
      'Low stock alerts',
      'Analytics dashboard with charts',
      'AWS EC2 deployment',
      'AWS RDS integration'
    ],

    liveLink: 'https://drive.google.com/drive/folders/1KoDLKJfAiLjjA3rHRJnWaQ8Dh2EUovA7?usp=sharing',
    githubLink: 'https://github.com/Darshana550313/bloodbridge-ec2-rds-optimization',

    color: 'from-red-400 to-pink-500',

  },
  {
    id: 2,
    title: 'AI Insurance Assistant',
    tagline: 'RAG-Powered Insurance Query System',

    description:
      'An intelligent Generative AI chatbot that uses Retrieval-Augmented Generation (RAG) to provide accurate, context-aware answers from insurance documents.',

    fullDescription:
      'AI Insurance Assistant is a Generative AI solution built using LangChain, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG). The system retrieves relevant information from insurance documents using vector search and generates accurate contextual responses. It reduces manual customer support efforts while improving information retrieval accuracy and user experience.',

    image: '/images/project-insurance.png',

    icon: Shield,

    techStack: [
      'Python',
      'LangChain',
      'RAG',
      'LLMs',
      'Vector Database',
      'Flask',
      'Generative AI'
    ],

    features: [
      'Document-based intelligent search',
      'RAG architecture implementation',
      'Context-aware response generation',
      'Insurance policy knowledge retrieval',
      'Vector database integration',
      'Flask-based deployment',
      'Prompt engineering optimization',
      'Reduced manual query handling'
    ],

    liveLink: '#',
    githubLink: '#',

    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 3,
    title: 'FetalAI',
    tagline: 'Machine Learning-Based Fetal Health Prediction System',

    description:
      'A healthcare-focused machine learning application that predicts and monitors fetal health using clinical data and predictive analytics.',

    fullDescription:
      'FetalAI is an intelligent healthcare solution developed using Machine Learning techniques to predict fetal health conditions based on medical parameters. The system analyzes fetal monitoring data, identifies potential risks, and assists healthcare professionals in early detection and decision-making. The project demonstrates practical applications of predictive analytics and AI in healthcare.',

    image: '/images/project-fetalai.png',

    icon: Activity,

    techStack: [
      'Python',
      'Machine Learning',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'Matplotlib'
    ],

    features: [
      'Fetal health prediction',
      'Medical data preprocessing',
      'Feature engineering',
      'Risk classification',
      'Predictive analytics',
      'Performance evaluation metrics',
      'Data visualization',
      'Healthcare decision support'
    ],

    liveLink: '#',
    githubLink: 'https://github.com/Darshana550313/FetalAI-Using-Machine-Learning-To-Predict-And-Monitor-Fetal-Health',

    color: 'from-green-400 to-emerald-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block px-4 py-2 text-sm font-medium text-pink bg-pink-50 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="reveal opacity-0 stagger-2 text-gray-600 max-w-2xl mx-auto">
            Showcasing my best work in web development, AI integration, and full-stack applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal opacity-0 stagger-${index + 1} group bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-pink-lg transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                  <project.icon className="w-5 h-5 text-white" />
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-pink-50 text-pink text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-pink text-pink hover:bg-pink-50"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-pink hover:text-pink hover:bg-pink-50 transition-all duration-300"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="reveal opacity-0 stagger-4 text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-pink text-pink hover:bg-pink-50"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
          {selectedProject && (
            <div className="overflow-y-auto max-h-[calc(90vh-3rem)] pr-2">
              {/* Project Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center shadow-lg`}>
                  <selectedProject.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-pink font-medium">
                  {selectedProject.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">About</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Sparkles className="w-3 h-3 text-pink" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-pink-50 text-pink text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Button
                    className="flex-1 bg-gradient-pink text-white hover:shadow-pink"
                    onClick={() => window.open(selectedProject.liveLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo video
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-pink text-pink hover:bg-pink-50"
                    onClick={() => window.open(selectedProject.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
