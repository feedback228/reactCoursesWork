import googleIcon from '../../assets/icon/Google.svg';
import LinkedInIcon from '../../assets/icon/LinkedIn.svg';
import { BtnRegLog } from './BtnRegLog';
import BtnInGoogle from './BtnInGoogle';
import { useNavigate } from 'react-router-dom';

export const RegLog = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
      navigate('/auth/register/step2');
    };
  
    const handleSignIn = () => {
      navigate('/auth/signin');
    };

    return (
        <div className="formRegLog">
            <h2 className="text-5xl font-bold leading-[3.75rem]	">Upgrade your brain...</h2>
            <div className="flex flex-col gap-2 max-w-[25.5rem] w-full">
                <BtnRegLog  handleNext={handleSignIn} title={'Sign In'} className='bg-darkBlue transition duration-300 hover:bg-hoverBlue ' />
                <BtnRegLog handleNext={handleRegister} title={'Sign Up'} />
            </div>
            <div className="flex flex-col gap-2 max-w-[25.5rem] w-full">
                <BtnInGoogle icon={googleIcon} text='Continue with Google' />
                <BtnInGoogle icon={LinkedInIcon} text='Login via Linkedin' classname='!bg-[#0A66C2] !font-bold !text-white' />
            </div>
        </div>
    );
};