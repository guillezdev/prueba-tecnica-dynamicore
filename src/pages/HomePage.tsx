import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Bienvenido a la Prueba Técnica
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Esta es la página de inicio. Navega al Dashboard para ver más contenido.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link to="/dashboard">
              Ir al Dashboard
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="#features">
              Ver características
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5A2.25 2.25 0 0022.5 19.5v-7.5a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 003.75 21.75z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Seguro</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Aplicación segura con las mejores prácticas.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Rápido</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Rendimiento optimizado para la mejor experiencia.
          </p>
        </div>

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-semibold">Confiable</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Código probado y confiable para producción.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
