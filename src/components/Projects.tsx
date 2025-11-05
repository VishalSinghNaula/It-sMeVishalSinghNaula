import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Student Ride Sharing App",
    description: "A simple full-stack web application that allows students to create, search, join, and cancel rides. Built with MERN stack (MongoDB, Express.js, React, Node.js) and JWT-based authentication. It allows students to create a ride and share it with other students. It also allows students to search for rides and join a ride. It also allows students to cancel a ride.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Authentication", "Authorization", "MERN Stack", "Full-stack Web Application", "Web Application", "Web Development", "Web Design", "Web Development", "Web Design", "Web Development", "Web Design"],
    github: "https://github.com/VishalSinghNaula/student-ride-sharing",
    demo: "https://github.com/VishalSinghNaula/student-ride-sharing",
    featured: true,
  },
  {
    title: "Book Recommendation System",
    description: "Developed a Book Recommendation System utilizing cosineSimilarity algorithm to analyze user preferences and book features. It is a Flask-based web app recommending 4 personalized books per query, designed the system to recommend book suggestions, leveraging similarity metrics for accurate and efficient recommendations.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Cosine Similarity", "Flask", "Jupyter Notebook", "Web App", "Recommendation System", "Machine Learning", "Data Analysis", "Data Visualization"],
    github: "https://github.com/VishalSinghNaula/book-recommendation-system",
    demo: "https://github.com/VishalSinghNaula/book-recommender-system",
    featured: true,
  },
  {
    title: "Parallel File Encryption/Decryption Tool",
    description: " Developed a parallel file encryption/decryption system with a C++ backend supporting Caesar Cipher, XOR Cipher, and RSA Encryption, and a Python based GUI interface for user interaction. Leveraged OS-level parallelism and inter-process communication for high-performance encryption of large files(tested on files ≥500 MB)",
    tech: [ "C", "POSIX", "Threads", "Linux", "C++", "Python", "GUI", "OS-level parallelism", "Inter-process communication", "Large file encryption"],
    github: "https://github.com/VishalSinghNaula/ParallelFileEncryptDecrypt",
    demo: "https://github.com/VishalSinghNaula/ParallelFileEncryptDecrypt",
    featured: true,
  },
  {
    title: "Messenger– Java Socket Chat Application",
    description: "Developed a console-based real-time chat application using Java sockets and multithreading. Implemented both client and server modules to enable two-way communication over a local network. Achieved 20–50 ms message delivery latency over a local network during testing.",
    tech: ["Java", "Socket", "Socket Programming", "Multithreading", "Swing", "TCP/IP", "I/O Streams"],
    github: "https://github.com/VishalSinghNaula",
    demo: "https://github.com/VishalSinghNaula",
    featured: true,
  },
  {
    title: "Deadlock Predictor & Simulator",
    description: "A complete Python project that predicts deadlock probability using an LSTM model trained on realistic OS scenarios and simulates multithreaded execution to illustrate deadlocks in real-time.  ",
    tech: ["Python", "LSTM", "Machine Learning", "Machine Learning", "Data Analysis", "Data Visualization"],
    github: "https://github.com/VishalSinghNaula/deadlock_predictor_project",
    demo: "https://github.com/VishalSinghNaula/deadlock_predictor_project",
    featured: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovation through code and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-3 flex flex-col ${
                project.featured ? 'border-accent/50 shadow-lg shadow-accent/10' : 'hover:border-accent'
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] text-white text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col relative z-10">
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-accent/10 to-[hsl(200,100%,60%)]/10 border border-accent/20 text-foreground text-xs font-semibold hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 flex-1 border-2 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 flex-1 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] hover:shadow-lg hover:scale-105 transition-all duration-300 border-0"
                    onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
