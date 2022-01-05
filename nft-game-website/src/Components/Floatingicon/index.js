import React from 'react'
import { FloatingButton, Item } from "react-floating-button";
import CgAbstract from '../../Images/svg1.svg'

const Floatingbutton = () => {
    return (
        <>
            <FloatingButton>
                <Item
                    imgSrc={CgAbstract}
                    onClick={() => {
                        console.log("callback function here");
                    }}
                />
            </FloatingButton>
        </>
    )
}

export default Floatingbutton
