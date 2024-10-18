import Link from 'next/link'
 
export default async function NotFound() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center dark:text-slate-50 text-slate-900 gap-8'>
        <div className='text-center'>
        <h2 className='font-bold'>Page Not Found </h2>
        <p>  Sorry, the page that you want to visit is not found!</p>
        </div>
        <Link href="/" className=' p-1 px-2 bg-slate-900  dark:bg-slate-50 text-slate-50 dark:text-slate-900 hover:brightness-125 transition-all duration-150  rounded-md'>Back to Home page</Link>
     
    </div>
  )
}