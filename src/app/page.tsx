"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { DumbbellIcon, ZapIcon, SparklesIcon, ArrowRightIcon, ShieldIcon, BrainIcon, ClockIcon } from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <SparklesIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">AI-POWERED FITNESS</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">Build Your</span>{" "}
              <span className="text-primary">Dream Physique</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate personalized workout and diet plans tailored to your goals, 
              fitness level, and preferences using advanced AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isSignedIn ? (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  <Link href="/generate-program">
                    Generate Your Program
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                >
                  <Link href="/sign-up">
                    Get Started Free
                    <ArrowRightIcon className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 px-8 py-6 text-lg"
              >
                <Link href="/profile">
                  View Demo Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">Why</span> FitGenX?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40"></div>
              
              <BrainIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your fitness level, goals, and preferences to create 
                perfectly tailored workout and nutrition plans.
              </p>
            </div>
            
            <div className="relative p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40"></div>
              
              <DumbbellIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Personalized Workouts</h3>
              <p className="text-muted-foreground">
                Get custom workout routines with specific exercises, sets, reps, 
                and rest periods designed for your body and goals.
              </p>
            </div>
            
            <div className="relative p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40"></div>
              
              <ZapIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Nutrition Planning</h3>
              <p className="text-muted-foreground">
                Receive complete meal plans with calorie targets and macro breakdowns 
                to fuel your workouts and optimize results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-mono text-sm">Workout Variations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground font-mono text-sm">Meal Combinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground font-mono text-sm">Fitness Goals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground font-mono text-sm">AI Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-primary">Transformation</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of users who have already achieved their fitness goals 
            with our AI-powered program generator.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            <Link href={isSignedIn ? "/generate-program" : "/sign-up"}>
              {isSignedIn ? "Generate Your Program" : "Get Started Now"}
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ZapIcon className="w-5 h-5 text-primary" />
              <span className="font-bold font-mono">
                code<span className="text-primary">flex</span>.ai
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} FitGenX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

