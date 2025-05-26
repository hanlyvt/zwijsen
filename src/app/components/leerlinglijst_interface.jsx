"use client";

import { useState } from "react";
import SearchHeader from "./search-header";
import StudentList from "./Leerlingenlijst";

export default function ZwijsenInterface() {
  const [selectedGroup, setSelectedGroup] = useState("Groep 6A");
  const [searchTerm, setSearchTerm] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { name: "Koen", completed: "8/8", score: 100, color: "bg-green-500" },
    { name: "Bos", completed: "2/4", score: 50, color: "bg-orange-500" },
    { name: "Lee-Zin", completed: "1/4", score: 25, color: "bg-red-500" },
    { name: "Jeremy", completed: "4/4", score: 100, color: "bg-green-500" },
    { name: "Kien", completed: "2/3", score: 67, color: "bg-orange-500" },
    { name: "Bilal", completed: "4/4", score: 100, color: "bg-green-500" },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <SearchHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        studentSearch={studentSearch}
        setStudentSearch={setStudentSearch}
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />

      <StudentList
        students={students}
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
        studentSearch={studentSearch}
      />
    </div>
  );
}
