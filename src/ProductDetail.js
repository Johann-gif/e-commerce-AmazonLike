import React, { useState, useEffect } from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { db } from './firebase'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function ProductDetail() {
    let { id } = useParams();
    const [productDetail, setproductDetail] = useState('');
    const [loading, setLoading] = useState(false);

    function getProductDetail(id) {
        setLoading(true);
        console.log(db.collection('products'))
        db.collection('products').doc(id).get().then(querySnapshot => {
            console.log("id:", id)
            console.log("query:", querySnapshot)
            if (!querySnapshot.empty) {
                const item = querySnapshot.data()
                setproductDetail(item);
                console.log(item)
            }
            setLoading(false);
        });
    }

    useEffect(() => {
        getProductDetail(id);
    }, []);

    if (loading) {
        return <h2>loading...</h2>;
    }

    return (
        <div>
            <h1>Fiche Produit: {id}</h1>
            {/* <img src={productDetail.image} alt="" />

            <p>{productDetail.title}</p>
            
            <p className="price">{productDetail.price}€</p>
            <div className="rating">
                {
                    Array(productDetail.rating)
                        .fill()
                        .map((_) => (
                            <StarIcon />
                        ))

                }
                {
                    Array(5-productDetail.rating)
                        .fill()
                        .map((_) => (
                            <StarBorderIcon />
                        ))
                }
            </div> */}
        </div>

    )
}

export default ProductDetail;