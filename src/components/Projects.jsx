import React from "react";

const projects = [
  {
    id: "01",
    name: "Modern Responsive Landing Page",
    role: "Frontend Development",
    description: "Designed and developed a high-performance, visually engaging landing page using React and Tailwind CSS. I focused on implementing a 'mobile-first' design philosophy, ensuring seamless responsiveness and optimized load times across all devices. This project highlights my proficiency in modern frontend frameworks, utility-first styling, and creating sleek, intuitive user interfaces that follow contemporary design trends.",
    image: "/project01.jpg",
  },
  {
    id: "02",
    name: "Advanced API Integration & Development",
    role: "Backend Architecture",
    description: "Developed a technical project focused on the architecture and implementation of advanced API concepts. By integrating multiple external services, I managed complex data synchronization, asynchronous operations, and secure authentication protocols. This project demonstrates my ability to bridge disparate systems, handle real-time data fetching, and build scalable, interconnected applications with robust error handling.",
    image: "/project02.jpg", 
  },
  {
    id: "03",
    name: "Advanced Server-Side System Development",
    role: "System Architect",
    description: "Engineered a high-performance backend architecture focused on scalability and application security. I implemented complex server-side features including custom middleware, secure authentication flow, and optimized database management to ensure system stability. This project demonstrates my ability to handle 'under-the-hood' logic, manage data persistence, and build the robust infrastructure necessary for production-grade applications.",
    image: "/project03.jpg",
  },
  {
    id: "04",
    name: "Fake Review Detection System",
    role: "NLP & Machine Learning",
    description: "Developed an advanced NLP system to identify fraudulent 'opinion spam' on e-commerce platforms using a Hybrid Meta-AI approach and the BERT model. By leveraging deep contextual embeddings and meta-learning techniques, the system distinguishes between authentic feedback and deceptive reviews with high precision. This project showcases my ability to implement state-of-the-art transformer architectures to solve real-world data integrity and consumer trust challenges.",
    image: "/project04.jpg",
  }
];

export default function Projects() {
  return (
    <div className="bg-[#e9dfd4] min-h-screen pt-24 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-blue-600" />
            <h1 className="text-4xl font-bold text-black tracking-tight uppercase">Projects</h1>
          </div>
          <p className="max-w-2xl mx-auto text-gray-800 leading-relaxed text-lg">
            I am passionate about applying theoretical knowledge to practical applications. 
            The projects listed below showcase my journey in mastering Python, Data Analysis, and Full-Stack Development.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-xl overflow-hidden min-h-[450px]`}
            >
              
              {/* Text Content Section */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                <div className="flex items-start gap-5 mb-6 text-left">
                  {/* Vertical Blue Bar matching your screenshot */}
                  <div className="w-1.5 h-16 bg-blue-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      {project.name}
                    </h2>
                    <p className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-[0.2em]">
                      {project.role}
                    </p>
                  </div>
                </div>
                
                {/* JUSTIFIED TEXT BLOCK */}
                <div className="mt-4">
                  <p className="text-gray-700 leading-relaxed text-lg text-justify [text-align-last:left]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex-1 bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}