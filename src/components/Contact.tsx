import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have an exciting project? Let's bring your ideas to life together
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm always excited to discuss new projects, innovative ideas, or opportunities 
                to collaborate and create something amazing.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "vishalnaula@gmail.com", color: "hsl(250, 100%, 65%)" },
                { icon: Phone, label: "Phone", value: "+91 9625586167", color: "hsl(200, 100%, 60%)" },
                { icon: MapPin, label: "Location", value: "Dehradun, India", color: "hsl(280, 100%, 65%)" },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-5 p-4 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 group"
                >
                  <div 
                    className="p-4 rounded-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-muted-foreground mb-1">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="lg:col-span-3 border-2 hover:border-accent transition-all duration-300 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="h-12 border-2 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-12 border-2 focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Subject</label>
                  <Input 
                    placeholder="Project Collaboration" 
                    className="h-12 border-2 focus:border-accent transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6}
                    className="border-2 focus:border-accent transition-colors resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full h-14 text-lg gap-3 bg-gradient-to-r from-accent to-[hsl(200,100%,60%)] hover:shadow-lg hover:scale-105 transition-all duration-300 border-0"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
