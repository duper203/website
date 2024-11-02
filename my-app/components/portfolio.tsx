'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Home, Briefcase, GraduationCap, Folder, Award, Phone, Globe } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen sticky top-0 bg-gray-800 p-6 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Hyesoo Kim</h2>
            <p className="text-sm text-gray-400 mb-4">Developer Relations | Software Engineer</p>
            <div className="flex space-x-2 mb-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300"
                onClick={() => window.open('https://github.com/duper203', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300"
                onClick={() => window.open('https://www.linkedin.com/in/hyesoo--kim/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300"
                onClick={() => window.open('mailto:hsookim203@gmail.com')}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-400">+82 1092118325</p>
            <p className="text-xs text-gray-400">hsookim203@gmail.com</p>
          </div>
          <nav className="space-y-4">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'education', icon: GraduationCap, label: 'Education' },
              { id: 'projects', icon: Folder, label: 'Projects' },
              { id: 'skills', icon: Award, label: 'Skills' },
              { id: 'achievements', icon: Award, label: 'Awards & Certificates' },
              { id: 'contact', icon: Phone, label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 w-full p-2 rounded-lg transition-colors duration-200 ${
                  activeSection === item.id ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
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
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  View My Work
                </Button>
              </div>

              {/* Right Column - About */}
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">About Me</h2>
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="pt-6">
                    <p className="mb-4 text-gray-300">
                      I'm a passionate Developer Relations professional and Software Engineer with a strong background in AI and cloud technologies. 
                      Currently pursuing a B.S. in Computer Science at Sookmyung Women's University, I've gained valuable experience through various roles and projects, 
                      focusing on LLM development, cloud solutions, and innovative AI applications.
                    </p>
                  </CardContent>
                </Card>
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
                      <span>Develops LLM-focused contents, including a total of 14 cookbooks, tech blogs, tutorial, while managing company social media by sharing technical content to drive engagement</span>
                    </li>
                    <li className="flex items-start">
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

            <section id="education" className="mb-16">
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
            </section>

            <section id="projects" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</h2>
              
              {/* Project Categories */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge 
                  className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={() => filterProjects('all')}
                >
                  All Projects
                </Badge>
                <Badge 
                  className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={() => filterProjects('ai')}
                >
                  AI & ML
                </Badge>
                <Badge 
                  className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={() => filterProjects('cloud')}
                >
                  Cloud & DevOps
                </Badge>
                <Badge 
                  className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={() => filterProjects('game')}
                >
                  Game Development
                </Badge>
                <Badge 
                  className="cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors"
                  onClick={() => filterProjects('search')}
                >
                  Search Engine
                </Badge>
              </div>

              {/* Projects Grid Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AI & ML Projects */}
                <div className="col-span-full">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">AI & Machine Learning</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* EPL Predictor */}
                    <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-purple-400 mb-1">EPL Predictor</CardTitle>
                            <CardDescription className="text-gray-300">Machine Learning, Data Analysis</CardDescription>
                          </div>
                          <Badge className="bg-purple-600 text-white px-3 py-1">May-Jul 2024</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Developed an EPL Prediction Model using an Elo rating system, optimizing parameters (K-factor, Home Field Advantage) for accurate match predictions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Ran 1,000 simulations to forecast match outcomes and updated Elo ratings for all EPL teams</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Built an interactive visualization dashboard to display predicted points, league rankings, and probabilities for key outcomes</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">View Project</Button>
                      </CardContent>
                    </Card>

                    {/* Tech Support Chatbot */}
                    <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-purple-400 mb-1">Tech Support Chatbot</CardTitle>
                            <CardDescription className="text-gray-300">Bell's Tech Community | LLM</CardDescription>
                          </div>
                          <Badge className="bg-purple-600 text-white px-3 py-1">Oct 2023</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Developed an LLM model that delivers instant solutions via a chatbot, reducing search time from 30 minutes to less than 10 seconds</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Implemented RAG system structure, enhancing LLM model's ability to retrieve and generate precise answers with 10-20% higher accuracy than ChatGPT</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">View Project</Button>
                      </CardContent>
                    </Card>

                    {/* B2B Solution for Plastic Recycle Platform */}
                    <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-purple-400 mb-1">B2B Plastic Recycling Platform</CardTitle>
                            <CardDescription className="text-gray-300">Kanton Aagrau | LLM</CardDescription>
                          </div>
                          <Badge className="bg-purple-600 text-white px-3 py-1">Nov 2023</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Addressed environmental challenges by developing a platform to connect businesses in the recycling industry</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Algorithmically generated recycling cycles based on distance and plastic types</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Built a recommendation system using ElasticSearch and AWS for scalable backend support</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">View Project</Button>
                      </CardContent>
                    </Card>

                    {/* Ottogi Food Product Discovery */}
                    <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-purple-400 mb-1">Ottogi Food Product Discovery</CardTitle>
                            <CardDescription className="text-gray-300">LLM, No-SQL Search Engine</CardDescription>
                          </div>
                          <Badge className="bg-purple-600 text-white px-3 py-1">Jul 2023</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Developed an application enabling consumers to instantly discover recipes by scanning product images while shopping</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Created a chatbot service utilizing GPT-4 and LLM models with RAG system, reducing search times by 50%</span>
                          </li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline" className="text-purple-400 border-purple-400">Python</Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">AWS</Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">Elasticsearch</Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">OCR</Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">OpenAI</Badge>
                          <Badge variant="outline" className="text-purple-400 border-purple-400">LlamaIndex</Badge>
                        </div>
                        <Button variant="outline" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">View Project</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Cloud & DevOps Projects */}
                <div className="col-span-full">
                  <h3 className="text-2xl font-semibold mb-6 text-purple-400">Cloud & DevOps</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* AWS Cloud Resume Challenge */}
                    <Card className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl text-purple-400 mb-1">AWS Cloud Resume Challenge</CardTitle>
                            <CardDescription className="text-gray-300">Educational Content</CardDescription>
                          </div>
                          <Badge className="bg-purple-600 text-white px-3 py-1">Apr 2024</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 text-gray-300 mb-4">
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Developed a personal resume website as educational content while serving as a mentor</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Created AWS-hosted website demonstrating key skills and concepts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span>Implemented infrastructure as code using Terraform for automated deployment</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="text-purple-400 hover:text-purple-300 border-purple-400 hover:border-purple-300">View Project</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
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
                          <Badge className="bg-purple-600">1st Prize</Badge>
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

            <section id="contact" className="mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Contact Me</h2>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                      <input id="name" className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                      <input id="email" className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                      <textarea id="message" className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-100" rows={4} required></textarea>
                    </div>
                    <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </section>
          </main>

          <footer className="border-t border-gray-700 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <div className="text-center text-sm text-gray-400 md:text-left space-y-1">
                <p>© Hyesoo Kim</p>
                <p>Last updated: Oct 2024</p>
                <p>This website is made by React</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}