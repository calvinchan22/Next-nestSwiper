import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import styles from './style.module.scss'
import { parseURL } from '@/src/utils'
import cls from 'classnames'

const NAV = {
    home: {
        name: '家庭投影',
        key: 'home',
        children: [{
            key: 'a1',
            childKey: 'a1',
            name: 'A1 高亮旗舰',
            href: '/a1',
            imgUrl: 'http://cdn3.xinjingtech.cn/website/product_a1-new.png',
            type: 'img'
        }, {
            key: 'a2',
            childKey: 'a2',
            name: 'A2 音画双绝',
            href: '/a2',
            imgUrl: 'http://cdn3.xinjingtech.cn/website/product_a2-new.png',
            type: 'img'
        }, {
            key: 'b1',
            childKey: 'b1',
            name: 'B1 年轻首选',
            href: '/b1',
            imgUrl: 'http://cdn3.xinjingtech.cn/website/product_b1-new.png',
            type: 'img'
        }, {
            key: 'c1',
            childKey: 'c1',
            name: 'C1 性价比之选',
            href: '/c1',
            imgUrl: 'http://cdn3.xinjingtech.cn/website/product_c1-new.png',
            type: 'img'
        }]
    },
    program: {
        key: 'program',
        name: '行业方案',
        mobileHref: '/program',
        href: '/program'
    },
    lumi: {
        key: 'lumi',
        name: 'LUMI OS',
        mobileHref: '/lumi',
        href: '/lumi'
    },
    regard: {
        key: 'regard',
        name: '关于光元素',
        href: '/regard',
        mobileHref: '/regard'
    }
}

const AppHeader = () => {
    const [activeNav, setActiveNav] = useState('')
    const [isMenu, setMenu] = useState(false)
    const [activeMenu, setActiveMenu] = useState('')
    const [origin, setOrigin] = useState('')

    useEffect(() => {

        setOrigin(window.location.origin)

        NAV.home.children.forEach(item => {
            if (window.location.pathname.includes(item.key)) {
                setActiveNav(NAV.home.key)
            }
        })

        if (window.location.pathname.includes(NAV.program.key)) {
            setActiveNav(NAV.program.key)
        }

        if (window.location.pathname.includes(NAV.lumi.key)) {
            setActiveNav(NAV.lumi.key)
        }

        if (window.location.pathname.includes(NAV.regard.key)) {
            setActiveNav(NAV.regard.key)
        }
    }, [])

    const isActive = (key = '') => {
        if (key === NAV.home.key) {
            return activeNav === NAV.home.key
        }

        if (key === NAV.program.key) {
            return activeNav === NAV.program.key
        }

        if (key === NAV.lumi.key) {
            return activeNav === NAV.lumi.key
        }

        if (key === NAV.regard.key) {
            return activeNav === NAV.regard.key
        }
    }

    const isActiveMenu = (key = '') => {
        if (key === NAV.home.key) {
            return activeMenu === NAV.home.key
        }

        if (key === NAV.program.key) {
            return activeMenu === NAV.program.key
        }

        if (key === NAV.lumi.key) {
            return activeMenu === NAV.lumi.key
        }

        if (key === NAV.regard.key) {
            return activeMenu === NAV.regard.key
        }
    }

    const toTianMao = () => {
        window.open('https://guangyuansusm.tmall.com/shop/view_shop.htm')
    }

    const toJingDong = () => {
        window.open('https://mall.jd.com/index-1000459889.html')
    }

    const toHome = () => {
        window.location = origin + '/'
    }

    const toMenu = () => {
        const show = isMenu
        setMenu(!show)
    }

    const toHref = (href) => {
        window.location = origin + href
    }

    const clickmenu = (key) => {
        Object.values(NAV).forEach((item) => {
            if (key !== item.key) {
                return
            }
            if (item.mobileHref) {
                window.location = origin + item.mobileHref
                return
            }
            const list = activeMenu
            if (key === list) {
                setActiveMenu('')
            } else {
                setActiveMenu(key)
            }
        })
    }

    return (
        <div id="appHeader">
            <div className={cls([styles.appHeaderMobile, 'mobile'])}>
                <img src={isMenu ? 'http://cdn3.xinjingtech.cn/website/left.png' : 'http://cdn3.xinjingtech.cn/website/menu.png'} alt='troggle' className={styles.troggleIcon} onClick={toMenu}></img>
                <img src="http://cdn3.xinjingtech.cn/website/logo.png"
                    alt="光元素Logo" className={styles.logoIcon} onClick={toHome} />
            </div>
            {isMenu &&
                <div className={cls([styles.menuMobile, 'mobile'])}>
                    <ul className={styles.menuUl}>
                        {
                            Object.values(NAV).map(({ name, key, children, href, mobileHref }) => (
                                <li key={key} className={styles.menuItemMobile}>
                                    <div className={styles.menuItemLine} onClick={() => clickmenu(key)}>
                                        {
                                            mobileHref ? <Link
                                                href={origin + mobileHref}
                                                target={'_self'}
                                                className={styles.menuItemLineText}
                                            >
                                                {name}
                                            </Link> :
                                                <span className={styles.menuItemLineText}>{name}</span>
                                        }
                                        <img src="http://cdn3.xinjingtech.cn/website/arrow.png"
                                            alt="箭头" className={isActiveMenu(key) ? styles.activeArrow : styles.noActiveArrow}></img>
                                    </div>
                                    {
                                        !mobileHref && isActiveMenu(key) && children && children.length > 0 && (
                                            <div className={styles.menuChildrenBox}>
                                                {
                                                    children.map(({ name, childKey, href, imgUrl }) => (
                                                        <li key={childKey} className={styles.imgMenuChildrenItem} onClick={() => { toHref(href) }}>
                                                            <div className={styles.imgMenuChildrenItemWrap}>
                                                                <img src={imgUrl}></img>
                                                            </div>
                                                            <Link
                                                                href={origin + href}
                                                                target={'_self'}
                                                                className={styles.imgMenuChildrenItemText}
                                                            >
                                                                {name}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
            <div className={cls([styles.appHeader, 'pc'])}>
                <div className={styles.logo} onClick={toHome}>
                    <img src="http://cdn3.xinjingtech.cn/website/logo.svg"
                        alt="光元素Logo" />
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.menu}>
                        {
                            Object.values(NAV).map(({ name, key, children, href }) => (
                                <li key={key} className={styles.menuItem}>
                                    {href ? <Link
                                        href={origin + href}
                                        target={'_self'}
                                        className={cls({ [styles.active]: isActive(key) })}
                                    >
                                        {name}
                                    </Link> : <span className={cls({ [styles.active]: isActive(key) })}>{name}</span>}
                                    {
                                        isActive(key) && <motion.div
                                            initial={{ scaleX: 0.1 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className={styles.choiceImg}
                                        >
                                            <img src='http://cdn3.xinjingtech.cn/website/click.png'></img>
                                        </motion.div>
                                    }
                                    {
                                        children && children.length > 0 && (
                                            <div className={styles.dropdownWrap}>
                                                <ul className={cls([
                                                    styles.dropdown,
                                                    { [styles.dropdownHome]: key === NAV.home.key },
                                                    { [styles.dropdownProgram]: key === NAV.program.key },
                                                    { [styles.dropdownLumi]: key === NAV.lumi.key },
                                                    { [styles.dropdownRegard]: key === NAV.regard.key }])}
                                                >
                                                    {
                                                        children.map(({ name, childKey, href, type, imgUrl }) => (
                                                            type === 'img' ? <li key={childKey} className={styles.imgDropdownItem} onClick={() => { toHref(href) }}>
                                                                <div className={styles.imgDropdownItemWrap}>
                                                                    <img src={imgUrl}></img>
                                                                </div>
                                                                <Link
                                                                    href={origin + href}
                                                                    target={'_self'}
                                                                >
                                                                    {name}
                                                                </Link>
                                                            </li> :
                                                                <li key={childKey} className={styles.dropdownItem}>
                                                                    {href ? <Link
                                                                        href={origin + href}
                                                                        target={'_self'}
                                                                    >
                                                                        {name}
                                                                    </Link> : <span>{name}</span>}
                                                                </li>

                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className={styles.rightLogo}>
                    <div className={styles.tmallLogo} onClick={() => {toTianMao()}}>
                        <img src="http://cdn3.xinjingtech.cn/website/tmall.svg"
                            alt="天猫" className={styles.tmallLogoMain} />
                        <span className={styles.tmallText}>天猫购买</span>
                    </div>
                    <div className={styles.jdLogo} onClick={() => {toJingDong()}}>
                        <img src="http://cdn3.xinjingtech.cn/website/jd.svg"
                            alt="京东" className={styles.jdLogoMain} />
                        <span className={styles.jdText}>京东购买</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader