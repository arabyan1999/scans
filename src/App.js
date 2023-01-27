import { Home } from './pages/Home'
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from './redux/reducer'

const store = createStore(reducer)


function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
