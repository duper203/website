'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Home, Briefcase, GraduationCap, Folder, Award, Phone, Globe, User } from 'lucide-react'

export function PortfolioComponent() {
  const [activeSection, setActiveSection] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'achievements', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const filterProjects = (category: string) => {
    setActiveFilter(category)
    // Add filtering logic here if needed
  }

  return (
    <div className="min-h-screen bg-[#111827] text-gray-100 font-sans">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen sticky top-0 bg-[#1F2937] p-6 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Hyesoo Kim</h2>
            <p className="text-sm text-gray-400 mb-4">Developer Relations | Software Engineer</p>
            <div className="flex space-x-2 mb-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="text-gray-300 hover:text-white border-gray-700 hover:border-gray-500"
                onClick={() => window.open('https://github.com/duper203', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="text-gray-300 hover:text-white border-gray-700 hover:border-gray-500"
                onClick={() => window.open('https://www.linkedin.com/in/hyesoo--kim/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              
            </div>
            <p className="text-xs text-gray-400">+82 1092118325</p>
            <p className="text-xs text-gray-400">hsookim203@gmail.com</p>
          </div>
          <nav className="space-y-4">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'about', icon: User, label: 'About' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'projects', icon: Folder, label: 'Projects' },
              { id: 'skills', icon: Award, label: 'Skills' },
              { id: 'achievements', icon: Award, label: 'Awards & Certificates' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-700">
            <p className="text-xs font-medium text-purple-400">© Hyesoo Kim</p>
            <p className="text-xs text-gray-400 mt-1">Last updated: Oct 2024</p>
            <p className="text-xs italic text-gray-500 mt-2">Made with React</p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <main className="container mx-auto px-4 py-8 animate-fadeIn">
            <section id="home" className="min-h-screen grid grid-cols-2 gap-8 items-center">
              {/* Left Column - Home */}
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient">Hyesoo Kim</h1>
                <p className="text-xl mb-8 text-gray-300">Developer Relations | Software Engineer | AI Enthusiast</p>
              </div>

              {/* Right Column - About & Education */}
              <div className="space-y-6">
                {/* About Me Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">About Me</h2>
                  <div className="space-y-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">Currently @ </span>
                      <span className="text-lg font-semibold text-purple-400">Upstage</span>
                      <span className="text-lg">in California</span>
                      <span className="text-xl" role="img" aria-label="USA flag">🇺🇸</span>
                    </div>
                    
                    <div>
                      <p className="text-lg mb-2">Interest:</p>
                      <div className="flex gap-3">
                        <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md">AI</span>
                        <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md">Open Source</span>
                        <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md">Cloud</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Education</h2>
                  <Card className="bg-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-purple-400">B.S. Computer Science</CardTitle>
                      <CardDescription className="text-gray-400">Sookmyung Women's University | 2021 - present</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Exchange program at University of Bern (Switzerland) with a focus in computational algorithms</li>
                        <li>Masters-level courses in Machine Learning, Big Data Analysis, Text as Data and Automated Content Analysis</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section id="experience" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Work Experience</h2>
              
              {/* Upstage */}
              <Card className="mb-6 bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-purple-400 mb-1">Developer Relations</CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        Upstage
                        <span className="ml-2 inline-flex items-center">
                          <span className="text-sm text-gray-400">San Francisco, CA, USA</span>
                          <span className="ml-1">🇺🇸</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-600 text-white px-3 py-1">Jul 2024 - Present</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mt-2 italic border-l-2 border-purple-400 pl-4">
                    Upstage AI specializes in building AI-powered solutions like language models and document processing tools to enhance automation, productivity, and decision-making for businesses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Develops LLM-focused contents, including a total of 14 cookbooks, tech blogs, tutorials, while managing company social media by sharing technical content to drive engagement:</span>
                    </li>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 ml-6">
                      <a href="https://github.com/UpstageAI/cookbook" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Github className="h-5 w-5 text-purple-400" />
                          <div>
                            <div className="font-semibold text-white">Cookbooks</div>
                            <div className="text-sm text-gray-300">14+ LLM Examples</div>
                          </div>
                        </div>
                      </a>
                      
                      <a href="https://medium.com/@hsookim203" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 text-purple-400" />
                          <div>
                            <div className="font-semibold text-white">Tech Blogs</div>
                            <div className="text-sm text-gray-300">Medium Articles</div>
                          </div>
                        </div>
                      </a>
                      
                      <a href="https://x.com/soo_devrel/media" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 text-purple-400" />
                          <div>
                            <div className="font-semibold text-white">Tutorials</div>
                            <div className="text-sm text-gray-300">Video Content</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <li className="flex items-start mt-4">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Assists in organizing and participating in 2 hackathons and developer meetups, providing support by answering participant questions and gathering feedback on Upstage's Document AI and Multimodal LLM products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Builds relationships between developers and U.S./Korean teams by providing market insights and use cases, ensuring Document AI and LLM products resonate with developers and meet real-world needs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* BoxLadder */}
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-purple-400 mb-1">Software Engineer</CardTitle>
                      <CardDescription className="text-lg text-gray-300">
                        BoxLadder
                        <span className="ml-2 inline-flex items-center">
                          <span className="text-sm text-gray-400">Seoul, South Korea</span>
                          <span className="ml-1">🇰🇷</span>
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-600 text-white px-3 py-1">May 2023 - Mar 2024</Badge>
                  </div>
                  <CardDescription className="text-gray-400 mt-2 italic border-l-2 border-purple-400 pl-4">
                    AI-powered platform that connects startups with global investors and experts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Developed a new search engine by transitioning data to a NoSQL format using Elasticsearch, achieving a 3x increase in search speed. The engine is optimized for startups, providing efficient matching with relevant professionals and venture capitalists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Engineered an automation system using OCR technology to convert startup IR documents into data, automating text extraction and data indexing processes, resulting in a 35% reduction in manual processing time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section id="projects" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-purple-400">Projects</h2>
              
              {/* Projects Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* EPL Predictor */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">EPL Predictor</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm">
                        May-Jul 2024
                      </span>
                    </div>
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      Machine Learning
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed an EPL Prediction Model using an Elo rating system, optimizing parameters (K-factor, Home Field Advantage) for accurate match predictions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ran 1,000 simulations to forecast match outcomes and updated Elo ratings for all EPL teams</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Built an interactive visualization dashboard to display predicted points, league rankings, and probabilities for key outcomes</span>
                      </li>
                    </ul>
                    <a href="https://github.com/duper203/epl_predictor" target="_blank" rel="noopener noreferrer">
                      <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                        View Project
                      </button>
                    </a>
                  </div>
                </Card>

                {/* Tech Support Chatbot */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">Chatbot Solution for Bell company's Tech Community</h3>
                      <div className="flex flex-col items-end">
                        <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                          Oct 2023
                        </span>
                        <span className="text-gray-400 text-sm mt-1">Switzerland</span>
                      </div>
                    </div>
                    {/* LLM Label */}
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      LLM
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed an LLM model that delivers instant solutions via a chatbot, reducing search time from 30 minutes to less than 10 seconds, and streamlining the process compared to manually searching Bell's "Tech Problem Community"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Implemented the application using a RAG system structure, which enhanced the LLM model's ability to retrieve and generate precise answers with 10-20% higher accuracy than ChatGPT</span>
                      </li>
                    </ul>
                    <a href="https://youtu.be/OQIcbPw9nbU" target="_blank" rel="noopener noreferrer">
                      <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                        Demo
                      </button>
                    </a>
                  </div>
                </Card>

                {/* B2B Recycling Solution */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">B2B Recycling Solution for Kanton Aargau: Plastic Recycle Platform</h3>
                      <div className="flex flex-col items-end">
                        <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                          Sep 2023
                        </span>
                        <span className="text-gray-400 text-sm mt-1">Switzerland</span>
                      </div>
                    </div>
                    {/* Search Engine Label */}
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      Search Engine
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Addressed environmental challenges for company Kanton Aagrau by developing a platform to connect businesses in the recycling industry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Algorithmically generated recycling cycles based on distance and plastic types when companies inquired about plastic materials, optimizing resource allocation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Built a recommendation system, utilizing ElasticSearch and AWS for scalable backend support</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <a href="https://www.canva.com/design/DAGBu9Ek7rY/xPjTJOUHyg8gETwk8m74ag/view?utm_content=DAGBu9Ek7rY&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          View Project
                        </button>
                      </a>
                      <a href="https://www.canva.com/design/DAGBu5JWVGo/gn9dEUZSTLcJ8iDw2y68Cw/view?utm_content=DAGBu5JWVGo&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          Tech Stack
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Ottogi Food Product Discovery */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">Ottogi Food Product Discovery</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                        Jul 2023
                      </span>
                    </div>
                    {/* Project Labels */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                        LLM
                      </span>
                      <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                        Search Engine
                      </span>
                      <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                        OCR
                      </span>
                    </div>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed an application for Ottogi (food co.) that enables consumers to instantly discover recipes by scanning product images while shopping, combined with OCR technology for text recognition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Created a chatbot service utilizing GPT-4 and LLM models with prompt engineering skills, combined with a RAG system, allowing customers to easily obtain detailed product information and reviews from Ottogi's extensive data, which reduced search times by 50%</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <a href="https://pentagonal-safflower-f3e.notion.site/33f38d6400ec44a384d59d3c2b03cf3b" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          View Project
                        </button>
                      </a>
                      <a href="https://www.canva.com/design/DAGBuabKkxU/AWPbnBCDYiVFhx0t3aQbQw/view?utm_content=DAGBuabKkxU&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          Tech Stack
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* AWS Cloud Resume Challenge */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">AWS-Cloud-Resume-Challenge educational content</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                        Aug 2023
                      </span>
                    </div>
                    {/* Project Label */}
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      Cloud&DevOps
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed a personal resume website as part of educational content to teach university students about cloud platforms and automated deployment processes, while serving as a mentor to guide them through the learning experience</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Successfully created a website hosted on AWS, demonstrating key skills and concepts, which served as a practical learning tool for students</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Chose AWS and Terraform to provide students with hands-on experience in cloud infrastructure as code, addressing the need for understanding automated and scalable solutions</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <a href="https://resume.hyesookim.com/" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          View Project
                        </button>
                      </a>
                      <a href="https://www.canva.com/design/DAGBuclycjU/AZ6h7dxbyy36cTyqAqL4SA/view?utm_content=DAGBuclycjU&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          Tech Stack
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* SearchWave */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">SearchWave: Search Engine for Startups and Investor</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                        Sep 2023
                      </span>
                    </div>
                    {/* Project Label */}
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      Search Engine
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Built custom search engine using ElasticSearch for startup and investor discovery</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Identified the tendencies of investment companies through our own data preprocessing</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <a href="https://dog-existence-f9b.notion.site/SearchWave-Search-Engine-for-Startups-and-Investor-05812083467d4f75a869fd7a5258d7c2" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          View Project
                        </button>
                      </a>
                      <a href="https://www.canva.com/design/DAGBvdi6AY8/AoDR6UTkPu4dFYK43dm1Kg/view?utm_content=DAGBvdi6AY8&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          Tech Stack
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* ScanScribe */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">ScanScribe: Intelligent Document Deck (IR DECK)</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                        Aug 2023
                      </span>
                    </div>
                    {/* Project Labels */}
                    <div className="flex gap-2">
                      <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                        OCR
                      </span>
                      <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                        Search Engine
                      </span>
                    </div>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Engineered an automation system using OCR technology to convert startup IR documents into data, automating text extraction and data indexing processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Achieved a 35% reduction in manual processing time through automated document processing and data extraction</span>
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <a href="https://dog-existence-f9b.notion.site/ScanScribe-Intelligent-Document-Deck-IR-DECK-Startup-ba8c8e0883fc4994acc76a6f2a8c65f2" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          View Project
                        </button>
                      </a>
                      <a href="https://www.canva.com/design/DAGBvE9C1mY/ZV30fd2hSxAbS7FdRIU5ew/view?utm_content=DAGBvE9C1mY&utm_campaign=designshare&utm_medium=link&utm_source=editor" 
                         target="_blank" 
                         rel="noopener noreferrer">
                        <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                          Tech Stack
                        </button>
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Digital Therapeutics */}
                <Card className="bg-[#1F2937] p-8 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">Digital Therapeutics for Children with ADHD (ICCAS 2023)</h3>
                      <span className="bg-[#2D3B55] text-[#5B8DEF] px-4 py-1 rounded-md text-sm whitespace-nowrap">
                        Jul 2023
                      </span>
                    </div>
                    {/* Project Label */}
                    <span className="inline-block bg-[#2D3B55] text-[#5B8DEF] px-3 py-1 rounded-md text-base">
                      Game
                    </span>
                    <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>"Digital Functional Game" for ADHD children made by Unity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Developed a maze game and a shooting game collaborated with hardware motion detector</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Participated in EKC2023 (Europe-Korea Conference) for poster presentation</span>
                      </li>
                    </ul>
                    <a href="https://resume.hyesookim.com/assets/EKC2023Poster.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      <button className="mt-4 bg-[#2D3B55] text-white px-6 py-2 rounded-lg hover:bg-[#374761] transition-colors">
                        Poster
                      </button>
                    </a>
                  </div>
                </Card>
              </div>
            </section>

            <section id="skills" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">Programming Languages</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Python, HTML, CSS, JavaScript, C++, R
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">LLM & OCR</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-2">
                    <div>• LLM APIs (OpenAI, Upstage Solar etc...)</div>
                    <div>• LangChain, LlamaIndex</div>
                    <div>• Document AI (OCR technology)</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">Cloud Platforms & DevOps</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 space-y-2">
                    <div>• AWS (EC2, S3, RDS, DynamoDB, Lambda, API Gateway, SMS, SNS, SQS, Route53, CloudFront, Secrets Manager, CloudWatch, CloudTrail)</div>
                    <div>• Terraform</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">Databases & Data Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    NoSQL Databases (Elasticsearch, Weaviate, Faiss, Chroma)
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">Development Tools & Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    Streamlit, Gradio
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="achievements" className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Awards Column */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Awards</h2>
                  <div className="space-y-4">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-600 text-white px-3 py-1">
                            1st Prize
                          </Badge>
                          <CardTitle className="text-purple-400">Wrtn Technologies Inc 2nd Generative AI Ideathon, SMWU</CardTitle>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-600">2nd Prize</Badge>
                          <CardTitle className="text-purple-400">BaselHack 2023 - Bell food group</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300 mt-2">
                          • Created an OCR-powered system to automate text extraction from documents, improving 50% of search efficiency
                        </CardDescription>
                        <CardDescription className="text-gray-300">
                          • Created a custom search engine using ElasticSearch to streamline information discovery for startups and investors
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-600">1st Prize</Badge>
                          <CardTitle className="text-purple-400">AWS x khu-campustown summer hackathon</CardTitle>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-purple-600">2nd Prize</Badge>
                          <CardTitle className="text-purple-400">ICCAS 2023 - Digital Therapeutics for Children with ADHD</CardTitle>
                        </div>
                        <CardDescription className="text-gray-300 mt-2">
                          Issued by Euro-Korean Women Scientists and Engineers Association
                        </CardDescription>
                        <CardDescription className="text-gray-300">
                          Participated in EKC2023 conference in Munich, Germany
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                {/* Certifications Column */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Certifications</h2>
                  <div className="space-y-4">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-purple-400">AWS Certified Solutions Architect Associate</CardTitle>
                        <CardDescription className="text-gray-300">Issued Apr 2024</CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-purple-400">Stanford Continuing Studies TECH 152 Z/H - A Crash Course in AI</CardTitle>
                        <CardDescription className="text-gray-300">Issued Oct 2024</CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-purple-400">AWS Certified Cloud Practitioner</CardTitle>
                        <CardDescription className="text-gray-300">Issued Jul 2023</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}