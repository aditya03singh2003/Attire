"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { Menu, ShoppingBag, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import CartDrawer from "@/components/cart-drawer"

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
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-950/90" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">ATTIRE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                    {cartItemsCount}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Button>

              <div className="hidden md:block">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                      <User className="h-5 w-5 mr-2" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>

              {/* Mobile menu button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="px-4 py-6">
                      <Link href="/" className="flex items-center mb-6">
                        <span className="text-xl font-bold">ATTIRE</span>
                      </Link>
                      <nav className="flex flex-col space-y-4">
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
                          <Button className="w-full">
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
