import AddBtn from '../../components/AddBtn'
import Sidebar from '../../containers/Sidebar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <Sidebar showFilters />
    <ToDoList />
    <AddBtn />
  </>
)

export default Home
