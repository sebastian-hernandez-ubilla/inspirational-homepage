import { useDispatch, useSelector } from "react-redux";
import { completeThought, selectThoughts } from "./thoughtsSlice";
import { removeThought } from "./thoughtsSlice";
import confetti from "canvas-confetti";

export const ThoughtsCards = () => {
  const lanzarConfeti = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    confetti({
      particleCount: 100,
      spread: 100,
      decay: 0.87,
      origin: { x: x, y: y },
    });
  };

  const thoughts = useSelector(selectThoughts);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeThought(id));
  };

  const handleDone = (thought, event) => {
    console.log(event);
    if (!thought.isDone) {
      lanzarConfeti(event);
    }
    dispatch(completeThought(thought));
  };

  return thoughts.map((thought, index) => {
    return (
      <div
        key={index}
        className={`relative group border  p-5 rounded-xl ${
          thought.isDone
            ? "border-gray-300 bg-gray-300/40 text-gray-600 opacity-60"
            : "border-blue-500/50 bg-blue-400/60 shadow-xl/30"
        } `}
      >
        <div className="absolute -top-2 -right-1 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-red-500/50 hover:bg-red-400/50 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
            onClick={() => handleRemove(thought.id)}
          >
            Remove
          </button>
          <button
            className="bg-green-500/50 hover:bg-green-400/50 text-white text-xs px-2 py-1 rounded-full cursor-pointer"
            onClick={(e) => handleDone(thought, e)}
          >
            {thought.isDone ? "Redo" : "Done"}
          </button>
        </div>

        <p>{thought.description}</p>
      </div>
    );
  });
};
