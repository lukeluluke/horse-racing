import React, {Component} from 'react';
import {Layout} from "antd";
import CompetitionList from "./competitionList";
import appStyle from '../../asset/app.module.scss';
const {Content} = Layout;

export class CompetitionView extends Component{
    componentDidMount() {
        this.props.getCompetition(1, 'O', 1);
    }

    render() {
        return (
            <Layout>
                <Content>
                    <div className={appStyle.page_title}>Competitions</div>
                    <div className={appStyle.competition_list}>
                        <CompetitionList venues={this.props.venues}/>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default CompetitionView;
