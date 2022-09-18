import { useRoutes } from 'react-router-dom';
import HomePage from '../pages';
import CurrentMatch from '../pages/CurrentMatch';
import NewMatch from '../pages/NewMatch';
import Error404 from '../pages/utils/Error404';

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <HomePage />
                },
                {
                    path: 'match-actuel',
                    element: <CurrentMatch />
                },
                {
                    path: 'nouveau-match',
                    element: <NewMatch />
                }
            ]
        },
        {
            path: '*',
            element: <Error404 />
        }
    ]);
}