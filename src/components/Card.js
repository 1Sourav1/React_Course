import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import "./Card.css"

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id])
      }
      else {
        setLikedCourses((prev) => [...prev, course.id])
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div className='w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='ralative'>
        <img src={course.image.url} alt="img" />
        <div className='btn'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id)
                ? (<FcLike fontSize="1.55rem" />)
                : (<FcLikePlaceholder fontSize="1.55rem" />)
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-left leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
          {
            course.description.substr(0, 100) + `...`
          }
        </p>
      </div>
    </div>
  )
}

export default Card;