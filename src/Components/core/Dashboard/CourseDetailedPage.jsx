import React, { useState, useEffect } from "react";

const CourseDetailPage = ({ course, setDetails }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (course) {
      const initialProgress = course.progressPercentage || 0;
      setProgress(initialProgress);
    }
  }, [course]);

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
    updateProgress();
  };

  const updateProgress = () => {
    const totalSubsections = course.courseContent.reduce(
      (acc, section) => acc + section.subSection.length,
      0
    );
    const newProgress = Math.min(progress + 100 / totalSubsections, 100);
    setProgress(newProgress);
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center bg-richblack-900 text-white overflow-scroll">
      <div className="w-11/12 max-w-[800px] rounded-lg border border-richblack-700 bg-richblack-800 p-6 shadow-lg">
        <h1 className="text-yellow-100 text-center text-3xl mb-4">{course.courseName}</h1>
        <img
          src={course.thumbnail}
          alt="Course Thumbnail"
          className="mx-auto w-[200px] h-[200px] object-cover rounded-lg mb-6"
        />
        <p className="mb-2">
          <b className="text-yellow-200">Description:</b> {course.courseDescription}
        </p>
        {/* <p className="mb-2">
          <b className="text-yellow-200">Price:</b> ${course.price}
        </p>
        <p className="mb-2">
          <b className="text-yellow-200">What You Will Learn:</b> {course.whatYouWillLearn}
        </p> */}
        <p className="mb-2">
          <b className="text-yellow-200">Duration:</b> {course.totalDuration}
        </p>
        <h2 className="text-yellow-300 text-xl mt-6 mb-4">Course Content</h2>
        <div className="space-y-4">
          {course.courseContent.length > 0 ? (
            course.courseContent.map((section, key) => (
              <div key={key} className="p-4 rounded-lg bg-richblack-700">
                <h3 className="text-yellow-200 font-semibold mb-2">
                  Section: {section.sectionName}
                </h3>
                {section.subSection.length > 0 ? (
                  section.subSection.map((sub, subKey) => (
                    <div key={subKey} className="ml-4 text-sm text-yellow-100">
                      <p>
                        <b>Title:</b> {sub.title}
                      </p>
                      <p>
                        <b>Description:</b> {sub.description}
                      </p>
                      <p>
                        <b>Duration:</b> {sub.timeDuration} minutes
                      </p>
                      <button
                        className="bg-yellow-100 text-richblack-800 mt-2 px-4 py-1 rounded-md"
                        onClick={() => handleVideoClick(sub.videoUrl)}
                      >
                        Play Video
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-yellow-500 ml-4">No subsections available.</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-yellow-500">No Content</p>
          )}
        </div>
        {currentVideo && (
          <div className="mt-6">
            <h3 className="text-yellow-300 text-lg mb-2">Now Playing</h3>
            <video
              src={currentVideo}
              controls
              className="w-full h-[300px] rounded-lg bg-black"
            />
          </div>
        )}
        <div className="mt-6">
          <div className="bg-richblack-700 w-full h-4 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-yellow-100 text-center mt-2">{progress}% Completed</p>
        </div>
        <button
          className="mt-6 w-full bg-yellow-100 text-richblack-800 py-2 rounded-lg"
          onClick={() => setDetails(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CourseDetailPage;
