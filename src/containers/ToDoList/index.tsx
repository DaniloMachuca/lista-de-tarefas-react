import Task from '../../components/Task'
import { Container } from './styles'

import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'task1',
    priority: enums.Priority.URGENT,
    description: 'description task1',
    status: enums.Status.TODO
  },
  {
    title: 'task2',
    priority: enums.Priority.IMPORTANT,
    description: 'description task2',
    status: enums.Status.DONE
  },
  {
    title: 'task3',
    priority: enums.Priority.NORMAL,
    description: 'description task3',
    status: enums.Status.TODO
  }
]

const ToDoList = () => (
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

export default ToDoList
