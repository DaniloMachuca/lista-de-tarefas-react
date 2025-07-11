import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Container } from './styles'
import Task from '../../components/Task'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { query, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filteredItens = () => {
    let filteredItens = itens
    if (query !== undefined) {
      filteredItens = filteredItens.filter(
        (item) =>
          item.title.toLocaleLowerCase().search(query.toLocaleLowerCase()) >=
            0 ||
          item.description
            .toLocaleLowerCase()
            .search(query.toLocaleLowerCase()) >= 0
      )
      if (criterion === 'priority') {
        filteredItens = filteredItens.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        filteredItens = filteredItens.filter((item) => item.status === value)
      }

      return filteredItens
    } else {
      return itens
    }
  }

  const showFilteredItens = (t: number) => {
    let message = ''
    const adjunt =
      query !== undefined && query.length > 0 ? ` and "${query}"` : ``

    if (criterion === 'all') {
      message = `${t} tasks marked as: all ${adjunt}`
    } else {
      message = `${t} tasks marked as: ${criterion} = ${value} ${adjunt}`
    }

    return message
  }

  const tasks = filteredItens()
  const message = showFilteredItens(tasks.length)

  return (
    <Container>
      <p>{message}</p>
      <ul>
        {tasks.map((t) => (
          <li key={t.title}>
            <Task
              description={t.description}
              status={t.status}
              priority={t.priority}
              title={t.title}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ToDoList
