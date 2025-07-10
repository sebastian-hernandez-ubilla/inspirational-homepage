export const Activity = ({ idea }) => {
  return (
    <div className="relative group border border-red-500/50 p-5 rounded-xl bg-red-400/60 shadow-xl/30">
      <div className="absolute -top-2 -right-1 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-red-500/50 hover:bg-red-400/50 text-white text-xs px-2 py-1 rounded-full">
          Remove
        </button>
        <button className="bg-green-500/50 hover:bg-green-400/50 text-white text-xs px-2 py-1 rounded-full">
          Done
        </button>
      </div>

      <p>{idea.description}</p>
    </div>
  );
};
