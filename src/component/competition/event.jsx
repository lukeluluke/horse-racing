import React, {Component} from 'react';
import {Layout, Select} from "antd";
import EventList from "./eventList";
import appStyle from '../../asset/app.module.scss';
const {Content} = Layout;
const { Option } = Select;

class EventView extends Component{
    componentDidMount() {
        const {match: {params}} = this.props;
        if (this.props.competitions.length === 0) {
            /**
             * In case of refresh page
             */
            this.props.getEvents(1, 'O', 1, params.venueId);
        } else {
            this.props.getVenueEvents(params.venueId);
        }
    }

    changeVenue = (venueId) => {
        this.props.history.push('/competition/venue/' + venueId);
        this.props.getVenueEvents(venueId);
    };

    render() {
        return (
            <Layout>
                <Content>
                    <div className={appStyle.page_title}>Events</div>
                    <div className={appStyle.event_venue_select}>
                        <label className={appStyle.page_label}>Select Venue</label>
                        <Select
                            showSearch
                            value={this.props.venueEvents.id}
                            style={{width: 150}}
                            placeholder={'Select a venue'}
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0}
                            onChange={this.changeVenue}
                        >
                            {
                                this.props.venues.map((venue, index) => {
                                    return <Option key={index} value={venue.id}>{venue.name}</Option>
                                })
                            }

                        </Select>
                    </div>

                    <div className={appStyle.event_list}>
                        <EventList events={this.props.venueEvents.eventList}/>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default EventView;
