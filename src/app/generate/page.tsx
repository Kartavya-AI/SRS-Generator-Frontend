"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

const API_BASE = "https://srs-generator-977121587860.asia-south2.run.app";

interface StartConversationResponse {
  conversation_id: string;
  next_question: string;
}

interface SubmitAnswerResponse {
  status: "in_progress" | "completed";
  conversation_id: string;
  next_question?: string;
  srs_document?: string;
}

export default function SRSGeneratorPage() {
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [srsDocument, setSrsDocument] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Transcription states
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [transcribing, setTranscribing] = useState<boolean>(false);

  const handleStartConversation = async () => {
    setLoading(true);
    setError("");
    setSrsDocument(null);

    try {
      const res = await axios.post<StartConversationResponse>(
        `${API_BASE}/conversation/start`,
        {
          specialist: "Software Engineer",
          requirements: "Web-based inventory management system",
        }
      );
      setConversationId(res.data.conversation_id);
      setCurrentQuestion(res.data.next_question);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to start conversation.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!conversationId) return;
    setLoading(true);
    setError("");

    try {
      const res = await axios.post<SubmitAnswerResponse>(
        `${API_BASE}/conversation/submit_answer`,
        {
          conversation_id: conversationId,
          answer,
        }
      );

      if (res.data.status === "in_progress" && res.data.next_question) {
        setCurrentQuestion(res.data.next_question);
        setAnswer("");
      } else if (res.data.status === "completed" && res.data.srs_document) {
        setSrsDocument(res.data.srs_document);
        setCurrentQuestion("");
        setAnswer("");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Error submitting answer.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckStatus = async () => {
    if (!conversationId) return;
    try {
      const res = await axios.get(
        `${API_BASE}/conversation/${conversationId}/status`
      );
      if (res.data.status === "completed" && res.data.srs_document) {
        setSrsDocument(res.data.srs_document);
      } else if (res.data.next_question) {
        setCurrentQuestion(res.data.next_question);
      }
    } catch (err) {
      console.error(err);
      setError("❌ Failed to fetch status.");
    }
  };

  const handleEndConversation = async () => {
    if (!conversationId) return;
    try {
      await axios.delete(`${API_BASE}/conversation/${conversationId}`);
      setConversationId(null);
      setCurrentQuestion("");
      setAnswer("");
      setSrsDocument(null);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to end conversation.");
    }
  };

  const handleTranscribe = async () => {
    if (!file) return;
    setTranscribing(true);
    setError("");
    setTranscription(null);

    try {
      const formData = new FormData();
      formData.append("audio_file", file);
      formData.append("language", "en");

      const res = await axios.post(`${API_BASE}/transcribe`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setTranscription(res.data.transcription);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to transcribe audio.");
    } finally {
      setTranscribing(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          AI-powered <AuroraText>SRS Generator</AuroraText>
        </h1>
        <p className="text-gray-600">
          Answer AI-generated questions and receive a formal Software Requirements Specification document.
        </p>

        {/* --- Conversation Section --- */}
        {!conversationId && (
          <RainbowButton
            variant="outline"
            onClick={handleStartConversation}
            disabled={loading}
          >
            {loading ? "Starting..." : "Start SRS Generation"}
          </RainbowButton>
        )}

        {conversationId && currentQuestion && (
          <div className="space-y-4 mt-6">
            <div className="p-4 border rounded-md bg-white shadow">
              <p className="font-medium">{currentQuestion}</p>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-2 border rounded-md mt-2"
                placeholder="Type your answer here..."
              />
              <div className="flex gap-3 mt-3">
                <RainbowButton
                  variant="outline"
                  onClick={handleSubmitAnswer}
                  disabled={loading || !answer.trim()}
                >
                  {loading ? "Submitting..." : "Submit Answer"}
                </RainbowButton>
                <RainbowButton variant="outline" onClick={handleCheckStatus}>
                  Check Status
                </RainbowButton>
                <RainbowButton onClick={handleEndConversation}>
                  End
                </RainbowButton>
              </div>
            </div>
          </div>
        )}

        {/* --- Transcription Section --- */}
        <div className="p-6 border rounded-md bg-white shadow space-y-4">
          <h2 className="text-2xl font-semibold">🎙️ Audio Transcription</h2>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <RainbowButton
            variant="outline"
            onClick={handleTranscribe}
            disabled={transcribing || !file}
          >
            {transcribing ? "Transcribing..." : "Upload & Transcribe"}
          </RainbowButton>

          {transcription && (
            <div className="mt-4 p-4 bg-gray-100 border rounded-md">
              <h3 className="font-medium mb-2">Transcription Result:</h3>
              <p className="text-gray-800">{transcription}</p>
            </div>
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {srsDocument && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">📄 Generated SRS Document</h2>
            <pre className="whitespace-pre-wrap p-4 bg-gray-100 border rounded-md overflow-x-auto">
              {srsDocument}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
