import React, {Component} from 'react';
import {Layout, Table} from "antd";
import appStyle from '../../asset/app.module.scss';
const {Content} = Layout;
const {Column} = Table;


class RunnerList extends Component {
    render() {
        return(
            <Layout>
                <Content>
                    <div className={appStyle.runner_list}>
                        <Table
                            rowKey={record =>record.id}
                            dataSource={this.props.runners}
                            pagination={false}
                            scroll={{y:400}}
                            bordered
                        >
                            <Column
                                title={'Name'}
                                dataIndex={'name'}
                                key={'name'}
                                width={200}
                                render={(name) => (
                                    <div>{name}</div>
                                )}
                            />

                            <Column
                                title={'Odds'}
                                dataIndex={'winPrice'}
                                key={'winPrice'}
                                render={(winPrice) => (
                                    <div>{winPrice}</div>
                                )}
                            />

                        </Table>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default RunnerList;
