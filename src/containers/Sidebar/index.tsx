import { useDispatch, useSelector } from 'react-redux'
import CardFilter from '../../components/CardFilter'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setQuery } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { query } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.SearchBox
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
    </S.Aside>
  )
}

export default Sidebar
