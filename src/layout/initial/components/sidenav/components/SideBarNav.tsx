/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import {
    List,
    ListItem,
    Button,
    colors,
    Theme,
    createStyles
} from '@material-ui/core'

interface Page {
    title: string
    href: string
    icon: any
}

interface SideNavProps {
    pages: Page[]
    className: any
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        item: {
            display: 'flex',
            paddingTop: 0,
            paddingBottom: 0
        },
        button: {
            color: colors.blueGrey[800],
            padding: '10px 8px',
            justifyContent: 'flex-start',
            textTransform: 'none',
            letterSpacing: 0,
            width: '100%',
            fontWeight: theme.typography.fontWeightMedium
        },
        icon: {
            color: theme.palette.primary.main,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            marginRight: theme.spacing(1)
        },
        active: {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
            '& $icon': {
                color: theme.palette.primary.main
            }
        }
    })
)

const CustomRouterLink = forwardRef((props: any, ref: any) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
    </div>
))

const SidebarNav = (props: SideNavProps) => {
    const { pages, className, ...rest } = props

    const classes = useStyles()

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            {pages.map(page => (
                <ListItem
                    className={classes.item}
                    disableGutters
                    key={page.title}
                >
                    <Button className={classes.button} href={page.href}>
                        <div className={classes.icon}>{page.icon}</div>
                        {page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}

export default SidebarNav
