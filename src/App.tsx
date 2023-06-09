import Project from './Project'
import { projects } from './projects'

export interface ProjectInterface {
  id: number
  name: string
  github: string
  link: string
  thumbnail: string
}

const App = (): JSX.Element => (
  <div className="container mx-auto px-4 py-8">
    <div className="py-16 flex flex-col gap-y-8 items-center">
      <p className="text-5xl text-center text-gray-800 font-bold">
        30 jours d&apos;intégration
      </p>
      <p className="text-lg lg:text-xl text-center text-gray-600 font-light">
        30 jours d&apos;intégration d&apos;IHM afin de me perfectionner sur le
        développement Front End notamment en CSS et en responsive design avec le
        framework{' '}
        <a href="https://tailwindcss.com/" className="underline text-blue-600">
          Tailwind CSS
        </a>
        . Les IHM étaient des challenges proposé par le site{' '}
        <a
          href="https://www.frontendmentor.io/challenges"
          className="underline text-blue-600"
        >
          FrontEndMentor
        </a>
        .
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 justify-items-center">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  </div>
)

export default App
