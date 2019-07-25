import React, {Component} from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import appStyle from '../../asset/app.module.scss';
import {Layout, Menu} from "antd";
import CompetitionView from "../../container/competition/index";
import EventView from "../../container/competition/event";

const {Header, Footer, Content} = Layout;

class MainLayout extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout className={appStyle.full_screen}>
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="home">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="competition">
                                <Link to="/competition">
                                    <span>Competition</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content className={appStyle.padding_50}>
                        <Switch>
                            <Route exact path='/' render={()=> (
                                <div className={appStyle.home_title}>Welcome to horse racing</div>
                                )} />
                            <Route exact path='/competition' component={CompetitionView} />
                            <Route exact path='/competition/venue/:venueId' component={EventView} />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}


export default MainLayout;
