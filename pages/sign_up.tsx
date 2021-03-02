import {Formik, 
    Form,
    }  from 'formik';
import {Button, 
    Container, 
    } from "@chakra-ui/react";
import * as Yup from 'yup';
import '../style/field.css';
import {Page} from  "../dataStructure/page";
import {CustomCheckBox, CustomTextInput, CustomTitle} from '../components/custom';




interface signUp {
changePage:(page: Page) => void,
}


const  SignUp: React.FC<signUp> = ({changePage}) => {
return (
    <>
    <Formik 
    initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfirm:'',
        acceptedTerms: false,
    }}
    validationSchema={Yup.object({
        firstName: Yup.string()
            .min(3, 'Must be at least 3 characters long.')
            .max(15, 'Must be 15 characters or less.')
            .required('Required'),
        lastName: Yup.string()
            .min(3, 'Must be at least 3 characters long.')
            .max(15, 'Must be 15 characters or less.')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email address.')
            .required('Please Enter a valid email address.'),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              )           
            .required('Please Enter your password.'),
        passwordConfirm: Yup.string()
            .when('password', (password:boolean, field: any) =>
            password ? field.required('Please confirm your password.').oneOf([Yup.ref('password')]) : field
           ),
        acceptedTerms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and conditions.')
            .required('Required')
        

    })}
    onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(()=> {
            const newUser = {
                fName: values.firstName,
                lName: values.lastName,
                pssw: values.password,
                lists: {},
                list: '',
            }
            localStorage.setItem(values.email, JSON.stringify(newUser));
            localStorage.setItem('email', values.email);
            changePage(Page.DashBoard);

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
                <CustomTitle title='Sign Up'/>
                <CustomTextInput label='First Name' name='firstName' type='text' placeholder='First Name'/>                    
                <CustomTextInput label='Last Name' name='lastName' type='text' placeholder='Last Name'/>                    
                <CustomTextInput label='E-mail' name='email' type='text' placeholder='example@email.com'/>                 
                <CustomTextInput label='Password' name='password' type='password' placeholder='password'/>
                <CustomTextInput label='passwordConfirm' name='passwordConfirm' type='password' placeholder='password confirmation'/>
                <CustomCheckBox name='acceptedTerms' label='I accept the terms and conditions.'/>
                <Button type='submit' colorScheme='blue' className='button'> {props.isSubmitting? 'Loading...':'Create Account'}</Button>
                </Container>
            </Form>
        )}


    </Formik>            
    </>
)
}

export default SignUp
