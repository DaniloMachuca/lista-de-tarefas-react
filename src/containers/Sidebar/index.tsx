import CardFilter from '../../components/CardFilter'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.SearchBox type="text" placeholder="Search" />
      <S.Filters>
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter />
        <CardFilter active />
      </S.Filters>
    </div>
  </S.Aside>
)

export default Sidebar
