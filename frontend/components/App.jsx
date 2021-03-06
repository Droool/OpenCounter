import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Auth, AuthRoute } from '../util/route_utils';

import Modal from './modal/modal';
import NavBar from './nav_bar/nav_bar_container';
import RestaurantIndexContainer from './restaurants/index/restaurant_index_container';
import Home from '../components/home/home_container';
import Show from '../components/restaurants/show/restaurant_show_container';
import Search from '../components/search/search_container';
import Footer from './footer/footer';
import Header from './header/header';


const App = () => (
    <div className="container">
        <Modal />
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants/search" component={Search} />
            <Route path="/restaurants/:restaurantId" component={Show} />
        </Switch>
        <Footer />
    </div>

);

export default App;