import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Main(){
    return (
        <main className={styles.main}>
        <h1 className='display-4 fw-normal'>
          Pricing
        </h1>
        <div className='fs-5 text-muted'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.
        </div>

        
        <div className={styles.grid}>
            
            <div className={styles.card}> 
                <div className={styles.cardheader}>
                    <h2 style={{alignSelf: 'center'}}>Free</h2>
                </div>
                <div className={styles.cardbody}>
                    <h1 className='card-title pricing-card-title' style={{alignSelf: 'center'}}>$0</h1>
                    <h1 className='text-muted fw-light'> /mo </h1>
                </div>
                <div>
                    <ul className='list-unstyled mt-3 mb-4'>
                        <li>10 users included</li>
                        <li>2 GB of storage</li>
                        <li>Email support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                <div className={styles.btn}>
                <button type='button' className='w-100 btn btn-lg btn-outline-primary'>
                    Sign up for free
                </button>
                </div>
            </div>
           
            <div className={styles.card}> 
                <div className={styles.cardheader}>
                    <h2 style={{alignSelf: 'center'}}>Pro</h2>
                </div>
                <div className={styles.cardbody}>
                    <h1 className='card-title pricing-card-title' style={{alignSelf: 'center'}}>$15</h1>
                    <h1 className='text-muted fw-light'> /mo </h1>
                </div>
                <div>
                    <ul className='list-unstyled mt-3 mb-4'>
                        <li>20 users included</li>
                        <li>10 GB of storage</li>
                        <li>Priority Email support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                <div className={styles.btn}>
                <button type='button' className='w-100 btn btn-lg btn-primary'>
                    Get Started
                </button>
                </div>
            </div>

            <div className={styles.card} style={{borderColor: '#0070f3'}}> 
                <div className={styles.cardheader} style={{backgroundColor: '#0070f3'}}>
                    <h2 style={{alignSelf: 'center', color:"whitesmoke"}}>Enterprise</h2>
                </div>
                <div className={styles.cardbody}>
                    <h1 className='card-title pricing-card-title' style={{alignSelf: 'center'}}>$29</h1>
                    <h1 className='text-muted fw-light'> /mo </h1>
                </div>
                <div>
                    <ul className='list-unstyled mt-3 mb-4'>
                        <li>30 users included</li>
                        <li>15 GB of storage</li>
                        <li>Phone and Email support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                <div className={styles.btn}>
                <button type='button' className='w-100 btn btn-lg btn-primary'>
                    Sign up for free
                </button>
                </div>
            </div>  

        </div>

            <div className={styles.lowerbody}>
            <h2 style={{marginBottom: 20}}>Compare Plans</h2>

            <div className='table-responsive'>
            <table className = 'table text-center'>
                    <thead className=''>
                        <tr>
                            <th style={{width: '50vh'}}></th>
                            <th style={{width: '30vh'}}>Free</th>
                            <th style={{width: '30vh'}}>Pro</th>
                            <th style={{width: '30vh'}}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row' className='text-start'>Public</th>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start'>Private</th>
                            <td></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope='row' className='text-start'>Permissions</th>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start'>Sharing</th>
                            <td></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start'>Unlimited Members</th>
                            <td></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                        <tr>
                            <th scope='row' className='text-start'>Extra Security   </th>
                            <td></td>
                            <td></td>
                            <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg></td>
                        </tr>
                    </tbody>
            </table>
            </div>


            </div>
        
      </main>
    )
}