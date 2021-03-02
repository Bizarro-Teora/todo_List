import {Formik, 
    Form}  from 'formik';
import {Button, 
    Container, 
    } from "@chakra-ui/react";
import * as Yup from 'yup';
import '../style/field.css';
import {Page} from  "../dataStructure/page";
import {CustomTextInput, CustomTitle} from '../components/custom';




interface signIn {
changePage:(page: Page) => void,
}


const  SignIn: React.FC<signIn> = ({changePage}) => {
return (
    <>
    <Formik 
    initialValues={{
        email:'',
        password:'',
    }}
    validationSchema={Yup.object({
        email: Yup.string()
            .email('Invalid email address.')
            .required('Please Enter a valid email address.'),
        password: Yup.string()
            .required('Please Enter your password.'),

    })}
    onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(()=> {
            
            //localStorage.setItem('email', values.email);
            //changePage(Page.DashBoard);

            console.log(values);
            console.log(typeof values);
            resetForm();
            setSubmitting(false);
        }, 1500);
    }}
    >

        {props => (

            <Form>
                <Container centerContent={true}>
                <CustomTitle title='Sign In'/>                  
                <CustomTextInput label='E-mail' name='email' type='text' placeholder='example@email.com'/>                 
                <CustomTextInput label='Password' name='password' type='password' placeholder='********'/>
                <Button type='submit' colorScheme='blue' className='button'> {props.isSubmitting? 'Loading...':'Sign In'}</Button>
                </Container>
            </Form>
        )}


    </Formik>            
    </>
)
}

export default SignIn
