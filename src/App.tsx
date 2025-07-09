import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import ToDoList from './containers/ToDoList'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <ToDoList />
      </Container>
    </Provider>
  )
}

export default App
