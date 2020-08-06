import React from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends React.Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
    }

    render() {
        const { data, onRemove } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;