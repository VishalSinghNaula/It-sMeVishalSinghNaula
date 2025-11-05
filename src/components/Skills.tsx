import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Cpu, Layers, Palette } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
    color: "hsl(250, 100%, 65%)",
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "HTML/CSS"],
    color: "hsl(200, 100%, 60%)",
  },
  {
    icon: Database,
    title: "Backend & DB",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
    color: "hsl(280, 100%, 65%)",
  },
  {
    icon: Cpu,
    title: "DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD"],
    color: "hsl(180, 100%, 60%)",
  },
  {
    icon: Layers,
    title: "Frameworks",
    skills: ["Express", "FastAPI", "Django", "Spring"],
    color: "hsl(320, 100%, 65%)",
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "UI/UX", "Responsive Design", "Animations"],
    color: "hsl(30, 100%, 60%)",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(200,100%,60%)]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A diverse toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 8px 30px -8px ${category.color}20`,
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${category.color}05 0%, transparent 100%)`
                }}
              ></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div 
                    className="p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-10 h-10" style={{ color: category.color }} />
                  </div>
                  
                  <h3 className="font-bold text-2xl">{category.title}</h3>
                  
                  <div className="space-y-3 w-full">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="relative group/skill"
                      >
                        <div 
                          className="text-sm font-medium py-3 px-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 border border-border hover:border-accent/30"
                        >
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
