import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Footer(){
    return (
        <footer className = {styles.footer}>
        <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column', flex: 1, alignItems:'start'}}>
            <Image src = '/bootstrap_icon.png' width = {30} height = {30} />
            <div style={{fontStyle: 'italic'}}>Copyright © 2022</div>
        </div>  
        <div className={styles.footercol} >
            <div className='col-sm-12 col-md-6' style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
                <h5>Features</h5>
                <ul className='list-unstyled text-small'>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Cool Stuff</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Random Feature</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Stuff for developers</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>One last item</li></a></Link>
                </ul>
            </div>
            <div className='col-sm-12 col-md-6' style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
                <h5>Resources</h5>
                <ul className='list-unstyled text-small'>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Here is the</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Random Resource</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Resource Listing</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>One last Resource</li></a></Link>
                </ul>
            </div>
            <div className='col-sm-12 col-md-6' style={{display: 'flex', flexDirection:'column', alignItems:'start'}}>
                <h5>About</h5>
                <ul className='list-unstyled text-small'>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Team</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Location</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Privacy</li></a></Link>
                    <Link href='/'><a style={{textDecoration: 'none'}}><li>Terms</li></a></Link>
                </ul>
            </div>
        </div>
        </footer>
    )   
}