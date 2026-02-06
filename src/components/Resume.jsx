import React from "react";

// Reusable component for the white content cards
const ResumeCard = ({ title, subtitle, location, date, children }) => (
  <div className="bg-white shadow-lg p-8 md:p-12 mb-8 flex flex-col md:flex-row gap-8">
    <div className="md:w-1/3">
      <h4 className="text-blue-600 font-bold text-xl mb-1">{date}</h4>
      <p className="font-bold text-gray-900 uppercase tracking-tight">{title}</p>
      <p className="text-gray-600 text-sm">{subtitle}</p>
      <p className="text-gray-600 text-sm">{location}</p>
    </div>
    {/* text-justify for clean desktop edges, text-left for better mobile readability */}
    <div className="md:w-2/3 text-gray-700 text-sm leading-relaxed space-y-4 text-left md:text-justify">
      {children}
    </div>
  </div>
);

export default function Resume() {
  return (
    <section className="bg-[#e9dfd4] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Title & Download Button */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-4 h-4 bg-blue-600" />
            <h1 className="text-2xl font-extrabold text-black tracking-tight uppercase">Resume</h1>
          </div>
          
          {/* Changed to flex-col on mobile, flex-row on desktop to prevent overlap */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-6">
            <h2 className="text-3xl font-bold text-black text-center md:text-left">
              Internship Experience
            </h2>
            <a 
              href="/resume.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 md:py-2 rounded-full text-xs transition-all shadow-md active:scale-95"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <ResumeCard 
          date="2026 - Present" 
          title="Sales Executive Intern" 
          subtitle="BudgetAppStudio" 
          location="Coimbatore, India"
        >
          <p>
            Ambitious Sales Executive at BudgetAppStudio dedicated to driving new business 
            through strategic prospecting and relationship management. A fast learner and 
            disciplined closer, I am currently focused on scaling my pipeline and delivering 
            measurable value to our clients from day one.
          </p>
        </ResumeCard>

        <ResumeCard 
          date="2025 - 2025" 
          title="React Developer" 
          subtitle="Azhizen Solutions Pvt Ltd" 
          location="Tiruchengode, India"
        >
          <p>
            In 2025, I wrapped up a transformative 6-month internship as a React Developer at a 
            tech startup. This experience sharpened my ability to build modern, interactive web 
            interfaces and taught me how to deliver high-quality code within agile production cycles.
          </p>
        </ResumeCard>

        <ResumeCard 
          date="2024 - 2024"
          title="AI in Cloud Intern" 
          subtitle="Object Automation System Solutions Pvt Ltd" 
          location="Chennai, India"
        >
          <p>
            Focused on building and deploying AI-driven automation tools. Gained experience in 
            Python for Data Science, cloud service integration, and the development of intelligent 
            recommendation engines within a professional production cycle.
          </p>
        </ResumeCard>

        {/* Education Section */}
        <h2 className="text-3xl font-bold text-black mt-16 mb-8 text-center md:text-left">
          Education
        </h2>
        
        <ResumeCard 
          date="2022 - 2026" 
          title="Bachelor of Technology in Information Technology" 
          subtitle="KSR Institute for Engineering and Technology" 
          location="Tiruchengode, Tamil Nadu"
        >
          <p>
            Final-year B.Tech IT student | React Developer | AI & Cloud Enthusiast. I specialize in 
            building interactive web applications and exploring the potential of AI in the cloud. 
            With hands-on experience in startup environments and automation-focused firms, 
            I am eager to apply my technical toolkit to build the next generation of software.
          </p>
        </ResumeCard>

        {/* Professional Skillset & Languages */}
        <div className="bg-white shadow-lg p-8 md:p-12 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Professional skillset</h3>
              <ul className="space-y-4">
                {[
                  "Languages: Java, HTML5, CSS3, JavaScript", 
                  "Frameworks & Libraries: React.js, Tailwind CSS", 
                  "Database Management: MySQL", 
                  "Tools & Version Control: VS Code, Git, GitHub"
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-3 text-sm">
                    <div className="w-3 h-3 bg-blue-600 mt-1 flex-shrink-0" /> 
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Languages</h3>
              <ul className="space-y-4">
                {["Telugu (Native)", "Tamil (Native)", "English (Proficient)"].map((lang) => (
                  <li key={lang} className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 bg-blue-600 flex-shrink-0" /> 
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}