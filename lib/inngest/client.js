import { Inngest } from "inngest";
import { serve } from "inngest/next";
export const inngest = new Inngest({
  id: "jokkos", // Unique app ID
  name: "JOKKOS",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});