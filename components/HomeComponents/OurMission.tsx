import React from 'react'

const OurMission = () => {
  return (
    <div className="w-full min-h-screen backgroundImage">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-5">
          <div className="bg-white dark:bg-black dark:text-white text-black w-[60%] p-12 rounded-3xl ">
            <h5 className="text-xl font-bold">Our Mission</h5>
            <p>
              The most well-known dummy text is the Lorem Ipsum, which is said
              to have originated in the 16th century.
            </p>
          </div>
          <div className="bg-white dark:bg-black dark:text-white text-black w-[60%] p-12 rounded-3xl ">
            <h5 className="text-xl font-bold">Our Vision</h5>
            <p>
              The most well-known dummy text is the Lorem Ipsum, which is said
              to have originated in the 16th century.
            </p>
          </div>
          <div className="bg-white dark:bg-black dark:text-white text-black w-[60%] p-12 rounded-3xl ">
            <h5 className="text-xl font-bold">Who We Are ?</h5>
            <p>
              The most well-known dummy text is the Lorem Ipsum, which is said
              to have originated in the 16th century.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission
