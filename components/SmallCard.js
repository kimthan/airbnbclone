import React from "react";

function SmallCard(props) {
  console.log(props);

  return (
    <div className="h-[200px] flex transition transform duration-200 ease-out items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-200 hover:scale-105">
      {/* left */}
      <div className="">
        <img
          src={props.image}
          className="rounded-lg object-contain h-[100px] w-[100px]"
        />
      </div>

      {/* right */}
      <div className="">
        <h2>{props.title.slice(0, 10)}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
