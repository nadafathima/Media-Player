import React,{useEffect,useState} from 'react'
import { getCategories,deleteCategory } from '../Services/allAPIs'
import { updateCategory } from '../Services/allAPIs'
import VideoCard from './VideoCard'
import { toast } from 'react-toastify'

function Categorylist(response) {

    const [categoryList,setCategoryList]=useState([])

    useEffect(()=>{
        getData()
    },[response])

    const getData=async()=>{
        const result=await getCategories()
        console.log(result)
        if (result.status==200) {
            setCategoryList(result.data)
        }
    }

    const deleteCat=async(id)=>{
        const result=await deleteCategory(id)
        console.log(result)
        if(result.status==200){
            getData()
        }
    }

    const dropHandler = async (e, category) => {
        e.preventDefault();
        console.log("Dropped");
    
        if (!category || !category.videos) {
            toast.error("Category is undefined or doesn't have a videos property!");
            return;
        }
    
        const vid = JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid);
        const result = await updateCategory(category.id, category);
        console.log(result);
        if (result.status === 200) {
            toast.success(`${vid.title} video added to ${category.title}`);
            getData();
        } else {
            toast.error("Video adding failed!!");
        }
    };
    
    const dragOverHandler=(e)=>{
        console.log("dragging over")
        e.preventDefault()
    }


  return (
    <>
      <div className="container-fluid border border-3 border-light p-2 mt-3">
    
        {
            categoryList.length>0?
            <div>
                {
                    categoryList.map(item => (
                        <div className='border m-1'>
                        <div className="m-2 p-3 mb-3 d-flex justify-content-between" onDragOver={dragOverHandler} onDrop={(e) => dropHandler(e, item)}>
                            <h3>{item.title}</h3>
                            <button className='btn' onClick={()=>{deleteCat(item.id)}}>
                            <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
                            </button>
                        </div>
                        <div className='border border-light'>
                            {
                            item?.videos?.length>0 &&
                            <>
                                {item?.videos?.map(vid=>(
                                    <VideoCard video={vid} cat={true}/>
                                ))}
                            </>
                        }
                        </div>
                        </div>

                    ))
                }
            </div>

            :

            <h5>No Categories</h5>
        }
      </div>
    </>
  )
}

export default Categorylist
