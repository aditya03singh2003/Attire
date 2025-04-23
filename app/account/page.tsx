"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Package, Heart, CreditCard, Settings, LogOut, Edit, Camera } from "lucide-react"
import FuturisticBackground from "@/components/futuristic-background"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    joined: "January 2023",
  }

  // Mock orders data
  const orders = [
    {
      id: "ORD-123456",
      date: "May 15, 2023",
      total: 129.99,
      status: "Delivered",
      items: 3,
    },
    {
      id: "ORD-789012",
      date: "April 2, 2023",
      total: 79.5,
      status: "Processing",
      items: 2,
    },
    {
      id: "ORD-345678",
      date: "March 18, 2023",
      total: 214.75,
      status: "Shipped",
      items: 4,
    },
  ]

  // Mock wishlist data
  const wishlist = [
    {
      id: "prod-1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: "prod-2",
      name: "Leather Crossbody Bag",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: "prod-3",
      name: "Minimalist Watch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=250&auto=format&fit=crop",
    },
  ]

  // Mock payment methods
  const paymentMethods = [
    {
      id: "card-1",
      type: "Visa",
      last4: "4242",
      expiry: "05/25",
      default: true,
    },
    {
      id: "card-2",
      type: "Mastercard",
      last4: "8888",
      expiry: "09/24",
      default: false,
    },
  ]

  return (
    <FuturisticBackground variant="default" className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-4">
              <div className="bg-card rounded-lg p-6 border shadow-sm">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">Member since {user.joined}</p>
                </div>

                <nav className="space-y-1">
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "payment" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>

                <Separator className="my-4" />

                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "profile" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg border shadow-sm p-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Profile Information</h2>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative w-32 h-32 mx-auto md:mx-0">
                        <Avatar className="w-full h-full">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={user.name} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" value={user.email} readOnly />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" value="+1 (555) 123-4567" readOnly />
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <h3 className="text-lg font-semibold mb-4">Address Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>Shipping Address</span>
                          <Badge>Default</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Jane Smith</p>
                        <p>123 Main Street</p>
                        <p>Apt 4B</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Billing Address</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Jane Smith</p>
                        <p>123 Main Street</p>
                        <p>Apt 4B</p>
                        <p>New York, NY 10001</p>
                        <p>United States</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </motion.div>
              )}

              {activeTab === "orders" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg border shadow-sm p-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>

                  <div className="space-y-4">
                    {orders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">{order.id}</CardTitle>
                              <Badge
                                className={
                                  order.status === "Delivered"
                                    ? "bg-green-500"
                                    : order.status === "Shipped"
                                      ? "bg-blue-500"
                                      : "bg-yellow-500"
                                }
                              >
                                {order.status}
                              </Badge>
                            </div>
                            <CardDescription>{order.date}</CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">{order.items} items</span>
                              <span className="font-medium">${order.total.toFixed(2)}</span>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="ghost" size="sm">
                              Track Order
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "wishlist" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg border shadow-sm p-6"
                >
                  <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {wishlist.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden">
                          <div className="relative aspect-square">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="object-cover w-full h-full"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-8 w-8 rounded-full"
                            >
                              <Heart className="h-4 w-4 fill-current" />
                            </Button>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium line-clamp-1">{item.name}</h3>
                            <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button className="w-full">Add to Cart</Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "payment" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg border shadow-sm p-6"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Payment Methods</h2>
                    <Button>Add New Card</Button>
                  </div>

                  <div className="space-y-4">
                    {paymentMethods.map((method, index) => (
                      <motion.div
                        key={method.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-lg">
                                {method.type} •••• {method.last4}
                              </CardTitle>
                              {method.default && <Badge>Default</Badge>}
                            </div>
                            <CardDescription>Expires {method.expiry}</CardDescription>
                          </CardHeader>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              Remove
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg border shadow-sm p-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

                  <Tabs defaultValue="notifications">
                    <TabsList className="mb-4">
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="privacy">Privacy</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>

                    <TabsContent value="notifications" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Order Updates</h3>
                          <p className="text-sm text-muted-foreground">Receive notifications about your order status</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="order-email">Email</Label>
                          <input type="checkbox" id="order-email" className="toggle" defaultChecked />
                          <Label htmlFor="order-sms">SMS</Label>
                          <input type="checkbox" id="order-sms" className="toggle" defaultChecked />
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Promotions & Discounts</h3>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about sales and special offers
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="promo-email">Email</Label>
                          <input type="checkbox" id="promo-email" className="toggle" defaultChecked />
                          <Label htmlFor="promo-sms">SMS</Label>
                          <input type="checkbox" id="promo-sms" className="toggle" />
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">New Products & Collections</h3>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about new arrivals and collections
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Label htmlFor="new-email">Email</Label>
                          <input type="checkbox" id="new-email" className="toggle" defaultChecked />
                          <Label htmlFor="new-sms">SMS</Label>
                          <input type="checkbox" id="new-sms" className="toggle" />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="privacy" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Data Sharing</h3>
                          <p className="text-sm text-muted-foreground">
                            Allow us to share your data with trusted partners
                          </p>
                        </div>
                        <input type="checkbox" className="toggle" />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Browsing History</h3>
                          <p className="text-sm text-muted-foreground">
                            Save your browsing history for personalized recommendations
                          </p>
                        </div>
                        <input type="checkbox" className="toggle" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Cookie Preferences</h3>
                          <p className="text-sm text-muted-foreground">Manage your cookie preferences</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Manage Cookies
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="password" className="space-y-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div>
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button>Update Password</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </FuturisticBackground>
  )
}
