import React, {Component} from 'react';
import {Layout, Descriptions, Divider, Tabs} from "antd";
import moment from "moment";
import CountDownTimer from "../common/countDownTimer";
import RunnerList from "./runnerList";
import appStyle from '../../asset/app.module.scss';
const {Content} = Layout;
const TabPane = Tabs.TabPane;

class EventDetail extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    <div>
                        <Descriptions title={'Event Info'}>
                            <Descriptions.Item label={'Name'}>{this.props.event.name}</Descriptions.Item>
                            <Descriptions.Item label={'Venue'}>{this.props.event.meetingName}</Descriptions.Item>
                            <Descriptions.Item label={'Date'}>
                                {moment.unix(this.props.event.startTime).format('DD/MM/YYYY')}
                                <Divider type="vertical" />
                                <CountDownTimer targetTime={this.props.event.startTime} />
                            </Descriptions.Item>
                        </Descriptions>
                    </div>

                    <div>
                        <Tabs
                            defaultActiveKey='0'
                        >
                            {
                                this.props.event.marketList.map(function (market, index) {
                                    return <TabPane tab={market.name} key={index}>
                                        <RunnerList runners={market.outcomeList} />
                                    </TabPane>
                                })
                            }
                        </Tabs>
                    </div>

                </Content>
            </Layout>

        )
    }
}

export default EventDetail;
