import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import leaf from '../../../../static/leaf-solid.svg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerIcon: {
            color: '#139a49',
            height: 30
        },
        grow: {
            flexGrow: 1
        },
        image: {
            color: 'blue',
            height: 35,
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            paddingRight: theme.spacing(2)
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            },
            color: '#ffffff'
        },
        navItem: {
            padding: theme.spacing(2),
            color: '#ffffff'
        },
        inputRoot: {
            color: 'inherit'
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: 200
            }
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            }
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none'
            }
        },
        mobileMenuIcon: {
            color: '#139a49'
        }
    })
)

export default function NavBar() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [
        mobileMoreAnchorEl,
        setMobileMoreAnchorEl
    ] = React.useState<null | HTMLElement>(null)

    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
        handleMobileMenuClose()
    }

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )

    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            className={classes.mobileMenuIcon}
            color="secondary"
        >
            <MenuItem>
                <Typography className={classes.navItem} variant="h6" noWrap>
                    About
                </Typography>
            </MenuItem>
            <MenuItem>
                <Typography className={classes.navItem} variant="h6" noWrap>
                    Services
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Typography className={classes.navItem} variant="h6" noWrap>
                    Contact
                </Typography>
            </MenuItem>
        </Menu>
    )

    const handleClick = (ref: string) => {
        window.location.href = ref
    }

    return (
        <div className={classes.grow}>
            <AppBar
                id="mainNav"
                position="static"
                style={{ background: 'transparent', boxShadow: 'none' }}
            >
                <Toolbar>
                    <img src={leaf} alt="clock" className={classes.image} />
                    <Typography className={classes.title} variant="h4" noWrap>
                        WOW
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Typography
                            className={classes.navItem}
                            variant="h6"
                            noWrap
                        >
                            About
                        </Typography>
                        <Typography
                            className={classes.navItem}
                            variant="h6"
                            noWrap
                        >
                            Services
                        </Typography>
                        <Typography
                            className={classes.navItem}
                            variant="h6"
                            noWrap
                            onClick={() => handleClick('/signin')}
                        >
                            Contact
                        </Typography>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    )
}
