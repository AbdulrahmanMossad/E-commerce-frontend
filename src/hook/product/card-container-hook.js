import React, { useState, useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';


const CardContainerHook = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [favProdID, setFavProdID] = useState([])
    const [favProd, setFavProd] = useState([])
    const res = useSelector(state => state.addToWishListReducer.allWishList)
    // console.log("ssssssssssss")
    useEffect(() => {
        const get = async () => {
            setLoading(true)
            await dispatch(getProductWishList())
            setLoading(false)
        }

        get();
    }, [])


    useEffect(() => {

        if (loading === false) {
            if(res){
                setFavProd(res.data)
                if (res.data.length >= 1) {
                    setFavProdID(res.data.map(item => item._id))
                } else {
                    setFavProdID([])
                    // setFavProd([])
                }
            }

        }

    }, [loading])

    return [favProdID,favProd]

}

export default CardContainerHook