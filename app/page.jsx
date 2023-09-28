import { Contact, About, Header, HomeArticles, HomeProjects, HomeServices } from '@/components'

export default function Home() {
  return (
    <main className="flex justify-center bg-bg min-h-screen">
      <div className='container text-white'>
        <Header />
        <About />
        <HomeServices />
        <HomeProjects />
        <HomeArticles />
        <Contact />
      </div>
    </main>
  )
}
