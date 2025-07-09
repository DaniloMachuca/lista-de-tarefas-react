import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import ToDoList from './containers/ToDoList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ToDoList />
      </Container>
    </>
  )
}

export default App
