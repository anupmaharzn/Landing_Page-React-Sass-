import React, { Component } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Aux from '../Auxiliary/Auxiliary';
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
                {/* <Navigation /> */}
                <Navbar
                    drawerToggleClicked={this.sideDrawerToggleHandler}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />

                Why choose Easybank?

                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.

                Online Banking
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.

                Simple Budgeting
                See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.

                Fast Onboarding
                We don’t do branches. Open your account in minutes online and start taking control
                of your finances right away.

                Open API
                Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.

                Why choose Easybank?

                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.

                Online Banking
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.

                Simple Budgeting
                See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.

                Fast Onboarding
                We don’t do branches. Open your account in minutes online and start taking control
                of your finances right away.

                Open API
                Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.


                Why choose Easybank?

                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.

                Online Banking
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.

                Simple Budgeting
                See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.

                Fast Onboarding
                We don’t do branches. Open your account in minutes online and start taking control
                of your finances right away.

                Open API
                Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.


                Why choose Easybank?

                We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.

                Online Banking
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.

                Simple Budgetings
                See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.

                Fast Onboarding
                We don’t do branches. Open your account in minutes online and start taking control
                of your finances right away.

                Open API
                Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.



            </Aux>

        );
    }
}

export default Layout;