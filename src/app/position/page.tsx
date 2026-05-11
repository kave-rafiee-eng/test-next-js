import React from "react";

const page = () => {
  return (
    <>
      {
        //positioning
      }
      <div className="relative w-1/2 h-30 bg-red-200">
        <p className="absolute bottom-1/2 left-1/2">Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute Child</p>
        </div>
        <div className="absolute top-0 right-0 bg-red-500">
          <p>Absolute Child2</p>
        </div>
        <div className="absolute bottom-0 left-0 bg-red-500">
          <p>Absolute Child3</p>
        </div>
        <div className="absolute top-0 left-0 bg-red-500">
          <p>Absolute Child4</p>
        </div>
      </div>

      {
        //inset
      }
      <div className="relative w-full h-30 bg-green-300">
        <div className="absolute h-12 inset-x-10 bg-green-700">child</div>
        <div className="absolute w-12 inset-y-0 bg-green-900">child</div>
      </div>

      {
        //display classes
      }
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        <span className="inline text-red-300 ">
          This is display inline and will wrap normally
        </span>
        sapiente ut rerum esse ullam provident, fugit
        <span className="inline-block text-red-300 ">
          This is display inline-block and will not extend beyond it's parent
        </span>
        eos quam
        <span className="block text-red-300 ">
          This is display block and will move to it's own line
        </span>
        reprehenderit est hic aut unde sequi, officia, ipsa amet doloribus
        ratione
        <span className="hidden text-red-300 ">
          This is display none and will not display at all
        </span>
        ad.
      </div>

      {
        //z-index
      }
      <div className="relative h-36">
        <div className="absolute left-10 w-24 h-24 bg-blue-200 z-40">1</div>
        <div className="absolute left-20 w-24 h-24 bg-blue-300">2</div>
        <div className="absolute left-40 w-24 h-24 bg-blue-400 z-10">3</div>
        <div className="absolute left-60 w-24 h-24 bg-blue-500 z-20">4</div>
        <div className="absolute left-80 w-24 h-24 bg-blue-600">5</div>
      </div>

      {
        //Float
      }
      <div className="w-1/2">
        <img className="h-48 w-48 float-left" src="/assets/img/img1.jpg" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          numquam voluptatem accusantium atque cupiditate nulla ratione saepe
          veniam, ex iure nisi mollitia sed rerum veritatis temporibus iusto!
          Molestiae, ratione doloribus?
        </p>
      </div>
    </>
  );
};

export default page;

// <!-- Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
//     -->

// <!-- Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
//     -->

// <!-- Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
//     -->

// <!-- Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
//     -->
