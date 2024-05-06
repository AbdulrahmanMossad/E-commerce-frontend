import React from 'react'
import { Row } from 'react-bootstrap'
import Pagination from '../Utility/Pagination'
import UserGetAllOrderHook from '../../hook/user/user-get-all-order-hook'
import AdminAllOrdersItem from './AdminAllOrdersItem'
const AdminAllOrders = () => {
    const [userName, results, paginate, orderData, onPress] = UserGetAllOrderHook()

    return (
        <div className="p-2">
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start p-2'>

                {
                    orderData.length >= 1 ? (orderData.map((orderItem, index) => {
                        return <AdminAllOrdersItem key={index} orderItem={orderItem} />
                    })) : <h6>لا يوجد طلبات حتى </h6>
                }

                {
                    paginate.numberOfPages >= 2 ? (<Pagination onPress={onPress} pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} />) : null
                }
            </Row>
        </div>
    )
}

export default AdminAllOrders