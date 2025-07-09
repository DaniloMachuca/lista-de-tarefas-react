import { useSelector } from 'react-redux'
import { Container } from './styles'
import Task from '../../components/Task'

import { RootReducer } from '../../store'

const ToDoList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tasks marked as: &quot;category&ldquo; &quot;outcome&ldquo; </p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              status={t.status}
              priority={t.priority}
              title={t.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ToDoList
