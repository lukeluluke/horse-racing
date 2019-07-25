import React, {Component} from 'react';
import moment from 'moment';
import appStyle from '../../asset/app.module.scss';
export class CountDownTimer extends Component {
    state = {
        countdown: ''
    };

    componentWillMount() {
        this.setupTimer();
        this.interval = setInterval(() => {
            this.setupTimer()
        }, 1000)
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }

        this.setState({
            countdown: ''
        });
    }

    setupTimer = () => {
        if (!this.props.targetTime) {
            return false;
        }
        const now = moment();
        const endTime = moment.unix(this.props.targetTime);

        if (endTime.isBefore(now)) {
            this.setState({
                countdown: ''
            });
            return false;
        }

        const duration = moment.duration(endTime.diff(now));

        const days = Math.abs(duration.days()) > 0 ? Math.abs(duration.days()) + 'd' : '';
        const hours = Math.abs(duration.hours()) > 0 ? Math.abs(duration.hours()) + 'h' : '';
        const minutes = Math.abs(duration.minutes()) > 0 ? Math.abs(duration.minutes()) + 'm' : '';
        const seconds = Math.abs(duration.seconds()) > 0 ? Math.abs(duration.seconds()) + 's' : '';

        let countdown = days + ' ' + hours + ' ' + minutes + ' ' + seconds;

        this.setState({
            countdown: countdown
        })
    };

    render() {
        return (
            this.props.targetTime ?
                <span className={appStyle.timer}>
                {this.state.countdown}
            </span>
                : ''
        )
    }
}

export default CountDownTimer;
