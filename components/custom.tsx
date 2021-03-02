import {
    useField, 
    FieldHookConfig}  from 'formik';
import {
    Input,
    Checkbox,
    Box,
    } from "@chakra-ui/react";

    


interface title {
    title:string,
}
export const CustomTitle:React.FC<title> = ({title}) => {
    return (
    <>    
        <Box color='#3182ce' fontSize="40px" id={title} mb={'20px'}>
            {title}
        </Box>
    </>
    )
}



type baseTextFieldProps = FieldHookConfig<string> & {
	label: string,
    type?: string,
    placeholder?: string,
};

export const CustomTextInput:React.FC<baseTextFieldProps> = (props) => {
	const [field, meta] = useField(props);
	const {type, placeholder} = props;

    return (
        <>
            
            <Input className='text-input' {...field} type={type} placeholder={placeholder}/>
            {meta.touched && meta.error?
            (<div className='error'>{meta.error}</div>) : null}
        </>
    )

}



export const CustomCheckBox:React.FC<baseTextFieldProps> = (props) => {
	const [field, meta] = useField(props);
	const {label} = props;

    return (
        <>
            <Checkbox defaultChecked={false} type='checkbox' {...field} className='checkbox'>
            {label}
            </Checkbox>
            {meta.touched && meta.error?
            (<div className='error'>{meta.error}</div>) : null}
        </>
    )

}

