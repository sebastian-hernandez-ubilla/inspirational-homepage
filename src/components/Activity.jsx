export const Activity = ({index,idea}) => {
  return (
    <div
      key={index}
      className="border border-red-600 p-5 rounded-2xl bg-red-400/60 shadow-xl/30 hover:bg-blue-500/50"
    >
      <p>{idea}</p>
    </div>
  );
};
