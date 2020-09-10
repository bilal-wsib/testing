/*
 * Created by: :component
 * Date: 2020-09-10 12:00:32
 */

import React, { useState } from 'react'
import '../../styles/buttons.css'

export const Buttons = (props) => {
    const [text] = useState(props.text)
    return <div 
        className = 'button-box'
        style = {{
            color: props.bColor,
            fontSize: props.bFontSize,
            font: props.bFont,
            borderWidth: props.bBorderWidth
        }}>
        {text}
    </div>
}
