import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface UserFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  sortOrder: "asc" | "desc";
  onSortOrderChange: (order: "asc" | "desc") => void;
  onSearch: () => void;
}

const UserFilters = ({
  searchTerm,
  onSearchChange,
  sortOrder,
  onSortOrderChange,
  onSearch,
}: UserFiltersProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md">
          <label className="text-sm font-medium mb-2 block">
            Buscar por nombre o edad
          </label>
          <ButtonGroup>
            <Input
              placeholder="Buscar usuarios..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
            <Button variant="outline" aria-label="Search" onClick={onSearch}>
              <SearchIcon />
            </Button>
          </ButtonGroup>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2 block">
            Orden alfabético
          </label>
          <ButtonGroup>
            <Button
              variant={sortOrder === "asc" ? "default" : "outline"}
              onClick={() => onSortOrderChange("asc")}
              className="text-sm"
            >
              A-Z
            </Button>
            <Button
              variant={sortOrder === "desc" ? "default" : "outline"}
              onClick={() => onSortOrderChange("desc")}
              className="text-sm"
            >
              Z-A
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <Separator />
    </div>
  );
};

export default UserFilters;
