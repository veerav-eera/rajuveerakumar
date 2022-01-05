import styled,{keyframes} from 'styled-components'

export const FormDiv = styled.div`
display:flex;
flex-direction: column;

`
export const Form = styled.form`
width:100%;
border-top: 2px solid #CBA135;
border-left: 2px solid #CBA135;
border-bottom: 2px solid #CBA135;
padding:80px 0 80px 80px;
`
export const Inputlable = styled.label`
color: white;
`
export const Forminput = styled.input`
width: 100%;
padding: 10px 0;
background: none;
border: none;
border-bottom: 1px solid #666;
color: #ddd;
font-size: 14px;
text-transform: uppercase;
outline: none;
transition: border-color .;

&:focus{
    border-bottom: 2px solid white;
}
`
export const SubmitButton = styled.button`
padding:10px 20px;
margin-top: 10px;
background-color: transparent;
border: none;
cursor: pointer;
overflow: hidden;
outline: 1px solid #CBA135;
color:#CBA135;
transition-property: color , font-size , background , outline , border-radius ;
transition-duration: 0.02s;
transition-timing-function: ease-in-out;
&:hover{
    color: #780000;
    font-size:15px;
    background:#F5EFED;
    outline:none;
    border-radius:5px;

}
&:disabled{
    color: #780000;
    font-size:15px;
    background:grey;
    outline:none;
    border-radius:5px;
}

`