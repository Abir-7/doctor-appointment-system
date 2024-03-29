'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './login.module.css';
import Link from 'next/link';
import img1 from '../../asset/AuthPage/5500661.jpg'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const LoginPage: React.FC = () => {

    const router=useRouter()
 const [err,setErr]=useState<any>()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr('')
    console.log('Email:', email);
    console.log('Password:', password);

  try {
    const res = await signIn('credentials',{email,password,redirect:false})
   console.log(res,'res')

   if(!res?.ok){
    console.log(res?.error)
    setErr(res?.error!)
    }
    if(res?.ok){
        router.push('/')
    }


  } catch (error) {
    console.log(error)
  }
  };

  return (
    <div className='mx-auto p-1 grid container md:grid-cols-2 place-items-center h-screen md:gap-10'>
      <div className='max-w-[550px] order-last md:order-first place-items-center'>
        <Image alt='' src={img1} priority></Image>
      </div>
      <div className='w-full place-items-center '>
        <h1 className='text-center text-2xl font-semibold text-blue-500'>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.input}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-lg text-blue-500 font-medium'>
              Email:
            </label>
            <input
              placeholder='Your Email'
              type='email'
              className='border p-2 border-blue-300  rounded-md focus:outline-blue-300'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className='flex flex-col gap-1 mt-1'>
            <label htmlFor='password' className='text-blue-500 text-lg font-medium'>
              Password:
            </label>
            <input
              type='password'
              placeholder='Your Password'
              className='border border-blue-300 p-2 rounded-md focus:outline-blue-300'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <p className='text-center text-red-500 mt-3 text-sm'>
          {err}
          </p>
          <p className='text-center mt-3 text-sm'>
            Don`&apos;`t have an account??{' '}
            <Link href={'/signup'} className='text-blue-500 hover:underline underline-offset-2'>
              Click here
            </Link>
          </p>
          <div className='w-full flex justify-center mt-3'>
            <input
              className='bg-blue-500 text-white  w-[250px] p-2 rounded-md  hover:bg-blue-600 duration-500   '
              type='submit'
              value={'Login'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
