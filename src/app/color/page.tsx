export default function Home() {
  return (
    <>
      {
        //text color
      }
      <p className="text-red-500">Tailwind is awesome</p>
      <p className="text-green-100">Tailwind is awesome</p>
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-white">Tailwind is awesome</p>
      <p className="text-zink-500">Tailwind is awesome</p>
      <p className="text-slate-800">Tailwind is awesome</p>
      <p className="text-emerald-800">Tailwind is awesome</p>

      {
        //background
      }
      <p className="bg-blue-300">TailWind BG</p>
      <p className="bg-zinc-500">TailWind BG</p>
      <p className="bg-slate-300">TailWind BG</p>
      <p className="bg-emerald-300">TailWind BG</p>

      {
        //underLine
      }
      <p className="underline decoration-red-500"> underline</p>

      {
        //border color
      }
      <input type="text" className="border border-red-500"></input>

      {
        //Divide Color
      }
      <div className="divide-y divide-blue-500">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </div>

      {
        //Outline color
      }
      <button className="outline outline-red-800">outline</button>

      {
        //shadow color
        //opacity default is set to 100 but you can st it "/90"
      }
      <button className="shadow-lg shadow-red-900/90 bg-red-300">
        shadow color
      </button>

      {
        //accent Color for
        /*
        checkbox
        radio button
        range slider
        progress bar
        */
      }
      <input type="checkbox" checked className="accent-red-500"></input>

      {
        //Arbitary Color
      }
      <div className="bg-[#427fab]">Arbitary Color Hex</div>
      <div className="bg-[rgb(89,90,76)]">Arbitary Color RGB</div>
      <div className="bg-[steelblue]">Arbitary Color nameColor</div>
    </>
  );
}
