import React, { useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { auth,db } from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore"; 
import Admin from './Admin';





const Home = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products"), 
        (snapshot) => {

            setProducts(snapshot.docs.map((doc) => doc.data()))
        });

        return unsub;
    }, [])


    return (
        <div>

            {auth.currentUser.email === 'admin@admin.com' ? (

                <Admin />
            ) : (

                <>

                    <Navbar />

                    <div className='container-fluid'>
                            <h1 className='text-center'>Products</h1>
                            <div className='products-box'>
                                <Products products={products} />
                            </div>
                    </div>

                    <div className='container'>Please Wait........</div>

                

                    {/* {products.length > 0 && ( */}
                        
                     {/* )} */}

                    {/* {products.length < 1 && ( */}
                        
                    {/* // )} */}

                </>
            )}

        </div>
    )
}

export default Home
