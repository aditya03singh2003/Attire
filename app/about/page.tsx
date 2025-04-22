import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
        <p className="text-muted-foreground max-w-2xl">
          Learn more about our story, mission, and the team behind Fashion Store.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2020, Fashion Store began with a simple mission: to provide high-quality, stylish clothing at
            accessible prices. What started as a small online boutique has grown into a beloved fashion destination for
            customers around the world.
          </p>
          <p className="text-muted-foreground mb-4">
            We believe that fashion should be inclusive, sustainable, and expressive. Our collections are carefully
            curated to offer timeless pieces alongside the latest trends, ensuring that everyone can find something that
            speaks to their personal style.
          </p>
          <Button asChild className="mt-4">
            <Link href="/products">Shop Our Collection</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop"
            alt="Fashion Store Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-muted-foreground">
              We source the finest materials and work with skilled artisans to create clothing that looks good and lasts
              longer.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-muted-foreground">
              We're committed to reducing our environmental impact through ethical sourcing, eco-friendly materials, and
              responsible production.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
            <p className="text-muted-foreground">
              We design for everybody. Our products come in a wide range of sizes, styles, and price points to ensure
              fashion is accessible to all.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Sarah Chen",
              role: "Creative Director",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Michael Rodriguez",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
            },
            {
              name: "Priya Patel",
              role: "Marketing Director",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="max-w-2xl mx-auto mb-8">
          We're always looking for passionate individuals to join our team. Check out our current openings or send us
          your resume to be considered for future opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="secondary" asChild>
            <Link href="/careers">View Careers</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
