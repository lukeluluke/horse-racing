import React, {Component} from 'react';
import {Layout, Tabs, Icon, Skeleton} from "antd";
import EventDetail from "./eventDetail";

const {Content} = Layout;
const TabPane = Tabs.TabPane;

class EventList extends Component {

    state = {
        activeKey: '0'
    };


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({activeKey: '0'});
    }


    onTabChange = (key) => {
        this.setState({activeKey: key});
    };

    render() {
        return (
            <Layout>
                <Content>
                    <div>
                        {
                            this.props.events ?
                                <Tabs
                                    defaultActiveKey='0'
                                    onChange={this.onTabChange}
                                    activeKey={this.state.activeKey}
                                >
                                    {
                                        this.props.events.map(function (event, index) {
                                            return <TabPane
                                                tab={<div><Icon type="flag"/><span>{event.raceNumber}</span></div>}
                                                key={index}>
                                                <EventDetail event={event}/>
                                            </TabPane>
                                        })
                                    }
                                </Tabs>
                                : <Skeleton active/>
                        }
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default EventList;
