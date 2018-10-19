// import cfg from './config.json'
// const greeter = () => {
// 	const greet = document.createElement('div');
//     greet.textContent = cfg.title;
//     return greet;
// }

// export default greeter
import React from 'react'
import { Link } from 'react-router'
import cfg from './config.json'
import style from './Greeter.css'
import styles from './test.less'
import Header from './components/common/Header.js'

class Greeter extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Header />
                {/* <Link to='/'>safasddasfdsfds</Link> */}
                {this.props.children}
                <h1>{cfg.title}<br/>测试一下</h1>
                <span className={style['gre']}>12asafasadasdfdfsdfsdf852045</span>
                <span className={style['text']}>走sdff进集团asdfdsasfdsdas研sadsfdsf发，解读业务基因</span>
                <span className={styles['test-less']}>测试le's's</span>
            </div>
        )
    }
}

export default Greeter