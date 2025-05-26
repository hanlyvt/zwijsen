"use client";

import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchHeader({
  searchTerm,
  setSearchTerm,
  studentSearch,
  setStudentSearch,
  selectedGroup,
  setSelectedGroup,
}) {
  const handleGroupChange = () => {
    const groups = ["Groep 6A", "Groep 6B", "Groep 5A", "Groep 5B"];
    const currentIndex = groups.indexOf(selectedGroup);
    const nextIndex = (currentIndex + 1) % groups.length;
    setSelectedGroup(groups[nextIndex]);
  };

  return (
    <div className="mb-8">
      {/* Main Search */}
      <div className="relative mb-6">
        <Input
          placeholder="Zoeken"
          className="max-w-md bg-white border-gray-300 pl-4 pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {/* Group Selector and Icons */}
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-white border-gray-300 hover:bg-gray-50"
          onClick={handleGroupChange}
        >
          {selectedGroup}
          <ChevronDown className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            C
          </div>
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            S
          </div>
          <div className="bg-gray-200 px-2 py-1 rounded text-xs font-medium">
            +12
          </div>
        </div>
      </div>

      {/* Student Search */}
      <div className="relative">
        <Input
          placeholder="Zoek leerling..."
          className="max-w-md bg-white border-gray-300 pl-4 pr-10"
          value={studentSearch}
          onChange={(e) => setStudentSearch(e.target.value)}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
}
