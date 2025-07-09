import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.SearchBox type="text" placeholder="Search" />
      <S.Filters>
        <CardFilter label="toDo" counter={1} />
        <CardFilter label="Done" counter={2} />
        <CardFilter label="Urgent" counter={3} />
        <CardFilter label="Important" counter={4} />
        <CardFilter label="Normal" counter={5} />
        <CardFilter label="All" counter={10} active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
