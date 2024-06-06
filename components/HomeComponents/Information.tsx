import React from 'react'
import Heading from '../ReusableComp/Heading'
import SubHeading from '../ReusableComp/SubHeading';

const Information = () => {
  return (
    <div className='w-full min-h-screen flex flex-col gap-10 justify-center items-center`'>
      <div>
      <Heading heading={"Explore By Categories"} className={'heading1'} />
      <SubHeading sub={"Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation."}  />
      </div>
      <div>

      </div>
    </div>
  );
}

export default Information
