import React from 'react'
import { Checkbox } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

const CheckBox = withStyles({
    root: {
        color: blue[400],
        '&$checked': {
            color: blue[600],
        },
    },
    error: {
        color: red[400],
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />)

export default CheckBox