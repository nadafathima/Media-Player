import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className="container-fluid mb-5 d-flex align-items-center" style={{height:"80vh"}}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
          <h2>
          <i className="fa-solid fa-upload fa-beat"  style={{color: "#FFD43B",}} />
            Media Player 2024
            </h2>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta doloribus, iste itaque beatae vel obcaecati incidunt? Facilis eum optio perferendis, similique, odit nisi, cumque quaerat voluptatum distinctio officiis aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, rem? Suscipit vitae, est ratione, sequi consectetur magni ab nemo eligendi facere voluptatibus natus dolore aliquam, repudiandae eius iste aliquid esse.</p>
           <div className='d-grid'>
            <Link to={'/home'} className='btn btn-success'>Let's Go</Link>
            </div>
          </Col>
          <Col className='py-4'sm={12} md={6}>
            <img src="https://cdn.pixabay.com/photo/2020/11/22/04/10/youtube-5765608_960_720.png" className='img-fluid rounded' alt="introimg" />
          </Col>
        </Row>
      </div>
      <div className='container-fluid mt-5'>
        <h3 className="my-3 text-center">features</h3>
        <div className="p-4 d-flex justify-content-around">

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"200px"} src="https://cliply.co/wp-content/uploads/2019/07/371907120_YOUTUBE_ICON_400px.gif" />
      <Card.Body>
        <Card.Title>upload youtube Viedos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"200px"} src="https://cdn.dribbble.com/users/469998/screenshots/2325648/output_bsrh32.gif" />
      <Card.Body>
        <Card.Title>Add categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"200px"} src="https://cdn.dribbble.com/users/398490/screenshots/3169752/wishlist.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

        </div>
      </div>
      <div className="p-5">
        <Row>
          <Col sm={12} md={7}>
            <h1>Simple and Fast</h1>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cupiditate, voluptatem eaque dignissimos quisquam sed harum debitis ducimus ea perferendis aperiam alias ullam fugiat corporis possimus. Delectus dolorem soluta quia.</p>
          </Col>
          <Col sm={12} md={5}>
          <iframe width="400" height="315" src="https://www.youtube.com/embed/RVFAyFWO4go?si=zJrgeHkqXBRj5IfZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing
