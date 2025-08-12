"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

interface GTMResult {
  strategy_overview: string;
  market_analysis: string;
  customer_profiles: string[];
  value_proposition: string;
  acquisition_channels: string[];
  outreach_plan: string;
  growth_initiatives: string[];
  optimization_tips: string;
}

export default function GTMStrategyPage() {
  const [startupIdea, setStartupIdea] = useState<string>("");
  const [targetMarket, setTargetMarket] = useState<string>("");
  const [teamComposition, setTeamComposition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<GTMResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post<{ data: string }>(
        "https://enterpreneaur-977121587860.asia-south2.run.app/run-crew",
        {
          startup_idea: startupIdea,
          target_market: targetMarket,
          team_composition: teamComposition,
        }
      );

      console.log("API Response:", response.data);

      const raw = response.data.data;
      const jsonStart = raw.indexOf("```json");
      const jsonEnd = raw.lastIndexOf("```");
      const extracted =
        jsonStart !== -1 && jsonEnd !== -1
          ? raw.substring(jsonStart + 7, jsonEnd)
          : raw;

      const parsed: GTMResult = JSON.parse(extracted);
      setResult(parsed);
    } catch (err) {
      console.error(err);
      setError("Failed to generate GTM strategy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Generate Your <AuroraText>Go-To-Market</AuroraText> Strategy
        </h1>
        <p className="text-gray-600">
          Empower your startup with a tailored GTM plan in minutes. Just provide a few
          details about your idea, target audience, and team.
        </p>

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <input
            type="text"
            value={startupIdea}
            onChange={(e) => setStartupIdea(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Startup Idea (e.g., AI-powered resume enhancer)"
          />

          <input
            type="text"
            value={targetMarket}
            onChange={(e) => setTargetMarket(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Target Market (e.g., Recent graduates in tech)"
          />

          <input
            type="text"
            value={teamComposition}
            onChange={(e) => setTeamComposition(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Team Composition (e.g., 3 engineers, 1 career coach)"
          />
        </div>

        {/* Generate Button */}
        <RainbowButton
          variant="outline"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate GTM Strategy"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Display Results */}
        {result && (
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-semibold">🚀 Your GTM Strategy</h2>
            <div className="border p-4 rounded-md shadow-sm bg-white space-y-4">
              <p><strong>Strategy Overview:</strong> {result.strategy_overview}</p>
              <p><strong>Market Analysis:</strong> {result.market_analysis}</p>
              <p><strong>Value Proposition:</strong> {result.value_proposition}</p>

              <div>
                <strong>Customer Profiles:</strong>
                <ul className="list-disc list-inside">
                  {result.customer_profiles.map((profile, idx) => (
                    <li key={idx}>{profile}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong>Acquisition Channels:</strong>
                <ul className="list-disc list-inside">
                  {result.acquisition_channels.map((channel, idx) => (
                    <li key={idx}>{channel}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Outreach Plan:</strong> {result.outreach_plan}</p>

              <div>
                <strong>Growth Initiatives:</strong>
                <ul className="list-disc list-inside">
                  {result.growth_initiatives.map((initiative, idx) => (
                    <li key={idx}>{initiative}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Optimization Tips:</strong> {result.optimization_tips}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
