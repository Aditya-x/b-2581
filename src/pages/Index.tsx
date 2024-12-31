import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Globe, FileText, MapPin, ExternalLink, Plus, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Premier League(20-21) Data Analysis",
      link: "#",
      description: "Conducted data analysis using Python libraries like Pandas and NumPy for data mining and processing, and visualized results with interactive Plotly graphs for enhanced data insights.",
      tech: ["Python", "Pandas", "NumPy", "Plotly"],
    },
    {
      title: "Google Sheets Automation",
      link: "#",
      description: "Created a Python script using BeautifulSoup and Requests to scrape news from Google News, and integrated it with the Google Sheets API for seamless data transfer and real-time updates. Developed an automated script to track stock performance and daily news updates.",
      tech: ["Python", "BeautifulSoup", "Google Sheets API"],
    },
    {
      title: "Top Biryani Places Delhi/NCR",
      link: "#",
      description: "Scraped data from websites like Dineout.in using Python (BeautifulSoup and Requests), preprocessed the data in Excel, and developed visualizations in Tableau for insightful analysis.",
      tech: ["Python", "BeautifulSoup", "Tableau"],
    },
  ];

  const travelPhotos = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      caption: "Exploring the Mountains",
    },
    {
      url: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      caption: "Wildlife Adventure",
    },
    {
      url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      caption: "Nature's Beauty",
    },
  ];

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

        {/* Projects Section */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="bento-card col-span-3 cursor-pointer group">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Featured Projects</h2>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-card-hover rounded-lg p-4 transition-all hover:scale-105">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                ))}
              </div>
              <span className="text-sm text-blue-400 mt-4 block group-hover:underline">
                Click to view more details
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>My Projects</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-card-hover rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {/* Travel Pictures Section */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Travel Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelPhotos.map((photo, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4">{photo.caption}</p>
                </div>
              </div>
            ))}
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
