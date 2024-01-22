import React from 'react'
// const Card = (props) => { can also use it like this
const Card = ({username,btnText="click me"}) => {//btn text default value is click me if it is not given as prop then it will take this value by default//
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="AirMax Pro"
      className="z-0 h-full w-full rounded-md object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{username}</h1>
      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {/* {props.btnText || "click me"} if btn text not given then bydefault it renders "click me".   but it is not good for readability and no issue with performance*/}
        {btnText}

      </button>
    </div>
  </div>
  
  )
}

export default Card