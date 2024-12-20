// ? Файл App


import { Provider } from 'react-redux';
import { Routing } from '../pages';
import styles from './styles/App.module.scss';
import "./styles/index.scss";
import store from '../shared/lib/store';

function App() {
  return (
    <div className={styles.app}>
         <Provider store={store}>
            <Routing />
         </Provider>
    </div>
  );
}

export default App;
