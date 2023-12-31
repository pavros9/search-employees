import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { MainLayout } from 'app/layoutes/MainLayout/MainLayout';
import { LoaderPage } from 'widgets/LoaderPage';

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        path={path}
                        element={<MainLayout>{element}</MainLayout>}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
