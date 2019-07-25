import React, {Component} from 'react';
import {Layout, Table, Icon, Skeleton} from "antd";
import {Link} from "react-router-dom";
const {Content} = Layout;
const {Column} = Table;

class CompetitionList extends Component{
    render() {
        return (
            <Layout>
                <Content>
                    <div>
                        {
                            this.props.venues.length > 0 ?
                                <Table
                                    rowKey={record =>record.id}
                                    dataSource={this.props.venues}
                                    pagination={false}
                                    scroll={{y:400}}
                                >
                                    <Column
                                        title={'Venue'}
                                        dataIndex={'name'}
                                        key={'name'}
                                        width={150}
                                        render={(name) =>(
                                            <div>
                                                <span>{name}</span>
                                            </div>
                                        )}
                                    />
                                    <Column
                                        title={'Region'}
                                        dataIndex={'region'}
                                        key={'region'}
                                        width={150}
                                        render={(region) =>(
                                            <div>
                                                <span>{region}</span>
                                            </div>
                                        )}
                                    />
                                    <Column
                                        title={'Num of Events'}
                                        dataIndex={'numEvents'}
                                        key={'numEvents'}
                                        width={150}
                                        render={(numEvents) =>(
                                            <div>
                                                <span>{numEvents}</span>
                                            </div>
                                        )}
                                    />
                                    <Column
                                        title='Action'
                                        dataIndex='action'
                                        key='action'
                                        render={(id, record) =>(
                                            <span>
                                   <Link to={'/competition/venue/' + record.id}>
                                        <Icon type="eye" />
                                   </Link>
                               </span>
                                        )}
                                    />
                                </Table>
                                : <Skeleton active/>
                        }
                    </div>

                </Content>
            </Layout>
        )
    }
}

export default CompetitionList;
