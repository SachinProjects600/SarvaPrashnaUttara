import './App.css';
import Dashboard from './Dashboard/index'
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
      <Provider store={store} >
        <Dashboard />
      </Provider>
  );
}

export default App;
