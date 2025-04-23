import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// Define public routes that don't require authentication
const publicRoutes = [
  "/",
  "/products",
  "/products/(.*)",
  "/categories",
  "/categories/(.*)",
  "/about",
  "/contact",
  "/api/(.*)",
  "/checkout",
  "/payment-confirmation",
  "/wishlist",
]

// Create a route matcher based on the public routes
const isPublic = createRouteMatcher(publicRoutes)

export default clerkMiddleware({

  publicRoutes: publicRoutes,

  ignoredRoutes: ["/api/webhook/clerk"],
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
