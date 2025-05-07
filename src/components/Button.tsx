// import { useEffect, useState } from "react"

// const Button = () => {
//     const [count, setCount] = useState(0)
//     const handleclick = () => {
//       setCount(count + 2);
//     };
//     useEffect(() => {
//         // if(count>10)
//         console.log("handleclick function called")
//     },[handleclick])
    
//     const click = () => {setCount(count - 2);};
//   return (
//     <div className="flex bg-amber-600 flex-col px-50 py-6 gap-3 items-center justify-center">
//       <button
//         className="bg-amber-100 p-2 w-1/4 rounded-2xl "
//         onClick={handleclick}>
//         Increment by2
//       </button>
//       <button
//         className="bg-amber-50 p-2 w-1/4 rounded-2xl"
//         onClick={click}>
//         Decrement by2
//       </button>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// export default Button