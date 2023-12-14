import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo } from '../components'
import {FormRow} from "../components"

const Register = () => {

    return <Wrapper>
        <form className="form">
            <Logo />
            <h4>Register</h4>
            <FormRow type='text' name='name' labelText='First Name' defaultValue='Sanvid'/>
            <FormRow type='text' name='lastName' labelText='Last Name' defaultValue='Indalkar'/>
            <FormRow type='text' name='location' defaultValue='India'/>
            <FormRow type='email' name='email' defaultValue='Raj@gmail.com'/>
            <FormRow type='text' name='passowrd'/>
            
            <button type="submit" className="btn btn-block">
                submit
            </button>
            <p>
                Already a member?
                <Link to='/login' className="member-btn">
                    Login
                </Link>
            </p>
        </form>
    </Wrapper>
}

export default Register