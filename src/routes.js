import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Agenda from './pages/Agenda';
//import List from './pages/List';
//import Book from './pages/Book';

const Routes = createAppContainer(
    createSwitchNavigator({
        Agenda
    })
);

export default Routes;