import React, { useEffect, useState } from "react";
import { fetchCourseDetails, getFullDetailsOfCourse } from "../../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";

export const Detailed = ({ course, setDetails }) => {
    const [course2, setCourse2] = useState();
    const { token } = useSelector((state) => state.auth);

    const handleSelect = () => {
        setDetails(false);
    };

    const getCourseDetail = async () => {
        const result = await getFullDetailsOfCourse(course._id, token);
        setCourse2(result);
        console.log("Course Details fetched:", result);
    };

    useEffect(() => {
        getCourseDetail();
    }, []);

    return (
        <>
            {course2 ? (
                <>
                    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-scroll bg-white bg-opacity-10 backdrop-blur-sm">
                        <div className="text-white my-10 flex flex-col gap-5 items-center justify-center w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
                            <h1 className="text-yellow-100 text-center text-3xl">COURSE</h1>
                            <img
                                src={course2.courseDetails.thumbnail}
                                alt="course"
                                className="w-[150px] h-[150px] object-cover rounded-xl"
                            />
                            <p>
                                <b className="text-yellow-200">NAME-</b> {course2.courseDetails.courseName}
                            </p>
                            <p>
                                <b className="text-yellow-200">Description-</b>{course2.courseDetails.courseDescription}
                            </p>
                            <p>
                                <b className="text-yellow-200">Price-</b>${course2.courseDetails.price}
                            </p>
                            <p>
                                <b className="text-yellow-200">What You Will Learn-</b>{course2.courseDetails.whatYouWillLearn}
                            </p>
                            <p>
                                <b className="text-yellow-200">Instructions-</b>
                                {course2.courseDetails.instructions}
                            </p>
                            <p>
                                <b className="text-yellow-200">Duration-</b>{course2.totalDuration}
                            </p>
                            <h2>
                                <b className="text-yellow-200">Course Content</b>
                            </h2>
                            {/* Updated Course Content Section */}
                            <div className="flex flex-col items-center justify-center">
                                {course2.courseDetails.courseContent.length > 0 ? (
                                    course2.courseDetails.courseContent.map((content, key) => (
                                        <div key={key} className="mb-4 w-full text-left p-4 bg-richblack-700 rounded-lg">
                                            <h3 className="text-lg font-bold text-yellow-300">
                                                Section: {content.sectionName}
                                            </h3>
                                            {content.subSection.length > 0 ? (
                                                content.subSection.map((sub, subKey) => (
                                                    <div key={subKey} className="mt-2 ml-4 text-sm text-yellow-100">
                                                        <p>
                                                            <b>Title:</b> {sub.title}
                                                        </p>
                                                        <p>
                                                            <b>Description:</b> {sub.description}
                                                        </p>
                                                        <p>
                                                            <b>Duration:</b> {sub.timeDuration} minutes
                                                        </p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="ml-4 text-sm text-yellow-500">No subsections available.</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-yellow-500">No Content</p>
                                )}
                            </div>
                            <button
                                className="bg-yellow-100 text-black p-2 rounded-lg"
                                onClick={() => {
                                    handleSelect();
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
