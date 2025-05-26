"use client";

import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Component() {
  const [selectedGroup, setSelectedGroup] = useState("Groep 6A");
  const [searchTerm, setSearchTerm] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [activeNav, setActiveNav] = useState("Leerlingen lijst");
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  const students = [
    { name: "Koen", completed: "8/8", score: 100, color: "bg-green-500" },
    { name: "Bos", completed: "2/4", score: 50, color: "bg-orange-500" },
    { name: "Lee-Zin", completed: "1/4", score: 25, color: "bg-red-500" },
    { name: "Jeremy", completed: "4/4", score: 100, color: "bg-green-500" },
    { name: "Kien", completed: "2/3", score: 67, color: "bg-orange-500" },
    { name: "Bilal", completed: "4/4", score: 100, color: "bg-green-500" },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 shadow-sm">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-sm">
              z
            </div>
            <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center text-white font-bold text-sm">
              w
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
              i
            </div>
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white font-bold text-sm">
              j
            </div>
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white font-bold text-sm">
              s
            </div>
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold text-sm">
              e
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
              n
            </div>
          </div>
          <p className="text-blue-600 text-sm font-medium">
            Breng leren tot leven
          </p>
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          <Button
            variant={activeNav === "Start" ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeNav === "Start"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveNav("Start")}
          >
            Start
          </Button>
          <Button
            variant={activeNav === "Werkblad scannen" ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeNav === "Werkblad scannen"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveNav("Werkblad scannen")}
          >
            Werkblad scannen
          </Button>
          <Button
            variant={activeNav === "Leerlingen lijst" ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeNav === "Leerlingen lijst"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveNav("Leerlingen lijst")}
          >
            Leerlingen lijst
          </Button>
          <Button
            variant={activeNav === "Evaluatie" ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeNav === "Evaluatie"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveNav("Evaluatie")}
          >
            Evaluatie
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Input
              placeholder="Zoeken"
              className="max-w-md bg-white border-gray-300 pl-4 pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white border-gray-300 hover:bg-gray-50"
              onClick={() => {
                const groups = ["Groep 6A", "Groep 6B", "Groep 5A", "Groep 5B"];
                const currentIndex = groups.indexOf(selectedGroup);
                const nextIndex = (currentIndex + 1) % groups.length;
                setSelectedGroup(groups[nextIndex]);
              }}
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

        {/* Student List */}
        <Card className="bg-white shadow-sm">
          <div className="p-6">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-sm font-medium text-gray-600">
              <div></div>
              <div className="text-center">Gemaakte werk</div>
              <div className="text-center">Gemiddelde score</div>
            </div>

            {/* Student Rows */}
            {filteredStudents.map((student, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedStudent === student.name
                    ? "bg-blue-50 border-blue-200"
                    : ""
                }`}
                onClick={() =>
                  setSelectedStudent(
                    selectedStudent === student.name ? null : student.name
                  )
                }
              >
                <div className="font-medium text-gray-900">{student.name}</div>
                <div className="text-center text-gray-700">
                  {student.completed}
                </div>
                <div className="flex justify-center">
                  <div
                    className={`h-6 w-24 rounded-full ${student.color} transition-all hover:scale-105`}
                  ></div>
                </div>
              </div>
            ))}
            {filteredStudents.length === 0 && studentSearch && (
              <div className="text-center py-8 text-gray-500">
                Geen leerlingen gevonden voor "{studentSearch}"
              </div>
            )}
          </div>
        </Card>
        {selectedStudent && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">
              Geselecteerde leerling: {selectedStudent}
            </h3>
            <p className="text-blue-700 text-sm">
              Klik opnieuw om de selectie op te heffen
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
