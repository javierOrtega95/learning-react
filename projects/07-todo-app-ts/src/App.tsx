import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { useTodos } from './hooks/useTodos'

const App: React.FC = () => {
  const { todos, handleFilterChange, filterSelected, handleCompleted } = useTodos()
  return (
    <main className='todoapp'>
      <Header />
      <Todos todos={todos} setCompleted={handleCompleted} />
      <Footer
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </main>
  )
}

export default App