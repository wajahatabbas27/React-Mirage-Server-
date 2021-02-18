import { Todo } from './components/Todo'
import MirageServer from './mirage/index'

MirageServer()


function App() {
  return (
    <div >
      <Todo />
    </div>
  );
}

export default App;
