import styles from './App.module.css'
import { Outlet } from 'react-router'
import {Link} from "react-router-dom";

export const App = () => {
    return (
        <div className={styles.app}>
            <Link to="/about">о нас</Link>
            <Outlet />
        </div>
    );
};

export default App;