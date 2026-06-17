import { useEffect } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = 'Darshana Ajit Deshmukh | Software Developer & Data Science Student';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio of Darshana Ajit Deshmukh - Software Developer, Python Developer, and Data Science Student. Specializing in AI, Machine Learning, and Full-Stack Web Development.');
    }
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Darshana Ajit Deshmukh | Software Developer' },
      { property: 'og:description', content: 'Portfolio of Darshana Ajit Deshmukh - Software Developer, Python Developer, and Data Science Student.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://darshana-deshmukh.github.io' },
      { property: 'og:image', content: '/images/profile-light.jpg' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Darshana Ajit Deshmukh | Software Developer' },
      { name: 'twitter:description', content: 'Portfolio of Darshana Ajit Deshmukh - Software Developer, Python Developer, and Data Science Student.' },
      { name: 'twitter:image', content: '/images/profile-light.jpg' },
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
    // Structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Darshana Ajit Deshmukh',
      jobTitle: 'Software Developer',
      description: 'Software Developer, Python Developer, and Data Science Student',
      email: 'darshana.d0313@gmail.com',
      telephone: '+91-7559239926',
      url: 'https://darshana-deshmukh.github.io',
      sameAs: [
        'https://github.com/darshana-deshmukh',
        'https://linkedin.com/in/darshana-deshmukh',
      ],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'D Y Patil Agricultural & Technical University',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Dr. Bapuji Salunkhe Institute of Engineering & Technology',
        },
      ],
      knowsAbout: [
        'Python',
        'Machine Learning',
        'Web Development',
        'Data Science',
        'PHP',
        'JavaScript',
        'SQL',
      ],
    };
    
    let scriptTag = document.getElementById('structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
