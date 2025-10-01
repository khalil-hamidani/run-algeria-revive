import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, DollarSign, Award, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";

const EventDetail = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Événement non trouvé</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link to="/">
            <Button variant="secondary" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-secondary text-secondary-foreground text-sm px-3 py-1">
              {event.type}
            </Badge>
            {event.isFinished && (
              <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
                FINI
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            {event.title}
          </h1>
          <p className="text-xl text-primary-foreground/90">
            {event.date} à {event.time} • {event.location}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-primary" />
                  Informations principales
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Wilaya</p>
                      <p className="font-semibold text-foreground">{event.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Calendar className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold text-foreground">{event.date} à {event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Distance</p>
                      <p className="font-semibold text-foreground">{event.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Prix d'inscription</p>
                      <p className="font-semibold text-foreground">{event.price}</p>
                    </div>
                  </div>

                  {event.elevation && (
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <TrendingUp className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Dénivelé</p>
                        <p className="font-semibold text-foreground">{event.elevation}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tranche d'âge</p>
                      <p className="font-semibold text-foreground">18 ans minimum</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Conditions</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Certificat médical obligatoire</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Âge minimum 18 ans</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Inscription en ligne ou sur place</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-elegant sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">S'inscrire</h3>
                <p className="text-muted-foreground mb-6">
                  Contactez les organisateurs pour vous inscrire à cet événement.
                </p>
                <Button className="w-full h-12 text-base" size="lg">
                  Contacter les organisateurs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
