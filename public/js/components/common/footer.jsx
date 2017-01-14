import React from 'react'
import { Link } from 'react-router'

import styles from './style.css'
import $ from '../../lib/jquery.js'

export default class Footer extends React.Component{
	render(){
		return (
			<div className={styles.fooWrap}>
				<div className={styles.footer}>
				    <div className={styles.friLink}>
				        <h3 className={styles.friLinkTit}>友情链接</h3>
				        <div className={styles.friLinkCon}>
				            <div className={styles.friLinkCul}>
				                <a className={styles.firLinkItem} href='#'>重庆邮电大学</a>
					            <a className={styles.firLinkItem} href='#'>经济管理学院</a> 
				            </div>
				            <div className={styles.friLinkCul}>
				                <a className={styles.firLinkItem} href='#'>经管联盟工作室</a>
					            <a className={styles.firLinkItem} href='#'>信息系统协会中国分会</a>
				            </div>
				            <div className={styles.friLinkCul}>
				                <a className={styles.firLinkItem} href='#'>信息系统学报</a>
					            <a className={styles.firLinkItem} href='#'>高校社科网</a>
				            </div>
				            <div className={styles.friLinkCul}>
				                <a className={styles.firLinkItem} href='#'>红岩网校</a>
					            <a className={styles.firLinkItem} href='#'>工业和信息化部</a>
				            </div>
				        </div>
				    </div>
				    <div className={styles.relLink}>
				        <div className={styles.address}>
				            版权所有<span>|</span>重庆邮电大学<span>|</span>重庆市南岸区崇文路2号<span>|</span>400065号<span>|</span>渝ICP:10005091-2
				        </div>
				        <div className={styles.extraLink}>
				            <a className={styles.exLinkItem} href='#'>联系我们</a>
				            <span>|</span>
				            <a className={styles.exLinkItem} href='#'>后台登录</a>
				        </div>
				        <p className={styles.copyright}>CopyRight © 2016 重庆邮电大学经济管理学院</p>
				    </div>
				</div>
			</div>
		)
	}
}