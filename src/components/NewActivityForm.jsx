export const NewActivityForm = ({handleSubmit, handleChange, formIdea}) => {

    const onHandleSubmit = (event) =>{
        handleSubmit(event);
    }

    const onHandleChange = (event) => {
        handleChange(event);
    } 

    return (
    <form action='post' onSubmit={onHandleSubmit} className="px-10 pb-10">
      <input
        className="outline-none border-b-2 border-white min-w-full text-center text-2xl"
        type="text"
        name="idea"
        value={formIdea}
        onChange={onHandleChange}
      />
    </form>
  );
};
