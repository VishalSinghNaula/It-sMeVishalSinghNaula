import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Target, Zap } from "lucide-react";

const stats = [
  { icon: Target, value: "2026", label: "Expected Graduation", color: "hsl(250, 100%, 65%)" },
  { icon: Code2, value: "10+", label: "Projects Delivered", color: "hsl(200, 100%, 60%)" },
  { icon: Zap, value: "5+", label: "Technologies", color: "hsl(280, 100%, 65%)" },
  { icon: Rocket, value: "∞", label: "Passion & Drive", color: "hsl(180, 100%, 60%)" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a <span className="font-semibold text-gradient">passionate developer</span> with a 
                strong foundation in computer science and a relentless drive to create innovative solutions 
                that make a difference.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in tech is fueled by <span className="font-semibold text-foreground">curiosity</span> and 
                a commitment to excellence. I thrive on challenges that push me to learn, grow, 
                and deliver exceptional results.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or brainstorming the next big idea.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Problem Solver", "Quick Learner", "Team Player", "Creative Thinker"].map((trait, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent/10 to-[hsl(200,100%,60%)]/10 border border-accent/20 text-foreground font-medium hover:scale-105 transition-transform duration-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 order-1 lg:order-2">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-500 hover:scale-105 hover:rotate-2"
                style={{ 
                  boxShadow: `0 8px 30px -8px ${stat.color}20`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div 
                    className="inline-flex p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-gradient">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
