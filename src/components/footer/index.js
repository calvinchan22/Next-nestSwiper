import styles from './style.module.scss'
import Link from 'next/link'
import cls from 'classnames'
import { useState, useEffect } from 'react'
const AppFooter = () => {
    const [Type, setType] = useState(0)
    const [origin, setOrigin] = useState('')

    useEffect(() => {
        setOrigin(window.location.origin)
    }, [])


    const chanceType = (key) => {
        const num = Type
        if(num === key){
            setType(0)
        } else {
            setType(key)
        }
    }

    const openHref = (href) => {
        window.open(href)
    }

    return (
        <div id="appFooter">
            <div className={cls([styles.appFooter, 'pc'])}>
                <div className={styles.footerTop}>
                    <div className={styles.topBox}>
                        <img src='http://cdn3.xinjingtech.cn/website/phone.png'></img>
                        <span>0755-2691 5672</span>
                    </div>
                    <div className={styles.topBox}>
                        <img src='http://cdn3.xinjingtech.cn/website/email.png'></img>
                        <span>service@guangyuansu.com</span>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.bottomLeft}>
                        <div className={styles.bottomLeftTop}>
                            <div className={styles.leftList}>
                                <div className={styles.listTitle}>关于我们</div>
                                <Link href={origin + '/regard'}>公司介绍</Link>
                                <Link href={origin + '/regard'}>品牌介绍</Link>
                            </div>
                            <div className={styles.leftList}>
                                <div className={styles.listTitle}>购买渠道</div>
                                <Link href='https://mall.jd.com/index-1000459889.html'>京东旗舰店</Link>
                                <Link href='https://guangyuansusm.tmall.com/shop/view_shop.htm'>天猫旗舰店</Link>
                                <Link 
                                    href='https://mobile.yangkeduo.com/mall_page.html?_x_org=2&refer_share_uin=3KWOYHY2AEPIOW32DO6X25QBGE_GEXDA&refer_share_id=W78hoTiQZ06b2j2xnZJiTKlU9DschIFY&_x_query=%E5%85%89%E5%85%83%E7%B4%A0&_wv=41729&refer_share_channel=copy_link&msn=knpbyxjodlc7ouwinczygdio6e_axbuy&has_decoration=1&mall_id=687640148&_wvx=10'
                                >拼多多旗舰店</Link>
                            </div>
                            <div className={styles.leftList}>
                                <div className={styles.listTitle}>关注光元素</div>
                                <img src='http://cdn3.xinjingtech.cn/website/weixin.png' className={styles.logoWeixin} onMouseEnter={() => {
                                    const erwerma = document.querySelector('#erweima')
                                    erwerma.style.transform = 'scale(1.1)'
                                }} onMouseLeave={() => {
                                    const erwerma = document.querySelector('#erweima')
                                    erwerma.style.transform = 'scale(1)'
                                }}></img>
                                <img src='http://cdn3.xinjingtech.cn/website/weibo.png' onClick={() => openHref('https://weibo.com/u/7802835309')}></img>
                                <img src='http://cdn3.xinjingtech.cn/website/xiaohongshu.png' onClick={() => {openHref('https://www.xiaohongshu.com/user/profile/62cbedeb0000000002002c26?xhsshare=CopyLink&appuid=5621934b62a60c4cc5a8e230&apptime=1702523566')}}></img>
                            </div>
                        </div>
                        <div className={styles.bottomLeftBottom}>
                            <span>光元素深圳网络科技有限公司</span>
                            <span className={styles.divider}>|</span>
                            <span>粤ICP备2022136394号 ©2023 光元素. All Rights Reserved.</span>
                        </div>
                    </div>
                    <div className={styles.bottomRight}>
                        <img src='http://cdn3.xinjingtech.cn/website/erweima.png' id="erweima"></img>
                        <div>扫码关注 了解更多产品动态</div>
                    </div>
                </div>
            </div>
            <div className={cls([styles.appFooterMobile, 'mobile'])}>
                <div className={styles.footerTop}>
                    <div className={styles.topBox}>
                        <img src='http://cdn3.xinjingtech.cn/website/phone.png'></img>
                        <span>0755-2691 5672</span>
                    </div>
                    <div className={styles.topBox}>
                        <img src='http://cdn3.xinjingtech.cn/website/email.png'></img>
                        <span>12345678Ruk.com</span>
                    </div>
                </div>
                <div className={styles.footerCentre}>
                    <div className={styles.centreLine} onClick={() => {chanceType(1)}} style={{borderBottom: Type === 1 ? 'none' : '1px solid rgba($color: #FFFFFF, $alpha: 0.6)'}}>
                        <span>关于我们</span>
                        <img src={Type === 1 ? 'http://cdn3.xinjingtech.cn/website/minus.png' : 'http://cdn3.xinjingtech.cn/website/plus.png'}></img>
                    </div>
                    {
                        Type === 1 && 
                        <div>
                            <Link href={origin + '/regard'} className={styles.centreLineItem}>公司介绍</Link>
                            <Link href={origin + '/regard'} className={styles.centreLineItem}>品牌介绍</Link>
                        </div>
                    }
                    <div className={styles.centreLine} onClick={() => {chanceType(2)}} style={{borderBottom: Type === 2 ? 'none' : '1px solid rgba($color: #FFFFFF, $alpha: 0.6)'}}>
                        <span>购买渠道</span>
                        <img src={Type === 2 ? 'http://cdn3.xinjingtech.cn/website/minus.png' : 'http://cdn3.xinjingtech.cn/website/plus.png'}></img>
                    </div>
                    {
                        Type === 2 && 
                        <div>
                            <Link 
                                href='https://mall.jd.com/index-1000459889.html' 
                                className={styles.centreLineItem}
                            >京东旗舰店</Link>
                            <Link 
                                href='https://guangyuansusm.tmall.com/shop/view_shop.htm' 
                                className={styles.centreLineItem}
                            >天猫旗舰店</Link>
                            <Link 
                                href='https://mobile.yangkeduo.com/mall_page.html?_x_org=2&refer_share_uin=3KWOYHY2AEPIOW32DO6X25QBGE_GEXDA&refer_share_id=W78hoTiQZ06b2j2xnZJiTKlU9DschIFY&_x_query=%E5%85%89%E5%85%83%E7%B4%A0&_wv=41729&refer_share_channel=copy_link&msn=knpbyxjodlc7ouwinczygdio6e_axbuy&has_decoration=1&mall_id=687640148&_wvx=10' 
                                className={styles.centreLineItem}
                            >拼多多旗舰店</Link>
                        </div>
                    }
                    <div className={styles.centreLine} onClick={() => {chanceType(3)}} style={{borderBottom: Type === 3 ? 'none' : '1px solid rgba($color: #FFFFFF, $alpha: 0.6)'}}>
                        <span>关注光元素</span>
                        <img src={Type === 3 ? 'http://cdn3.xinjingtech.cn/website/minus.png' : 'http://cdn3.xinjingtech.cn/website/plus.png'}></img>
                    </div>
                    {
                        Type === 3 && 
                        <div className={styles.centreLineBox}>
                            <img src='http://cdn3.xinjingtech.cn/website/weixin.png'></img>
                            <img src='http://cdn3.xinjingtech.cn/website/weibo.png' onClick={() => openHref('https://weibo.com/u/7802835309')}></img>
                            <img src='http://cdn3.xinjingtech.cn/website/xiaohongshu.png' onClick={() => {openHref('https://www.xiaohongshu.com/user/profile/62cbedeb0000000002002c26?xhsshare=CopyLink&appuid=5621934b62a60c4cc5a8e230&apptime=1702523566')}}></img>
                        </div>
                    }
                </div>
                <div className={styles.footerCode}>
                    <div className={styles.imgErWeiMa}>
                        <img src='http://cdn3.xinjingtech.cn/website/erweima.png'></img>
                    </div>
                    <div>扫码关注 了解更多产品动态</div>
                </div>
                <div className={styles.footerBottom}>
                    <span>©2023 光元素. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default AppFooter