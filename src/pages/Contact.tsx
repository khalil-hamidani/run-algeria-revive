import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              À propos de Courses à pied Algérie
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ce site a été créé pour recenser toutes les courses à pied en Algérie, afin de faciliter leur
              découverte par les coureurs. Nous essayons de rester en contact avec les organisateurs et
              d'obtenir leur approbation avant de publier leurs événements. Cela permet aux coureurs
              algériens de savoir facilement quand et où courir, tout en bénéficiant d'informations précises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-elegant animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 mr-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Pour les organisateurs</h2>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Si vous êtes un organisateur de course, vous pouvez nous contacter directement par email pour que
                  nous ajoutions votre événement. Nous collectons toutes les informations nécessaires afin de présenter
                  vos courses correctement et avec votre accord.
                </p>

                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Informations à fournir :
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Nom de la course</li>
                    <li>• Date et lieu (wilaya)</li>
                    <li>• Distance et type de course</li>
                    <li>• Conditions de participation</li>
                    <li>• Tranche d'âge des participants</li>
                    <li>• Prix éventuels</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-xl bg-secondary/10 mr-4">
                    <Mail className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold">Nous contacter</h2>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Pour toute question, suggestion ou pour ajouter un événement, n'hésitez pas à nous envoyer un email.
                </p>

                <a
                  href="mailto:contact@coursesalgerie.com"
                  className="inline-flex items-center justify-center w-full h-12 px-6 rounded-lg bg-gradient-hero text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  contact@coursesalgerie.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
