"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

const GRADES = [
  "Nursery", "Pre-KG", "LKG", "UKG",
  "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade",
  "6th Grade", "7th Grade", "8th Grade", "9th Grade",
  "10th Grade", "11th Grade", "12th Grade",
];

const CURRICULUMS = [
  "CBSE", "ICSE", "IB", "State Board", "IGCSE", "Cambridge", "Montessori"
];

export default function SearchSchoolsPage() {
  const [location, setLocation] = useState("");
  const [grade, setGrade] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://school-finder-977121587860.asia-south2.run.app/search-schools",
        {
          location,
          grade,
          curriculum,
        }
      );

      const raw = response.data.data;
      const jsonStart = raw.indexOf("```json");
      const jsonEnd = raw.lastIndexOf("```");
      const extracted = raw.substring(jsonStart + 7, jsonEnd);
      const parsed = JSON.parse(extracted);
      setResults(parsed);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch schools. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Discover the Right <AuroraText>School</AuroraText> for Your Child
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Location (e.g., Bangalore)"
          />

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="">Select Grade</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>

          <select
            value={curriculum}
            onChange={(e) => setCurriculum(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="">Select Curriculum</option>
            {CURRICULUMS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <RainbowButton variant="outline" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search Schools"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {results.length > 0 && (
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">🎓 Top Matching Schools</h2>
            <div className="space-y-4">
              {results.map((school, idx) => (
                <div
                  key={idx}
                  className="border p-4 rounded-md shadow-sm bg-white space-y-1"
                >
                  <h3 className="text-xl font-bold text-blue-700">
                    {school.schoolName}
                  </h3>
                  <p className="text-gray-700">
                    <strong>Location:</strong> {school.Location}, {school.City}
                  </p>
                  <p>
                    <strong>Curriculum:</strong> {school.Curriculum} | <strong>Grade:</strong> {school.Grade}
                  </p>
                  <p>
                    <strong>Fees:</strong> {school.Fees}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {school.Remarks}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
