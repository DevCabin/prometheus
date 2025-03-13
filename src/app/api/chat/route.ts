import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

/**
 * POST handler for chat completions
 * 
 * Features:
 * - Streaming responses for real-time chat
 * - Uses GPT-3.5-turbo model
 * - Handles chat history through messages array
 * 
 * @param req Request object containing messages array
 * @returns StreamingTextResponse for real-time updates
 */
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
} 