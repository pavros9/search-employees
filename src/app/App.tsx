import './styles/index.scss'
import { AppRouter } from 'app/providers/router';
import { NavLink } from 'react-router-dom';

const App = () => {

    return (
        <>
            <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `rounded-md px-3 py-2 text-sm font-medium ${
                            isActive
                                ? 'text-orange-400 bg-gray-900'
                                : 'text-white'
                        }`
                    }
                >
                    MainPage
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                            ? 'text-orange-400 bg-gray-900'
                            : 'text-white'
                    }`
                }
            >
                ProfilePage
            </NavLink>

            
            <AppRouter/>
        </>
    )
}

export default App