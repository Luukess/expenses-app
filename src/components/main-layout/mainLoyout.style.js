export const sxStylesMainLayout = {
    mainLayout: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'row',
    },
    navSidebar: {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
        },
        width: '225px',
        height: 'calc(100vh - 64px)',
        overflowWrap: 'break-word',
        overflowY: 'auto',
        transition: 'width 0.5s',
        overflowX: 'hidden'
    },
    childrenContainer: {
        width: '100%',
        backgroundColor: 'pink',
        overflowY: 'auto'
    },
    listItemButton: {
        fontSize: '17px',
        height: '42px',
        margin: '4px 0px',
        height: '50px'
    },
    listItemIcon: {
        marginRight: '10px',
    },
    navButton: {
        fontSize: '26px',
        transition: 'rotate 0.5s'
    },
    navLink: {
        opacity: 1,
        transition: 'opacity 0.5s'
    },
    navButtonContainer: {
        padding: '0px 10px !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '50px',
        marginTop: '8px'
    }
}