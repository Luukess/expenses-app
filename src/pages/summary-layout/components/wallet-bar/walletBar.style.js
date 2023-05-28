export const sxStylesWalletBar = {
    boxBorder: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid',
        borderRadius: '10px',
        margin: '10px 0px',
        transition: 'all 0.5s',
        borderColor: 'primary.main',
        '&:hover': {
            backgroundColor: 'primary.dark',
            opacity: [0.9, 0.8, 0.7],
            borderColor: 'primary.main',
            color: 'white'
        }
    },
    walletText: {
        fontSize: {
            xs: '14px',
            sm: '14px',
            md: '16px'
        }
    }
};