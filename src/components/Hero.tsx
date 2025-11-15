import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(200,100%,60%)]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-gradient mb-4 animate-slide-up">
          <Sparkles className="w-4 h-4 text-accent animate-glow" />
          <span className="text-sm font-medium">Available for opportunities</span>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Vishal</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
            Full Stack Developer & Creative Thinker
          </p>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Crafting digital experiences that blend creativity with code. Transforming ideas into
          elegant, scalable solutions.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] hover:shadow-[0_0_30px_rgba(138,94,255,0.4)] transition-all duration-300 hover:scale-105 border-0"
          >
            <Mail className="w-4 h-4" />
            <a href="mailto:vishalnaula@gmail.com">Let's Connect</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-2 hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
        </div>

        {/* Social Icons */}
        <div
          className="flex gap-4 justify-center pt-4 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/VishalSinghNaula"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border-2 border-border hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-singh-naula"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border-2 border-border hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:vishalnaula@gmail.com"
            className="p-4 rounded-2xl border-2 border-border hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
          >
            <Mail className="w-6 h-6" />
          </a>

          <a
            href="https://leetcode.com/u/Agent_V5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border-2 border-border hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
          >
            <SiLeetcode className="w-6 h-6" />
          </a>
        </div>

        <div className="pt-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="p-2 rounded-full border-2 border-current group-hover:animate-bounce">
              <ArrowDown className="w-5 h-5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
