import { ConvexHttpClient } from "convex/browser";

// Create a singleton instance at the Convex HTTP client
export const getConvexClient = () => {
  return new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
}