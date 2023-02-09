// import Button from "react-bootstrap/Button";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useAppContext } from "../../context/appContext";

// function UpdateCat() {
//   const { categories, updateCatId } = useSelector((state) => state.categories);
//   const selectedCategory = categories.filter(
//     (user) => user._id === updateCatId
//   );
//   const { categoryName, elementState, image } = selectedCategory[0];
//   const [value, setValue] = useState({
//     categoryName,
//     image,
//     elementState,
//     _id: updateCatId,
//   });

//   const handleImage = (e) => {
//     const image = e.target.files[0].name;

//     setValue({ ...value, image: image });
//   };
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
//             <label>Category Name</label>
//             <input
//               type="text"
//               value={value.categoryName}
//               className="form-control"
//               onChange={(e) =>
//                 setValue({ ...value, categoryName: e.target.value })
//               }
//             />
//           </div>

//           <div className="mb-3 text-start">
//             <label>Image</label>
//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => handleImage(e)}
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

// export default UpdateCat;
