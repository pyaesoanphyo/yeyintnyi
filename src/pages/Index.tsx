import { Mail, MapPin, GraduationCap, TrendingUp, Languages, Calculator, Brain, Briefcase, Users, BookOpen, Cherry } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const skills = [
    { icon: TrendingUp, name: "FinTech", level: "Enthusiast", color: "text-emerald-600" },
    { icon: Languages, name: "Japanese", level: "N3", color: "text-red-500" },
    { icon: Languages, name: "English", level: "Upper Intermediate", color: "text-blue-600" },
    { icon: Calculator, name: "Advanced Excel", level: "Expert", color: "text-green-600" },
    { icon: Brain, name: "Prompt Engineering", level: "Advanced", color: "text-purple-600" },
    { icon: TrendingUp, name: "Digital Knowledge", level: "Strong", color: "text-indigo-600" }
  ];

  const experiences = [
    {
      title: "Former Banker",
      company: "UAB Bank Myanmar",
      icon: Briefcase,
      description: "Banking operations and financial services",
      color: "bg-gradient-to-br from-amber-50 to-orange-100 border-orange-200"
    },
    {
      title: "Community Manager",
      company: "MM Dataverse",
      icon: Users,
      description: "Community engagement and management",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100 border-indigo-200"
    },
    {
      title: "Private Maths Educator",
      company: "Matriculation Students",
      icon: BookOpen,
      description: "Mathematics tutoring and education",
      color: "bg-gradient-to-br from-emerald-50 to-teal-100 border-teal-200"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Decorative elements */}
      <div className="fixed top-20 right-10 opacity-10 text-red-200 text-8xl font-thin">桜</div>
      <div className="fixed bottom-20 left-10 opacity-10 text-orange-200 text-6xl font-thin">和</div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-red-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Cherry className="w-6 h-6 text-red-500" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Ye Yint Ny
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Experience</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/30 via-orange-100/30 to-yellow-100/30"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
                  <span className="bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 bg-clip-text text-transparent">
                    Ye Yint Ny
                  </span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <span className="text-2xl lg:text-3xl text-red-600 font-light">aka</span>
                  <span className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    James
                  </span>
                  <Cherry className="w-8 h-8 text-red-500 animate-pulse" />
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-red-100 shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Business Student & <span className="text-red-600 font-semibold">FinTech Enthusiast</span> passionate about bridging 
                  traditional finance with innovative technology solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-red-300 text-red-700 hover:bg-red-50 px-8 py-4 text-lg rounded-xl transition-all hover:scale-105 bg-white/70 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-red-400 via-orange-500 to-yellow-500 p-2 shadow-2xl">
                  <img 
                    src="/lovable-uploads/fa54e239-c2e5-4ba4-b4bd-ba6f3ec4d729.png" 
                    alt="Ye Yint Ny" 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl border-4 border-red-100">
                  <MapPin className="w-8 h-8 text-red-600" />
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-full p-3 shadow-xl border-4 border-orange-100">
                  <Cherry className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-white via-red-50/30 to-orange-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A dedicated professional combining traditional banking experience with modern FinTech expertise, 
              currently pursuing business studies while contributing to innovative data communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-100 shadow-lg">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-red-600">背景</span>
                <span className="text-gray-400">|</span>
                Background
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Currently based in Kobe, Japan, I'm a business student with a passion for FinTech innovations. 
                My journey spans from traditional banking at UAB Bank Myanmar to community management in the 
                data science space, complemented by educational roles in mathematics.
              </p>
              <div className="flex items-center gap-4 text-gray-600 bg-red-50 p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-red-600" />
                <span className="text-lg">Kobe, Japan 🇯🇵</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                <CardContent className="p-0">
                  <GraduationCap className="w-10 h-10 text-red-600 mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Education</h4>
                  <p className="text-gray-600">Business Student</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <CardContent className="p-0">
                  <TrendingUp className="w-10 h-10 text-emerald-600 mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Passion</h4>
                  <p className="text-gray-600">FinTech Innovation</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <CardContent className="p-0">
                  <Languages className="w-10 h-10 text-purple-600 mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Languages</h4>
                  <p className="text-gray-600">Japanese N3, English</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-xl transition-all hover:scale-105 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <CardContent className="p-0">
                  <Brain className="w-10 h-10 text-orange-600 mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Expertise</h4>
                  <p className="text-gray-600">Digital & AI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-gray-50 via-red-50/50 to-orange-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              A diverse skill set combining technical proficiency with language abilities and innovative thinking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:scale-105 bg-white/80 backdrop-blur-sm border-gray-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-red-100 to-orange-100">
                      <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-r from-white via-red-50/30 to-orange-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent mb-6">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Diverse experience across banking, community management, and education sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-all hover:scale-105 ${exp.color} border-2`}>
                <CardContent className="p-0">
                  <div className="p-4 rounded-full bg-white/80 w-fit mb-6">
                    <exp.icon className="w-12 h-12 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{exp.title}</h3>
                  <h4 className="text-red-600 font-medium mb-4 text-lg">{exp.company}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-20 text-white/20 text-9xl font-thin">連絡</div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">Let's Connect</h2>
          <p className="text-2xl text-orange-100 mb-12 leading-relaxed">
            Open to opportunities in FinTech, business development, and innovative projects.
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4 bg-red-50 p-4 rounded-xl">
                <Mail className="w-7 h-7 text-red-600" />
                <a 
                  href="mailto:yyn171001@gmail.com" 
                  className="text-xl text-gray-900 hover:text-red-600 transition-colors font-medium"
                >
                  yyn171001@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-xl">
                <MapPin className="w-7 h-7 text-orange-600" />
                <span className="text-xl text-gray-900 font-medium">Kobe, Japan 🇯🇵</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-xl rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <a href="mailto:yyn171001@gmail.com">
                  <Mail className="w-6 h-6 mr-3" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cherry className="w-6 h-6 text-red-500" />
            <span className="text-xl font-semibold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ye Yint Ny (James)
            </span>
            <Cherry className="w-6 h-6 text-red-500" />
          </div>
          <p className="text-gray-400 text-lg">
            © 2024 Building bridges between traditional finance and innovative technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
