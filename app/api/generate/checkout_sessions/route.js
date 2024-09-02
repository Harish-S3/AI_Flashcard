import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)
export async function POST(req){
  
} 
// /app/api/generate/route.js

import { NextResponse } from 'next/server';

// Example function to generate flashcards from text
const generateFlashcards = (text) => {
  // Implement your actual flashcard generation logic here.
  // For demonstration, we'll split the text into sentences and create simple Q&A pairs.
  const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
  
  const flashcards = sentences.map((sentence, index) => ({
    front: `Question ${index + 1}: What is described in the following sentence?`,
    back: sentence.trim(),
  }));
  
  return flashcards;
};

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Invalid input: "text" is required and should be a string.' }, { status: 400 });
    }

    // Generate flashcards
    const flashcards = generateFlashcards(text);

    // Respond with the generated flashcards
    return NextResponse.json(flashcards, { status: 200 });
  } catch (error) {
    console.error('Error in /api/generate:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
