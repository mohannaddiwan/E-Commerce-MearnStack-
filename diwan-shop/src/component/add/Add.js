import "./Add.css";
import React from "react";
import "../update/UpdateCart.css";
import AddProductForm from "../add/AddProduct";
import AddCategoryForm from "../add/AddCategory";
import AddColorForm from "../add/AddColor";
import AddSizeForm from "../add/AddSize";
import Modal from "../modal/Modal";
function Add() {
  return (
    <>
      {/* <Modal> */}
      {window.location.pathname.includes("/dashboard/MangeProducts") && (
        <AddProductForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeCategories") && (
        <AddCategoryForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeColors") && (
        <AddColorForm />
      )}
      {window.location.pathname.includes("/dashboard/MangeSizes") && (
        <AddSizeForm />
      )}
      {/* </Modal> */}
    </>
  );
}
export default Add;
