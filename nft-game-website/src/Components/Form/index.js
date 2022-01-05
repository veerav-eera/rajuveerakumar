import React, { useState } from 'react'
import {
    Section,
    SectionContainer,
    Column1,
    Imagediv,
    Image

} from '../Section/sectionelement'
import {
    FormDiv,
    Inputlable,
    Forminput,
    SubmitButton,
    Form
} from './formcompoments'

import Postform from '../HTTP request/postform'
import contactme from '../../Images/Contactme.png'




const FormSection = ({id}) => {

    return (
        <Section id={id} lightbg={false}>
            <SectionContainer>
                <Column1>
                    <FormDiv>
                        <Postform />
                    </FormDiv>
                </Column1>
                <Column1>
                    <Imagediv>
                        <Image src={contactme}>
                        </Image>
                    </Imagediv>
                </Column1>
            </SectionContainer>
        </Section>
    )
}

export default FormSection
