'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DailyTrivia() {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = "What's the airspeed velocity of an unladen swallow?";
  const options = [
    "African or European?",
    "24 mph",
    "11 m/s",
    "I don't know that!"
  ];
  const correctAnswer = 2;

  useEffect(() => {
    if (selectedAnswer !== null) {
      setIsCorrect(selectedAnswer === correctAnswer);
    }
  }, [selectedAnswer]);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-purple-600 to-indigo-900 text-yellow-300">
      <Link href="/" className="text-yellow-300 hover:text-yellow-100 transition-colors">
        ← Back to Home
      </Link>
      <div className="max-w-2xl mx-auto mt-12">
        <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Daily Trivia Challenge</h1>
        <div className="bg-purple-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">{question}</h2>
          <div className="space-y-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full text-left p-3 rounded-md transition-all ${
                  selectedAnswer === index
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-purple-700 hover:bg-purple-600'
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <p className="mt-4 text-center text-xl font-bold">
              {isCorrect ? '🎉 Correct! You\'re a trivia master!' : '😅 Oops! Better luck next time!'}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}