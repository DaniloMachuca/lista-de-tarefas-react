import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CardFilter from '../../components/CardFilter'
import { RootReducer } from '../../store'
import { setQuery } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { TextBox } from '../../styles'
import * as S from './styles'
import { Btn } from '../../styles'

type Props = {
  showFilters: boolean
}

const Sidebar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { query } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      {showFilters ? (
        <div>
          <TextBox
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => dispatch(setQuery(e.target.value))}
          />
          <S.Filters>
            <CardFilter
              value={enums.Status.TODO}
              criterion="status"
              label="toDo"
            />
            <CardFilter
              value={enums.Status.DONE}
              criterion="status"
              label="Done"
            />
            <CardFilter
              value={enums.Priority.URGENT}
              criterion="priority"
              label="Urgent"
            />
            <CardFilter
              value={enums.Priority.IMPORTANT}
              criterion="priority"
              label="Important"
            />
            <CardFilter
              value={enums.Priority.NORMAL}
              criterion="priority"
              label="Normal"
            />
            <CardFilter criterion="all" label="All" />
          </S.Filters>
        </div>
      ) : (
        <Btn onClick={() => navigate('/')}>Back to tasks</Btn>
      )}
    </S.Aside>
  )
}

export default Sidebar
