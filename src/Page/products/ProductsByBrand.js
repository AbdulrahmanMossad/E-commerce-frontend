import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ViewAllProductsBarndHook from '../../hook/product/view-all-products-barnd-hook';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import Pagination from '../../Components/Utility/Pagination';

const ProductsByBrand = () => {

    const { id } = useParams()

    const [items, pagination, onPress] = ViewAllProductsBarndHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0
    console.log(items)
    return (
        <div style={{ minHeight: '670px' }}>

            <Container>
                <Row className='d-flex flex-row'>

                    <Col sm="12" >
                        <CardProductsContainer data={items} title="" btntitle="" />
                    </Col>
                </Row>

                <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
        </div>
    )
}

export default ProductsByBrand