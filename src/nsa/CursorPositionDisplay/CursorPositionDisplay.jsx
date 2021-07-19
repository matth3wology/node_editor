import {styles} from './styles'

const CursorPositionDisplay = (props) => {
    
    let classes = styles()

    return (
        <span className={classes.root}>
            <span>
                <b>X:</b>{props.position.x} 
                <b>Y:</b>{props.position.y}
            </span>
        </span>
    )
}

export default CursorPositionDisplay;

