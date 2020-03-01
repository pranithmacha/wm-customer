import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Divider, Drawer, Theme, createStyles } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings'

import SidebarNav from './components/SideBarNav'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: 240,
            [theme.breakpoints.up('lg')]: {
                marginTop: 64,
                height: 'calc(100% - 64px)'
            }
        },
        root: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: theme.spacing(2)
        },
        divider: {
            margin: theme.spacing(2, 0)
        },
        nav: {
            marginBottom: theme.spacing(2)
        }
    })
)

const Sidebar = (props: any) => {
    const { open, variant, onClose, className, ...rest } = props

    const classes = useStyles()

    const pages = [
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: <DashboardIcon />
        },
        {
            title: 'Users',
            href: '/users',
            icon: <PeopleIcon />
        },
        {
            title: 'Products',
            href: '/products',
            icon: <ShoppingBasketIcon />
        },
        {
            title: 'Account',
            href: '/account',
            icon: <AccountBoxIcon />
        },
        {
            title: 'Settings',
            href: '/settings',
            icon: <SettingsIcon />
        }
    ]

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root, className)}>
                <Divider className={classes.divider} />
                <SidebarNav className={classes.nav} pages={pages} />
            </div>
        </Drawer>
    )
}

export default Sidebar
