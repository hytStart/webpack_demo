import React from 'react'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div style={{width:'100%', height:'20px', backgroundColor: 'pink'}}>
                <span>Header</span>
            </div>
        )
    }
}

export default Header