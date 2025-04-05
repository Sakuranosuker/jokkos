import HeroSection from "@/components/hero"
import { Card, CardContent } from "@/components/ui/card"
import { featuresData, howItWorksData, statsData } from "@/data/landing"
export default function Home() {
  return (
      <div className="mt-40">
        <HeroSection />
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((statsData,index)=> (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-amber-900 mb-2">
                    {statsData.value}</div>
                  <div className="text-gray-900 text-lg">
                    {statsData.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Experience our Highly Efficient Features
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-900">{feature.description}</p>
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              How It Works
              </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {howItWorksData.map((step, index) => (
                <div key={index}>
                  <div className="w-16 h-16 bg-amber-100 rounded-full 
                  flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-900">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}