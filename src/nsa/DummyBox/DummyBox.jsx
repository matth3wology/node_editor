import {styles} from './styles'
import {useState, useEffect} from 'react'

const DummyBox = (props) => {

    const [offsetX, setOffsetX] = useState(100)
    const [offsetY, setOffsetY] = useState(20)
    const [x, setX] = useState(20)
    const [y, setY] = useState(20)
    const [mouseIsDown, setMouseIsDown] = useState(false)
    
    useEffect(() => {
        if(mouseIsDown){
            setX(props.x - offsetX)
            setY(props.y - offsetY)
        }
    }, [mouseIsDown, props.x, props.y, offsetX, offsetY])

    let classes = styles()

    return(
        <div style={{left:x, top:y}} className={classes.root}
        onMouseDown={e => {
            let boundingBox = e.currentTarget.getBoundingClientRect()
            setOffsetX(props.x - boundingBox.x)
            setOffsetY(props.y - boundingBox.y)
            setMouseIsDown(true)
        }}
        
        onMouseUp={() => {
            setMouseIsDown(false)
        }}>
            <div className={classes.header}>     
                <span>
                </span>
            </div>
        </div>
    )
}

export default DummyBox;