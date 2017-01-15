import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, IndexRoute, browserHistory, routes } from 'react-router'

import styles from '../css/admin-login.css'

// import Header from './components/common/header.jsx'
// import Footer from './components/common/footer.jsx'

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    loginBtn(e) {
        let userName = this.refs.userName;
        let password = this.refs.password;

        if(userName.value && password.value) {
            // 在这里记录下Fetch是怎么使用的
            fetch("adminLogin/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                // mode: "cors",
                body: JSON.stringify({
                    userName: userName.value,
                    password: password.value
                })
            }).then(function(res) {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res.json())
                }
            }).then(function(data) {
                if(data.status) {
                    alert(data.msg);
                }
            }).catch(function(err) {
                console.log(err);
            });
        } else {
            alert('请输入完整登录信息');
        }
    }

	render() {
		return (
			<div>
			    <div className={styles.loginWrap}>
                    <a className={styles.logoLink} href='/'><img className={styles.logoImg} src='img/logo.png' /></a>
                    <div className={styles.login}>
                        <h2 className={styles.logTit}>Lab后台登录页面</h2>
                        <form className={styles.logForm}>
                            <p className={styles.logItem}>
                                <label className={styles.logLab} for='userName'>账号：</label>
                                <input ref='userName' className={styles.logInp} type='text' placeholder='请输入昵称' />
                            </p>
                            <p className={styles.logItem}>
                                <label className={styles.logLab} for='password'>密码：</label>
                                <input ref='password' className={styles.logInp} type='password' placeholder='请输入密码' />
                            </p>
                            <p className={styles.logItem}>
                                <input onClick={this.loginBtn.bind(this)} className={styles.subBtn} type='button' value='登录' />
                            </p>
                        </form>
                    </div>
                </div>
			</div>
		)
	}
}

ReactDOM.render((
    <App />
), document.getElementById('root'))