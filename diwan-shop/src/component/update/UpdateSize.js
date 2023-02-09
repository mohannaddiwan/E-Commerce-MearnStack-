// import Button from "react-bootstrap/Button";
// import { useState } from "react";
// import { useAppContext } from "../../context/appContext";
// import { useSelector } from "react-redux";

// function UpdateSize() {
//   const { sizes, updateSizeId } = useSelector((state) => state.sizes);

//   const selectedSize = sizes.filter((user) => user._id === updateSizeId);
//   const { sizeName, elementState } = selectedSize[0];
//   const [value, setValue] = useState({
//     sizeName,
//     elementState,
//     _id: updateSizeId,
//   });

//   const { UpdateItem } = useAppContext();

//   return (
//     <>
//       <div>
//         <form
//           onSubmit={(e) => UpdateItem(e, value)}
//           className="editForm"
//           encType="multipart/form-data"
//         >
//           <div className="mb-3 text-start">
//             <label>Size Name</label>
//             <input
//               type="text"
//               value={value.sizeName}
//               className="form-control"
//               onChange={(e) => setValue({ ...value, sizeName: e.target.value })}
//             />
//           </div>

//           <div className="mb-3 text-start">
//             <label>Image</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => setValue({ ...value, img: e.target.value })}
//             />
//           </div>
//           <div className="form-check form-switch">
//             <label>State</label>
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="custom-switch"
//               checked={value.elementState === true ? true : false}
//               onChange={(e) =>
//                 setValue({ ...value, elementState: !value.elementState })
//               }
//             />
//           </div>
//           <Button type="submit" variant="primary">
//             Submit
//           </Button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default UpdateSize;
