"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Save, X, Plus, Trash2 } from "lucide-react";

export default function Resultaten() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Koen",
      percentage: 60,
      taal: { score: 10, color: "bg-orange-500" },
      rekenen: { score: 8, color: "bg-red-500" },
      spelling: { score: 10, color: "bg-orange-500" },
    },
    {
      id: 2,
      name: "Bas",
      percentage: 60,
      taal: { score: 15, color: "bg-green-500" },
      rekenen: { score: 6, color: "bg-red-500" },
      spelling: { score: 16, color: "bg-green-500" },
    },
    {
      id: 3,
      name: "Lee-Zin",
      percentage: 20,
      taal: { score: 18, color: "bg-green-500" },
      rekenen: { score: 12, color: "bg-green-500" },
      spelling: { score: 20, color: "bg-green-500" },
    },
    {
      id: 4,
      name: "Jeremy",
      percentage: 80,
      taal: { score: 9, color: "bg-orange-500" },
      rekenen: { score: 11, color: "bg-orange-500" },
      spelling: { score: 3, color: "bg-red-500" },
    },
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    percentage: 0,
    taal: { score: 0 },
    rekenen: { score: 0 },
    spelling: { score: 0 },
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const getScoreColor = (score) => {
    if (score >= 15) return "bg-green-500";
    if (score >= 8) return "bg-orange-500";
    return "bg-red-500";
  };

  const calculatePercentage = (taal, rekenen, spelling) => {
    const total = taal + rekenen + spelling;
    const maxScore = 60; // 20 per vak
    return Math.round((total / maxScore) * 100);
  };

  const handleEdit = (student) => {
    setEditingStudent({ ...student });
  };

  const handleSave = () => {
    const updatedStudent = {
      ...editingStudent,
      taal: {
        ...editingStudent.taal,
        color: getScoreColor(editingStudent.taal.score),
      },
      rekenen: {
        ...editingStudent.rekenen,
        color: getScoreColor(editingStudent.rekenen.score),
      },
      spelling: {
        ...editingStudent.spelling,
        color: getScoreColor(editingStudent.spelling.score),
      },
      percentage: calculatePercentage(
        editingStudent.taal.score,
        editingStudent.rekenen.score,
        editingStudent.spelling.score
      ),
    };

    setStudents(
      students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
  };

  const handleCancel = () => {
    setEditingStudent(null);
  };

  const handleDelete = (studentId) => {
    setStudents(students.filter((s) => s.id !== studentId));
    setSelectedStudent(null);
  };

  const handleAddStudent = () => {
    if (newStudent.name.trim()) {
      const student = {
        id: Date.now(),
        name: newStudent.name,
        percentage: calculatePercentage(
          newStudent.taal.score,
          newStudent.rekenen.score,
          newStudent.spelling.score
        ),
        taal: {
          score: newStudent.taal.score,
          color: getScoreColor(newStudent.taal.score),
        },
        rekenen: {
          score: newStudent.rekenen.score,
          color: getScoreColor(newStudent.rekenen.score),
        },
        spelling: {
          score: newStudent.spelling.score,
          color: getScoreColor(newStudent.spelling.score),
        },
      };

      setStudents([...students, student]);
      setNewStudent({
        name: "",
        percentage: 0,
        taal: { score: 0 },
        rekenen: { score: 0 },
        spelling: { score: 0 },
      });
      setShowAddForm(false);
    }
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(selectedStudent?.id === student.id ? null : student);
  };

  return (
    <Card className="bg-white shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-900">Resultaten</h2>
            <div className="flex gap-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Taal
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Rekenen
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Spelling
              </span>
            </div>
          </div>
          <Button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Leerling toevoegen
          </Button>
        </div>

        {/* Add Student Form */}
        {showAddForm && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <div className="p-4">
              <h3 className="font-semibold mb-4 text-blue-900">
                Nieuwe leerling toevoegen
              </h3>
              <div className="grid grid-cols-4 gap-4">
                <Input
                  placeholder="Naam"
                  value={newStudent.name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, name: e.target.value })
                  }
                />
                <Input
                  type="number"
                  placeholder="Taal score"
                  min="0"
                  max="20"
                  value={newStudent.taal.score}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      taal: { score: Number.parseInt(e.target.value) || 0 },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Rekenen score"
                  min="0"
                  max="20"
                  value={newStudent.rekenen.score}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      rekenen: { score: Number.parseInt(e.target.value) || 0 },
                    })
                  }
                />
                <Input
                  type="number"
                  placeholder="Spelling score"
                  min="0"
                  max="20"
                  value={newStudent.spelling.score}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      spelling: { score: Number.parseInt(e.target.value) || 0 },
                    })
                  }
                />
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={handleAddStudent}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Opslaan
                </Button>
                <Button onClick={() => setShowAddForm(false)} variant="outline">
                  <X className="w-4 h-4 mr-2" />
                  Annuleren
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Table Header */}
        <div className="grid grid-cols-7 gap-4 mb-4 text-sm font-medium text-gray-600 border-b pb-2">
          <div>Naam</div>
          <div className="text-center">Percentage</div>
          <div className="text-center">Taal</div>
          <div className="text-center">Rekenen</div>
          <div className="text-center">Spelling</div>
          <div className="text-center">Acties</div>
          <div></div>
        </div>

        <div className="space-y-2">
          {students.map((student) => (
            <div key={student.id}>
              <div
                className={`grid grid-cols-7 gap-4 items-center py-3 px-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                  selectedStudent?.id === student.id
                    ? "bg-blue-50 border border-blue-200"
                    : ""
                }`}
                onClick={() => handleStudentClick(student)}
              >
                {/* Student Name */}
                <div className="font-medium text-gray-900">{student.name}</div>

                {/* Percentage */}
                <div className="text-center">
                  <span className="bg-gray-200 px-3 py-1 rounded text-sm font-medium">
                    {student.percentage}%
                  </span>
                </div>

                {/* Taal */}
                <div className="flex items-center justify-center">
                  <div
                    className={`h-6 w-16 rounded ${student.taal.color} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {student.taal.score}
                    </span>
                  </div>
                </div>

                {/* Rekenen */}
                <div className="flex items-center justify-center">
                  <div
                    className={`h-6 w-16 rounded ${student.rekenen.color} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {student.rekenen.score}
                    </span>
                  </div>
                </div>

                {/* Spelling */}
                <div className="flex items-center justify-center">
                  <div
                    className={`h-6 w-16 rounded ${student.spelling.color} flex items-center justify-center`}
                  >
                    <span className="text-white text-xs font-bold">
                      {student.spelling.score}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 justify-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(student);
                    }}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(student.id);
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>

                <div></div>
              </div>

              {/* Edit Form */}
              {editingStudent?.id === student.id && (
                <Card className="mt-2 bg-yellow-50 border-yellow-200">
                  <div className="p-4">
                    <h3 className="font-semibold mb-4 text-yellow-900">
                      Bewerken: {student.name}
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      <Input
                        placeholder="Naam"
                        value={editingStudent.name}
                        onChange={(e) =>
                          setEditingStudent({
                            ...editingStudent,
                            name: e.target.value,
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Taal"
                        min="0"
                        max="20"
                        value={editingStudent.taal.score}
                        onChange={(e) =>
                          setEditingStudent({
                            ...editingStudent,
                            taal: {
                              ...editingStudent.taal,
                              score: Number.parseInt(e.target.value) || 0,
                            },
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Rekenen"
                        min="0"
                        max="20"
                        value={editingStudent.rekenen.score}
                        onChange={(e) =>
                          setEditingStudent({
                            ...editingStudent,
                            rekenen: {
                              ...editingStudent.rekenen,
                              score: Number.parseInt(e.target.value) || 0,
                            },
                          })
                        }
                      />
                      <Input
                        type="number"
                        placeholder="Spelling"
                        min="0"
                        max="20"
                        value={editingStudent.spelling.score}
                        onChange={(e) =>
                          setEditingStudent({
                            ...editingStudent,
                            spelling: {
                              ...editingStudent.spelling,
                              score: Number.parseInt(e.target.value) || 0,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={handleSave}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Opslaan
                      </Button>
                      <Button onClick={handleCancel} variant="outline">
                        <X className="w-4 h-4 mr-2" />
                        Annuleren
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Selected Student Details */}
              {selectedStudent?.id === student.id && !editingStudent && (
                <Card className="mt-2 bg-blue-50 border-blue-200">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-blue-900">
                      Details: {student.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Taal:</span>{" "}
                        {student.taal.score}/20
                      </div>
                      <div>
                        <span className="font-medium">Rekenen:</span>{" "}
                        {student.rekenen.score}/20
                      </div>
                      <div>
                        <span className="font-medium">Spelling:</span>{" "}
                        {student.spelling.score}/20
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="font-medium">Totaal percentage:</span>{" "}
                      {student.percentage}%
                    </div>
                  </div>
                </Card>
              )}
            </div>
          ))}
        </div>

        {students.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Geen leerlingen gevonden. Voeg een leerling toe om te beginnen.
          </div>
        )}
      </div>
    </Card>
  );
}
