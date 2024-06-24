import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
      <div className='flex text-center  bg-white rounded-3xl w-[300px] py-12 px-6'>
    <div className="center">
        <div className="flex justify-center">

        <div className="img bg-[#FFDAA3] rounded-full w-fit h-fit">
            <img src={props.src} width={'125px'} height={'125px'} alt="" />
        </div>
        </div>
        <div className="boldtext text-xl font-bold mt-5">
           {props.head}
        </div>
        <div className="text-sm my-5">
       {props.text}
        </div>

    </div>
      </div>
    );
};
export default Card;
