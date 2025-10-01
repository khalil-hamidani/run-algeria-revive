import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";
import heroImage from "@/assets/hero-running.jpg";

const Index = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Runners in Algeria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 animate-fade-in">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Découvrez les courses à pied en Algérie
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Trouvez et participez aux meilleurs événements de course à pied à travers tout le pays
            </p>
            <Button size="lg" className="text-lg h-14 px-8 shadow-hover">
              Voir les événements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 -mt-8 relative z-20 animate-slide-up">
        <FilterBar onFilterChange={handleFilterChange} />
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Événements à venir
          </h2>
          <p className="text-muted-foreground text-lg">
            {mockEvents.length} courses disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Run Algeria
              </h3>
              <p className="text-muted-foreground">
                La plateforme de référence pour tous les événements de course à pied en Algérie.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-muted-foreground">
                <a href="mailto:contact@coursesalgerie.com" className="hover:text-primary transition-colors">
                  contact@coursesalgerie.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 Run Algeria. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
