import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Header(){
    return (
        <header className={styles.header}>
        <nav className='d-flex flex-column flex-md-row align-items-center'>
        <div style={{display: 'flex'}}>
        <Link href='https://getbootstrap.com/' passHref={true}><a><Image src = '/bootstrap_icon.png' width = {40} height = {40} /></a></Link>
            <h3 style={{marginLeft : 10}}>Pricing Example</h3>
        </div>
        <div style={{display: 'flex'}} className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
            <Link href='/'><a className='me-3 py-2 text-dark text-decoration-none'>Features</a></Link>
            <Link href='/'><a className='me-3 py-2 text-dark text-decoration-none'>Enterprise</a></Link>
            <Link href='/'><a className='me-3 py-2 text-dark text-decoration-none'>Support</a></Link>
            <Link href='/'><a className='me-3 py-2 text-dark text-decoration-none'>Pricing</a></Link>
        </div> 
        </nav>   
        </header>
    )
}