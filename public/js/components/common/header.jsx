import React from 'react'
import { Link } from 'react-router'

import styles from './style.css'
import $ from '../../lib/jquery.js'

export default class Header extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			navCur: 0
		}
	}

	componentDidMount() {
		// 写法逻辑有问题
		// alert()
		$($('#nav').find('li').get(0)).addClass('navLinkCur')
		this.navCur(styles.heaWrap)
	}

	navCur() {
		$('#nav').find('li').click(function(){
			$('#nav').find('li').removeClass('navLinkCur')
			$(this).addClass('navLinkCur')
		})
	}

	render() {
		return (
			<div className={styles.heaWrap}>
				<div className={styles.header}>
				    <a className={styles.logoLink} href='index.html'><img className={styles.logoImg} src='img/logo.png' /></a>
				    <div className={styles.langEle}>
				        <a className={styles.langItem} href='#'>中文</a>| 
				        <a className={styles.langItem} href='#'>English</a>
				    </div>
				    <p className={styles.welCon}>欢迎访问本网站，今日时刻：<span className={styles.nowTime}>2016年10月13日星期四11:18</span></p>
				</div>
				<div className={styles.navWrap}>
			        <ul id='nav' className={styles.nav}>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/'>首页</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/about'>关于我们</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/member'>成员介绍</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/studyActivity'>教学活动</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/studyTrends'>研究动态</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/masterTraining'>研究生培养</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/product'>产品与服务</Link></li>
			            <li className={styles.navItem}><Link className={styles.navLink} to='/oldMember'>往届成员</Link></li>
			        </ul>
			    </div>
			</div>
		)
	}
}