import Hero from '../components/Hero'
import Section from '../components/Section'
import Collections from '../components/Collections'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Hero />

      <Section eyebrow="Collections" title="Crafted for every chapter">
        <Collections />
      </Section>

      <Section tint="dark" eyebrow="Our Story" title="Italian craftsmanship, modern silhouette">
        <About />
      </Section>
    </div>
  )
}
