"use client";

import { Card } from "@/components/ui/card";

export default function StudentList({
  students,
  selectedStudent,
  setSelectedStudent,
  studentSearch,
}) {
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const handleStudentClick = (studentName) => {
    setSelectedStudent(selectedStudent === studentName ? null : studentName);
  };

  return (
    <>
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
              onClick={() => handleStudentClick(student.name)}
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

          {/* No Results Message */}
          {filteredStudents.length === 0 && studentSearch && (
            <div className="text-center py-8 text-gray-500">
              Geen leerlingen gevonden voor "{studentSearch}"
            </div>
          )}
        </div>
      </Card>

      {/* Selected Student Info */}
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
    </>
  );
}
