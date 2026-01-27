import { Shield, Clock, Headphones, Truck } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '2014\'den Beri',
    description: 'Sektörde 10 yılı aşkın tecrübe ile hizmetinizdeyiz.',
  },
  {
    icon: Headphones,
    title: '7/24 Destek',
    description: 'Teknik ekibimiz her an yanınızda.',
  },
  {
    icon: Truck,
    title: 'Kurulum Dahil',
    description: 'Profesyonel kurulum ve söküm hizmeti.',
  },
  {
    icon: Shield,
    title: 'Güvenilir Hizmet',
    description: 'Kaliteli ekipman ve profesyonel çözümler.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
