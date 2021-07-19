import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    root: {
        position: "fixed",
        bottom: "5px",
        left: "5px",
        backgroundColor: "#eee",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        borderRadius: "5px",
        boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.1)",
        '& span': {
            color: "#333",
            '& b': {
                display: "inline",
                paddingRight: "5px"
            }
        }
    },
})

export { styles }