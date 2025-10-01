import { Link } from "react-router-dom";
import { Calendar, MapPin, DollarSign, Award, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  distance: string;
  price: string;
  type: string;
  image: string;
  elevation?: string;
  isFinished?: boolean;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-card" />
          
          {event.isFinished && (
            <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
              FINI
            </Badge>
          )}
          
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
            {event.type}
          </Badge>

          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-xl font-bold text-white line-clamp-2 drop-shadow-lg">
              {event.title}
            </h3>
          </div>
        </div>

        <CardContent className="p-5 space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium">{event.date} à {event.time}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 text-secondary" />
            <span>{event.location}, {event.city}</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{event.distance}</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10">
              <DollarSign className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">{event.price}</span>
            </div>

            {event.elevation && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10">
                <TrendingUp className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">{event.elevation}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
