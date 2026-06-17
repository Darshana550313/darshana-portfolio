import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Sparkles, GraduationCap, Fuel } from 'lucide-react';
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
    title: 'E-News AI',
    tagline: 'AI-Powered News Analysis Platform',
    description: 'A Streamlit application that uses Tesseract OCR to extract text from newspaper images, summarizes content using NLP techniques, and recommends related YouTube videos for deeper understanding.',
    fullDescription: 'E-News AI is an innovative platform that bridges traditional print media with digital intelligence. The application allows users to upload newspaper images, automatically extracts text using Tesseract OCR, generates concise summaries using advanced NLP algorithms, and suggests relevant YouTube videos for comprehensive news consumption. Features include image preview, audio playback of summaries, and download capabilities.',
    image: '/images/project-enews.jpg',
    icon: Sparkles,
    techStack: ['Python', 'Streamlit', 'Tesseract OCR', 'NLP', 'YouTube API', 'Pillow'],
    features: [
      'OCR text extraction from newspaper images',
      'AI-powered content summarization',
      'Related video recommendations',
      'Audio playback for summaries',
      'Download extracted content',
      'Image preview and processing',
    ],
    liveLink: '#',
    githubLink: '#',
    color: 'from-pink-400 to-rose-400',
  },
  {
    id: 2,
    title: 'EXAMELT',
    tagline: 'Comprehensive Online Examination System',
    description: 'A full-featured PHP and MySQL-based examination platform with role-based access control for Admins, Teachers, and Students, featuring secure authentication and automatic result generation.',
    fullDescription: 'EXAMELT is a robust online examination system designed to streamline the assessment process. It features a sophisticated role-based access control system with dedicated dashboards for Administrators, Teachers, and Students. The platform supports secure login, exam creation with multiple question types, real-time monitoring, and automatic result calculation with detailed analytics.',
    image: '/images/project-examelt.jpg',
    icon: GraduationCap,
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'],
    features: [
      'Role-based access (Admin/Teacher/Student)',
      'Secure authentication system',
      'Exam creation and management',
      'Multiple question types support',
      'Automatic result generation',
      'Detailed analytics and reporting',
      'Real-time exam monitoring',
    ],
    liveLink: '#',
    githubLink: '#',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 3,
    title: 'CNG Fuel Management',
    tagline: 'Smart Fuel Station Operations Platform',
    description: 'A web application for managing CNG fuel station operations including slot booking, pump tracking, payment management, and comprehensive dashboards for monitoring.',
    fullDescription: 'The CNG Fuel Management System is a comprehensive solution for modern fuel station operations. It enables customers to book fueling slots online, tracks pump availability in real-time, manages payment transactions, and provides station owners with powerful dashboards for monitoring operations, analyzing trends, and optimizing efficiency.',
    image: '/images/project-cng.jpg',
    icon: Fuel,
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Ajax'],
    features: [
      'Online slot booking system',
      'Real-time pump status tracking',
      'Payment management and history',
      'Customer management',
      'Analytics dashboard with charts',
      'Inventory tracking',
      'Report generation',
    ],
    liveLink: '#',
    githubLink: '#',
    color: 'from-blue-400 to-cyan-400',
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
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
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
                    Live Demo
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
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
