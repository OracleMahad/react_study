import React from 'react';

class MyName extends React.Component {
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        )
    }
}

export default MyName;