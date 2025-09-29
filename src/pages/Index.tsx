// Update this page (the content is just a fallback if you fail to update the page)

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import Pricing from "@/components/Pricing";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero
        title="Restore Your Balance."
        description="Discover personalized wellness programs, expert guidance, and a supportive community designed to help you achieve your health and happiness goals."
      />
      <Stats
        items={[
          { label: "Members", value: 1200, suffix: "+" },
          { label: "Programs", value: 48, suffix: "+" },
          { label: "Experts", value: 35, suffix: "+" },
          { label: "Workshops", value: 90, suffix: "+" },
        ]}
      />
      <div className="container mx-auto my-10 md:my-16">
        <div className="relative h-[2px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent animate-[reveal_800ms_ease-out_forwards]" />
        </div>
      </div>
      <Services
        items={[
          {
            title: "Tailored Wellness Programs",
            description: "Personal plans crafted around your lifestyle, goals, and schedule.",
            cta: "Explore Programs",
            image: "/placeholder.svg",
          },
          {
            title: "Workshops & Team Sessions",
            description: "Engaging sessions designed to build healthy habits that last.",
            cta: "View Sessions",
            image: "/placeholder.svg",
          },
          {
            title: "Expert Guidance",
            description: "Connect with trusted specialists for coaching and support.",
            cta: "Meet Experts",
            image: "/placeholder.svg",
          },
          {
            title: "Policy & Framework Development",
            description: "Establish robust wellness policies and frameworks tailored to your organization.",
            cta: "Learn More",
            image: "/placeholder.svg",
          },
          {
            title: "Monthly Content & Toolkits",
            description: "Curated resources and toolkits delivered monthly to sustain momentum.",
            cta: "Browse Toolkits",
            image: "/placeholder.svg",
          },
          {
            title: "Evaluation & Reporting",
            description: "Measure impact with clear reporting and insights to guide next steps.",
            cta: "See How",
            image: "/placeholder.svg",
          },
        ]}
      />
      <FeaturedProducts
        items={[
          { title: "Omega-3 Fish Oil", description: "Premium EPA/DHA for heart and brain.", image: "https://nanosingaporeshop.com/cdn/shop/files/Omega-3_480x480.png?v=1737098999", badge: "Supplement", href: "#", price: 22.99, rating: 4.8 },
          { title: "Ashwagandha Extract", description: "Adaptogen for stress support.", image: "https://healthyhey.com/cdn/shop/files/healthyhey-herbal-capsules-herbal-ashwagandha-root-extract-120-veg-capsules-1177240239.png?v=1752174365", badge: "Herbal", href: "#", price: 18.5, rating: 4.7 },
          { title: "Vitamin D3 5000IU", description: "Immune and bone health.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGHp24qaQ4D1SFqJQ9TMyxCRr6H5sQ-OyTQ&s", badge: "Vitamin", href: "#", price: 12.0, rating: 4.6 },
          { title: "Magnesium Glycinate", description: "Calm muscles and better sleep.", image: "https://i.pinimg.com/736x/71/89/35/718935470537246090ef4237d51f1155.jpg", badge: "Mineral", href: "#", price: 16.75, rating: 4.5 },
          { title: "Probiotic 50B CFU", description: "Diverse strains for gut health.", image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/9466814/1.jpg?3290", badge: "Gut", href: "#", price: 27.0, rating: 4.6 },
          { title: "Electrolyte Hydration", description: "Sugar-free hydration mix.", image: "https://therealfooddietitians.com/wp-content/uploads/2024/06/Hydration-Drink-Photos-24.jpg", badge: "Hydration", href: "#", price: 14.99, rating: 4.4 },
        ]}
      />

      <Pricing
        tiers={[
          {
            name: "Starter",
            price: "$0/mo",
            cta: "Get Started",
            badge: "For Individuals",
            features: [
              "Access to free articles",
              "Community newsletter",
              "Basic support",
            ],
          },
          {
            name: "Professional",
            price: "$29/mo",
            cta: "Upgrade",
            badge: "Most Popular",
            highlight: true,
            features: [
              "All Starter features",
              "Full program library",
              "Monthly group sessions",
              "Members-only resources",
            ],
          },
          {
            name: "Enterprise",
            price: "Custom",
            cta: "Contact Sales",
            badge: "For Teams",
            features: [
              "Team onboarding",
              "Custom workshops",
              "Dedicated success manager",
            ],
          },
        ]}
      />

      <div className="container mx-auto my-10 md:my-16">
        <div className="relative h-[2px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent animate-[reveal_800ms_ease-out_forwards]" />
        </div>
      </div>

      <TestimonialsMarquee
        items={[
          { quote: "The programs helped our team reduce stress and boost focus.", author: "Amaka O.", role: "People Ops" },
          { quote: "Simple routines, real results. I sleep better and feel calmer.", author: "David A.", role: "Member" },
          { quote: "Great onboarding and workshops for our staff.", author: "Kemi B.", role: "HR Lead" },
          { quote: "The community and resources are top-notch.", author: "Seyi T.", role: "Entrepreneur" },
        ]}
      />

      <FAQ
        items={[
          { q: "How long do programs typically run?", a: "Most run 4–8 weeks with flexible weekly sessions." },
          { q: "Do you support teams and individuals?", a: "Yes. We offer personal memberships and team/enterprise packages." },
          { q: "What’s included in the Professional plan?", a: "Full library access, monthly group sessions, and members-only resources." },
          { q: "Can I cancel anytime?", a: "Monthly plans can be cancelled anytime; annual plans renew once per year." },
          { q: "Do you provide live workshops?", a: "We host regular live workshops and can schedule private sessions for teams." },
        ]}
      />

      <Footer />
    </main>
  );
};

export default Index;
