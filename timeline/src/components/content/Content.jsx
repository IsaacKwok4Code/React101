import React , {Component} from 'react';
import ActivityItem from '../activityItem/ActivityItem';
import DataTwo from '../data/dataSet2';

class Content extends Component{

    render(){
        const {activities} = this.props;

        return (
            <div className="content">
                <div className="line"></div>
                    {/* Timeline item */}
                    {activities.map((activity) => (
                        <ActivityItem activity={activity} />
                    ))}
            </div>
        );
    }
}

export default Content;