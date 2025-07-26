import '../styles/global.css';
import Container from './Container.jsx';

export default function Projects() {
  const projects = [
    // {
    //   id: 1,
    //   name: 'Budget Tracker',
    //   imgSrc: '/portfolio-v-2/placeholder.jpg',
    //   description:
    //     'A full-stack budget tracking application that allows users to manage their finances, track expenses, and visualize spending patterns through interactive charts.',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    //   github: '#',
    //   live: '#'
    // }
  ];
  
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development and modern web technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-1">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    className="flex-1 text-center py-2 px-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 text-center py-2 px-4 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
