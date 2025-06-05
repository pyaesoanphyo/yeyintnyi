
import { Mail, MapPin, GraduationCap, TrendingUp, Languages, Calculator, Brain, Briefcase, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const skills = [
    { icon: TrendingUp, name: "FinTech", level: "Enthusiast" },
    { icon: Languages, name: "Japanese", level: "N3" },
    { icon: Languages, name: "English", level: "Upper Intermediate" },
    { icon: Calculator, name: "Advanced Excel", level: "Expert" },
    { icon: Brain, name: "Prompt Engineering", level: "Advanced" },
    { icon: TrendingUp, name: "Digital Knowledge", level: "Strong" }
  ];

  const experiences = [
    {
      title: "Former Banker",
      company: "UAB Bank Myanmar",
      icon: Briefcase,
      description: "Banking operations and financial services"
    },
    {
      title: "Community Manager",
      company: "MM Dataverse",
      icon: Users,
      description: "Community engagement and management"
    },
    {
      title: "Private Maths Educator",
      company: "Matriculation Students",
      icon: BookOpen,
      description: "Mathematics tutoring and education"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Ye Yint Ny</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
                Ye Yint Ny
                <span className="block text-3xl lg:text-4xl text-blue-600 font-normal mt-2">
                  aka Jamesi
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Business Student & FinTech Enthusiast passionate about bridging traditional finance with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all hover:scale-105"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg transition-all hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1">
                  <img 
                    src="/lovable-uploads/fa54e239-c2e5-4ba4-b4bd-ba6f3ec4d729.png" 
                    alt="Ye Yint Ny" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated professional combining traditional banking experience with modern FinTech expertise, 
              currently pursuing business studies while contributing to innovative data communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Background</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently based in Kobe, Japan, I'm a business student with a passion for FinTech innovations. 
                My journey spans from traditional banking at UAB Bank Myanmar to community management in the 
                data science space, complemented by educational roles in mathematics.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Kobe, Japan</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-600 text-sm">Business Student</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Passion</h4>
                  <p className="text-gray-600 text-sm">FinTech Innovation</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Languages className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-600 text-sm">Japanese N3, English</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Brain className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-gray-600 text-sm">Digital & AI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">
              A diverse skill set combining technical proficiency with language abilities and innovative thinking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-3">
                    <skill.icon className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">
              Diverse experience across banking, community management, and education sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-0">
                  <exp.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-blue-600 font-medium mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8">
            Open to opportunities in FinTech, business development, and innovative projects.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <a 
                  href="mailto:yyn171001@gmail.com" 
                  className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
                >
                  yyn171001@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-lg text-gray-900">Kobe, Japan</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all hover:scale-105"
              >
                <a href="mailto:yyn171001@gmail.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ye Yint Ny (Jamesi). Building bridges between traditional finance and innovative technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
