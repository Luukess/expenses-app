export const sxStylesSidebar = {
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
    listItemIcon: {
        marginRight: '10px',
    },
    navButton: {
        fontSize: '26px',
        transition: 'transform 0.5s'
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