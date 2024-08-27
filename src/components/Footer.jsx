import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
        <Row>
          <Col sm={12} md={4}> 
            <h3>MediaPlayer 2024</h3>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta doloribus, iste itaque beatae vel obcaecati incidunt? Facilis eum optio perferendis, similique, odit nisi, cumque quaerat voluptatum distinctio officiis aliquid?</p>
          </Col>
          <Col sm={12} md={4} >
          <div className='d-flex flex-column'>
            <h3>Links</h3>
            <Link to={'/'}>Landing</Link>
            <Link to={'/home'}>Home</Link>
            <Link to={'/his'}>Watch History</Link>
          </div>
          </Col>
          <Col sm={12} md={4}>
          <h3>Feedback</h3> 
          <textarea className="form-control"></textarea>
          <button className="btn btn-info mt-4">Send</button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
