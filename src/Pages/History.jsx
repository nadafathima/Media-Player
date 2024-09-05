import React,{useEffect,useState} from 'react'
import { getHistory,deleteHistory } from '../Services/allAPIs'

function History() {

  const [history,setHistory]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async ()=>{
    const result=await getHistory()
    if(result.status==200){
      console.log(result.data);
      setHistory(result.data)
    }
    else{
      console.log(result);
    }
  }

  const delHistory=async(id)=>{
    const result=await deleteHistory(id)
    console.log(result);
    if (result.status==200){
      getData()
    }
  }

  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        {
          history.length>0?

          <table className="table table-bordered">
          <thead>
            <tr>
              <th>Video ID</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Date and Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              history.map(item=>(
                <tr>
                <td>{item.videoId}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.datetime}</td>
                <td>
                  <button className="btn" onClick={()=>delHistory(item.id)}>
                  <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
                  </button>
                </td>
              </tr>
  
            ))
            }
          </tbody>
        </table>

          :
          <h2 className='text-danger text-center'>No History Available!!</h2>
        }
      </div>
    </>
  )
}

export default History
