import { auth , signOut , signIn } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = async() => {
  const session = await auth();
  return (

    <header className=' px-5 py-3 shadow-sm bg-white font-work-sans'>
        <nav className=' flex justify-between items-center'>
            <Link href="/" >
            <Image src="/logo.png" alt='logo' width={120} height={40} />
            </Link>

            <div className=' flex items-center gap-5 text-black font-work-sans'>
                { session && session?.user? (
                 <>
                    <Link href="/startup/create">
                      <span className=' cursor-pointer font-work-sans'>Create</span>
                    </Link>

                    <button onClick={async()=>{ "use server"; await signOut()}}>
                      <span className=' cursor-pointer font-work-sans'>Logout</span>
                    </button>

                    <Link href={`/user/${session?.id}`}>
                      <span className=' cursor-pointer font-work-sans'>{session?.user?.name}</span>
                    </Link>
                 </> 
                ) : (
                    <button onClick={async()=>{ "use server"; await signIn('github')}}>
                      <span className=' cursor-pointer font-work-sans'>Login</span>
                    </button>
                )
              }
            </div>
        </nav>
    </header>
  )
}

export default Navbar