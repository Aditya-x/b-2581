import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Globe, FileText, MapPin, ExternalLink } from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Aditya Kumar</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Operations Analyst at CertifyOs with expertise in automation and data analysis
          </p>
          <div className="flex space-x-6 mt-6 justify-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:theadityakarn@gmail.com"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full hover:bg-gray-800 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Location & Contact Card */}
        <div className="bento-card">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">Bangalore, KA</span>
          </div>
          <p className="text-gray-300">
            <span className="font-semibold">Phone:</span> +91-8766355123
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Email:</span> theadityakarn@gmail.com
          </p>
        </div>

        {/* Experience Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Operations Analyst, Credentialing</h3>
              <span className="text-gray-400">March 2023 - Present</span>
            </div>
            <h4 className="text-lg text-blue-400 mb-3">CertifyOs (Remote)</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Automated outreach processes using Google Apps Script, reducing manual effort by 20+ hours weekly</li>
              <li>Executed comprehensive verification of healthcare providers' credentials</li>
              <li>Developed automated reporting solutions using Google Apps Script and BigQuery SQL</li>
              <li>Collaborated with cross-functional teams to optimize processes and implement data-driven solutions</li>
            </ul>
          </div>
        </div>

        {/* Skills Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Skills & Tools</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Python (Pandas, Numpy, Seaborn)</li>
                <li>SQL</li>
                <li>Data Analysis</li>
                <li>Web Scraping</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Tools</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Tableau, PowerBI</li>
                <li>Excel, GSheets</li>
                <li>Jupyter Notebook</li>
                <li>Looker Studio</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <ul className="text-gray-300 space-y-4">
            <li>Business Statistics and Analysis Specialization By Rice University</li>
            <li>Data Warehousing and BI Analytics By IBM</li>
          </ul>
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Premier League Analysis</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">Data analysis using Python libraries with interactive Plotly graphs</p>
            </div>
            <div className="p-6 bg-card-hover rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold">Google Sheets Automation</h3>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">Web scraping and automation tool for news and stock tracking</p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Bachelor of Science</h3>
              <span className="text-gray-400">Dec 2023</span>
            </div>
            <h4 className="text-lg text-blue-400 mb-3">Indira Gandhi National Open University, New Delhi</h4>
            <p className="text-gray-300">
              Relevant Coursework: Calculus, Linear Algebra, Statistical Techniques, Business Communication
            </p>
          </div>
        </div>

        {/* Languages & Interests Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">Languages & Interests</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <p className="text-gray-300">Hindi, English</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Interests</h3>
              <p className="text-gray-300">Technology, Hiking, Football, Fitness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;