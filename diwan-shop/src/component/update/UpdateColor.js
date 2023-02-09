import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";

function UpdateColor() {
  const { colors, updateColorId } = useSelector((state) => state.colors);
  const selectedColor = colors.filter((user) => user._id === updateColorId);
  const { colorName, elementState } = selectedColor[0];
  const [value, setValue] = useState({
    colorName,
    elementState,
    _id: updateColorId,
  });

  const { UpdateItem } = useAppContext();

  return (
    <>
      <div>
        <form
          onSubmit={(e) => UpdateItem(e, value)}
          className="editForm"
          encType="multipart/form-data"
        >
          <div className="mb-3 text-start">
            <label>Color Name</label>
            <input
              type="text"
              value={value.colorName}
              className="form-control"
              onChange={(e) =>
                setValue({ ...value, colorName: e.target.value })
              }
            />
          </div>

          <div className="mb-3 text-start">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setValue({ ...value, img: e.target.value })}
            />
          </div>
          <div className="form-check form-switch">
            <label>State</label>
            <input
              className="form-check-input"
              type="checkbox"
              id="custom-switch"
              checked={value.elementState === true ? true : false}
              onChange={(e) =>
                setValue({ ...value, elementState: !value.elementState })
              }
            />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default UpdateColor;
