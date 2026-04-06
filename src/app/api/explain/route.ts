import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question, options, correctAnswers, userAnswers, explanation, certName } = body;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { explanation: "AI explanations require an ANTHROPIC_API_KEY environment variable to be configured." },
        { status: 200 }
      );
    }

    const client = new Anthropic({ apiKey });

    const correctOptions = options
      .filter((o: { id: string; text: string }) => correctAnswers.includes(o.id))
      .map((o: { id: string; text: string }) => `${o.id.toUpperCase()}: ${o.text}`)
      .join(", ");

    const userOptions = options
      .filter((o: { id: string; text: string }) => userAnswers.includes(o.id))
      .map((o: { id: string; text: string }) => `${o.id.toUpperCase()}: ${o.text}`)
      .join(", ");

    const prompt = `You are a helpful certification exam tutor for the ${certName} exam. A student just answered a practice question. Provide a detailed but concise explanation.

Question: ${question}

Options:
${options.map((o: { id: string; text: string }) => `${o.id.toUpperCase()}: ${o.text}`).join("\n")}

Correct Answer(s): ${correctOptions}
Student's Answer(s): ${userOptions || "No answer selected"}
Basic Explanation: ${explanation}

Please provide:
1. A clear explanation of WHY the correct answer is right
2. Why each incorrect option is wrong
3. A real-world scenario or analogy to help remember this concept
4. Key terms or concepts to study further

Keep your response focused and under 300 words.`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";

    return NextResponse.json({ explanation: responseText });
  } catch (error) {
    console.error("AI explanation error:", error);
    return NextResponse.json(
      { explanation: "Unable to generate AI explanation at this time." },
      { status: 200 }
    );
  }
}
