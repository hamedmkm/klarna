import React from 'react'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
const Back = ({route}) => {
    const history = useHistory()
    const goPrevPage = () => {
        history.replace(route);
      };
    return (
        <Button onClick={goPrevPage} style={{ color: "#4c4c4c" }}>
        back
        <KeyboardReturnIcon />
      </Button>
    )
}
export default Back;