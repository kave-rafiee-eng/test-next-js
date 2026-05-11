import { url } from "inspector";
import React from "react";

const page = () => {
  return (
    <>
      <div
        className="h-50 w-1/2 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('assets/img1.jpg')" }}
      ></div>

      {
        //Gradiant
      }
      <div className="bg-gradient-to-r from-red-500 to-blue-500">ss</div>

      {
        //shadows
      }

      <div className="w-96 mt-6 ml-4 p-3 shadow-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-2xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>

      {
        //shadow Color
      }
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl shadow-blue-500/50">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-xl shadow-red-500/100">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus
        deleniti iusto delectus alias natus quam dolor explicabo quas eius!
      </div>
    </>
  );
};

export default page;

// <!-- Background Size
//   bg-auto	    background-size: auto;
//   bg-cover	  background-size: cover;
//   bg-contain	background-size: contain;
// -->

// <!-- Background Repeat
//   bg-repeat	      background-repeat: repeat;
//   bg-no-repeat	  background-repeat: no-repeat;
//   bg-repeat-x	    background-repeat: repeat-x;
//   bg-repeat-y	    background-repeat: repeat-y;
//   bg-repeat-round	background-repeat: round;
//   bg-repeat-space	background-repeat: space;
// -->

// <!-- Background Position
//   bg-bottom	      background-position: bottom;
//   bg-center	      background-position: center;
//   bg-left	        background-position: left;
//   bg-left-bottom	background-position: left bottom;
//   bg-left-top	    background-position: left top;
//   bg-right	      background-position: right;
//   bg-right-bottom	background-position: right bottom;
//   bg-right-top	  background-position: right top;
//   bg-top	        background-position: top;
// -->

// <!-- Background Attachment
//   bg-fixed	  background-attachment: fixed;
//   bg-local	  background-attachment: local;
//   bg-scroll	  background-attachment: scroll;
// -->

// <!--
//   Shadows
//   shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//   shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//   shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//   shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//   shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//   shadow-none	  box-shadow: 0 0 #0000;
//  -->
