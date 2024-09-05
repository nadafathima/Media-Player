import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteVideo,addHistory } from '../Services/allAPIs';

function VideoCard({video,response,cat}) {
    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
      const res=await deleteVideo(video.id)
      console.log(res)
      if (res.status==200) {
        toast.success("Video Deleted")
        response(res)
      }
      else{
        toast.error("Deletion failed")
      }
    }

    const dragHandler=(e)=>{
      console.log(e)
      console.log(video)
      e.dataTransfer.setData("video",JSON.stringify(video))
    }

    const handleClose = () => setShow(false);
    const handleShow =async () => {
      setShow(true)
      const dt=new Date()
      const data={videoId:video.videoId,title:video.title,url:video.videoUrl,datetime:dt}
      console.log(data);
      const result=await addHistory(data)
      console.log(result)
    };
  
  return (
    <>
    <Card style={cat?{width:'100%'}:{width: '18rem' }} onDragStart={(e)=>{dragHandler(e)}} draggable>
      <Card.Img onClick={handleShow} style={{cursor:"pointer"}} variant="top" src={video.imageUrl} />
      <Card.Body>
        <Card.Title>{video?.title}</Card.Title>
        {
          !cat &&
        <Button variant='btn' onClick={handleDelete} >
          <i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
        }
      </Card.Body>
    </Card>

         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard
