import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { NewActivityForm } from "./components/NewActivityForm";
import { ThoughtsCards } from "./features/thoughts/ThoughtsCards";
import { addThought } from "./features/thoughts/thoughtsSlice";
// import logo from "/public/cabin.jpg";
import { ChangeImageButton } from "./features/images/ChangeImageButton";
import { selectImage } from "./features/images/imagesSlice";
import { Quote } from "./features/quotes/Quote";

function App() {
  const [formIdea, setFormIdea] = useState("");
  const background = useSelector(selectImage);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIdea.trim().length > 0) {
      const newThought = {
        id: uuidv4(),
        description: formIdea,
        isDone: false,
      };

      dispatch(addThought(newThought));
      setFormIdea("");
    } else {
      setFormIdea("");
      return;
    }
  };

  const handleChange = (e) => {
    setFormIdea(e.target.value);
  };

  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src={background.img}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-xs"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-20 flex flex-col items-center text-white min-h-screen">
          <header className="w-[90%] max-w-7xl flex flex-col sm:flex-row gap-4 items-center justify-end pt-10 sm:pt-20">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <path d="M19.62 11.11C19.19 7.12 15.94 4 12 4 8.95 4 6.31 5.88 5.13 8.82 2.77 9.53 1 11.85 1 14.33 1 17.45 3.44 20 6.44 20h12.22c2.39 0 4.33-2.02 4.33-4.5 0-2.14-1.45-3.94-3.38-4.39Z"></path>
              </svg>
            </div>
            <div className="text-xl font-semibold text-center sm:text-left">
              <p>64.4°</p>
              <p>Overcast clouds</p>
            </div>
          </header>

          <section className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-6 flex-1 gap-6">
            <aside className="flex md:block">
              <ChangeImageButton icon={"<"} />
            </aside>

            <main className="w-full flex flex-col items-center justify-center gap-10">
              <section className="w-full max-w-5xl rounded-2xl shadow-xl text-white shadow-zinc-800/50 px-6 py-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
                  What's on your mind today?
                </h2>
                <NewActivityForm
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  formIdea={formIdea}
                />
              </section>

              <section className="w-full max-w-5xl rounded-2xl shadow-xl text-white shadow-zinc-800/50 px-6 py-5 flex flex-wrap gap-6 justify-center">
                <ThoughtsCards />
              </section>
            </main>

            <aside className="flex md:block">
              <ChangeImageButton icon={">"} />
            </aside>
          </section>

          <footer className="w-full text-center text-zinc-300 px-4 py-4">
            <Quote />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
