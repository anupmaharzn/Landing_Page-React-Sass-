import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Aux from '../Auxiliary/Auxiliary';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeatureSection from '../../components/FeaturesSections/FeatureSection';
import ArticleSection from '../../components/ArcticleSection/ArticleSection';
import Footer from '../../components/Footer/Footer';
class Layout extends Component {

    state = {
        showSideDrawer: false
    };
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    sideDrawerToggleHandler = () => {
        //dependsupon previous state thats why 
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer,

            }

        })
        console.log('toggles');
    }


    render() {
        return (
            <Aux >

                <Navbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <HeroSection />
                <FeatureSection />
                <ArticleSection />
                <Footer />
            </Aux>

        );
    }
}

export default Layout;