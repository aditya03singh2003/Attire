"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Menu, ShoppingBag, Search, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import CartDrawer from "@/components/cart-drawer"
import { motion } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()
  const { cartItems } = useCart()

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg dark:bg-gray-950/90 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                    ATTIRE
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"></span>
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="group relative">
                  <span
                    className={`text-sm font-medium transition-colors ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-5">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="hidden md:flex">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="hidden md:flex">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link href="/wishlist">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemsCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground"
                    >
                      {cartItemsCount}
                    </motion.span>
                  )}
                  <span className="sr-only">Cart</span>
                </Button>
              </motion.div>

              <div className="hidden md:block">
                <SignedIn>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="rounded-full px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link href="/account">
                        <User className="h-4 w-4 mr-2" />
                        Account
                      </Link>
                    </Button>
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "h-8 w-8",
                        },
                      }}
                    />
                  </div>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>

              {/* Mobile menu button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="px-4 py-6">
                      <Link href="/" className="flex items-center mb-8">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                          ATTIRE
                        </span>
                      </Link>
                      <nav className="flex flex-col space-y-5">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`text-base font-medium transition-colors hover:text-primary ${
                              pathname === item.href ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link
                          href="/wishlist"
                          className="text-base font-medium transition-colors hover:text-primary flex items-center"
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Wishlist
                        </Link>
                        <Link
                          href="/account"
                          className="text-base font-medium transition-colors hover:text-primary flex items-center"
                        >
                          <User className="h-4 w-4 mr-2" />
                          Account
                        </Link>
                      </nav>
                    </div>
                    <div className="mt-auto p-4 border-t">
                      <SignedIn>
                        <div className="flex items-center space-x-4">
                          <UserButton afterSignOutUrl="/" />
                          <span className="text-sm font-medium">Account</span>
                        </div>
                      </SignedIn>
                      <SignedOut>
                        <SignInButton mode="modal">
                          <Button className="w-full rounded-full">
                            <User className="h-5 w-5 mr-2" />
                            Sign In
                          </Button>
                        </SignInButton>
                      </SignedOut>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
