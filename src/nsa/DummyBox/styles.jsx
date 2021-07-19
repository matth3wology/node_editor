import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    root: {
        backgroundColor: "slategrey",
        width: "200px",
        height: "280px",
        position:"absolute",
        boxShadow: "1px 2px 5px rgba(0,0,0,0.3)",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px"
    },
    header: {
        width: "100%",
        height: "40px",
        backgroundColor: "slateblue",
        '&:hover': {
            cursor: "grab"
        }
    }
})

export { styles }