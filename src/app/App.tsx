import { useNavigate } from 'react-router-dom';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { useEffect } from 'react';

const App = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <>
            <AppRouter />
        </>
    );
};

export default App;
