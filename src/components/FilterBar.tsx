import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  return (
    <Card className="p-6 shadow-elegant border-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Select onValueChange={(value) => onFilterChange({ wilaya: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Wilaya" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">Toutes les wilayas</SelectItem>
            <SelectItem value="algiers">Alger</SelectItem>
            <SelectItem value="oran">Oran</SelectItem>
            <SelectItem value="constantine">Constantine</SelectItem>
            <SelectItem value="blida">Blida</SelectItem>
            <SelectItem value="tlemcen">Tlemcen</SelectItem>
            <SelectItem value="annaba">Annaba</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ type: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="marathon">Marathon</SelectItem>
            <SelectItem value="semi-marathon">Semi-marathon</SelectItem>
            <SelectItem value="10km">10 KM</SelectItem>
            <SelectItem value="trail">Trail</SelectItem>
            <SelectItem value="course">Course</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ date: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">Toutes les dates</SelectItem>
            <SelectItem value="upcoming">À venir</SelectItem>
            <SelectItem value="this-month">Ce mois-ci</SelectItem>
            <SelectItem value="next-month">Mois prochain</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ price: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Prix" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">Tous les prix</SelectItem>
            <SelectItem value="free">Gratuit</SelectItem>
            <SelectItem value="under-1000">Moins de 1000 DA</SelectItem>
            <SelectItem value="1000-2000">1000-2000 DA</SelectItem>
            <SelectItem value="over-2000">Plus de 2000 DA</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ distance: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Distance" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="all">Toutes les distances</SelectItem>
            <SelectItem value="5km">5 KM</SelectItem>
            <SelectItem value="10km">10 KM</SelectItem>
            <SelectItem value="21km">21 KM (Semi)</SelectItem>
            <SelectItem value="42km">42 KM (Marathon)</SelectItem>
            <SelectItem value="trail">Trail</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ sort: value })}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Date la plus proche" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="date-asc">Date croissante</SelectItem>
            <SelectItem value="date-desc">Date décroissante</SelectItem>
            <SelectItem value="price-asc">Prix croissant</SelectItem>
            <SelectItem value="price-desc">Prix décroissant</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Card>
  );
};

export default FilterBar;
