import React, { useEffect, useState } from 'react'
import favoff from "./../../images/fav-off.png"
import favon from "./../../images/fav-on.png"
import { useDispatch, useSelector } from 'react-redux'
import { notify } from '../useNotification'
import { addProductToWishList, removeProductToWishList } from '../../redux/actions/wishListAction'
const ProductCardHook= (item,favProd) => {
    const dispatch = useDispatch();
    const [loadingAdd, setLoadingAdd] = useState(true)
    const [loadingRemove, setLoadingRemove] = useState(true)
    const [favImg,setFavImg]=useState(favoff)
    let Fav = favProd.some(fitem => fitem === item?._id);
    const [isFav, setIsFav] = useState(Fav)

// عشان اول م تتحمل الصفحة مش راضيه تاخد القيمة بتبقي غير معرفة عشان كده بنستخدم useEffect
    useEffect(() => {
        setIsFav(favProd.some(fitem => fitem === item?._id))
    }, [favProd])

    useEffect(() => {
        if (isFav === true) {
            setFavImg(favon)
        }
        else {
            setFavImg(favoff)
        }

    }, [isFav])
    const handelFav=()=>{
        if (isFav) {
            removeToWishListData();
        } else {
            addToWishListData()
        }
    }
    const addToWishListData = async () => {
        setIsFav(true)
        setFavImg(favon)
        setLoadingAdd(true)
        await dispatch(addProductToWishList({
            productId: item?._id,
        }))
        setLoadingAdd(false)
    }

    const resAdd = useSelector(state => state.addToWishListReducer.addWishList)
    const resRemove = useSelector(state => state.addToWishListReducer.removeWishList)
    useEffect(() => {
        if (loadingAdd === false) {
            console.log(resAdd)
            if (resAdd && resAdd.status === 200) {
                notify("تمت اضافة المنتج للمفضلة بنجاح", "success")
            } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
            }
        }
    }, [loadingAdd])

    const removeToWishListData = async () => {
        setIsFav(false)
        setFavImg(favoff)
        setLoadingRemove(true)
        await dispatch(removeProductToWishList(item?._id))
        setLoadingRemove(false)

    }


    useEffect(() => {


        if (loadingRemove === false) {
            console.log(resRemove)
            if (resRemove && resRemove.status === "success") {
                notify("تمت حذف المنتج من المفضلة بنجاح", "warn")
            } else if (resAdd && resAdd.status === 401) {
                notify("انتا غير مسجل", "error")
            }

        }
    }, [loadingRemove])

    return [removeToWishListData, addToWishListData, handelFav, favImg]
}

export default ProductCardHook
