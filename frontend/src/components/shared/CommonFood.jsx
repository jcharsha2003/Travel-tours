import React from 'react'
import './common-food.css'
import {Container , Row , Col} from 'reactstrap'

const CommonFood = ({title}) => {
  return (
    <section className='common_food'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonFood;