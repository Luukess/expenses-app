export const sxStylesMainLayout = {
    mainLayout: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
    },
    navSidebar: {
        display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
        },
        width: '100px',
        backgroundColor: 'red',
        height: '100vh',
        padding: '10px',
        overflowWrap: 'break-word'
    },
    childrenContainer: {
        width: '100%',
        backgroundColor: 'pink',
        overflowY: 'auto'
    }
}