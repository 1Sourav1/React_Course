import React, { useState } from 'react'
import Card from "./Card";

const Cards = ({ courses, catagory }) => {
    let allCourses = [];

    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = () => {
        if (catagory === "All") {
            Object.values(courses).forEach((courseDetails) => {
                courseDetails.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[catagory];
        }
    }
    
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map((course) => {
                    return (
                        <Card key={course.id} course={course} likedCourses={likedCourses}
                            setLikedCourses={setLikedCourses}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards