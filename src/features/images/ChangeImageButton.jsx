import { useDispatch, useSelector } from "react-redux";
import { decreaseCurrentId, increaseCurrentId, selectCurrentId, selectImage } from "./imagesSlice";

export const ChangeImageButton = ({ icon }) => {
  const id = useSelector(selectCurrentId);
  const dispatch = useDispatch();

  const handleClick = (icon) => {
    if (icon === ">") {
      dispatch(increaseCurrentId(id + 1));
    } else {
      dispatch(decreaseCurrentId(id - 1));
    }
  };

  return (
    <button
      className="text-6xl font-extralight cursor-pointer text-zinc-400 hover:text-white"
      onClick={() => handleClick(icon)}
    >
      {icon}
    </button>
  );
};
