"use server";

export async function createCompanion(data: {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}) {
  // For now, just return a mock companion
  // Replace this with your actual database logic
  const companion = {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    createdAt: new Date(),
  };

  return companion;
}
