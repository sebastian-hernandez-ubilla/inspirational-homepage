import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewActivityForm } from "./components/NewActivityForm";
import { ThoughtsCards } from "./features/thoughts/ThoughtsCards";
import { addThought, selectThoughts } from "./features/thoughts/thoughtsSlice";
import { v4 as uuidv4 } from "uuid";
import logo from '/public/cabin.jpg';

function App() {
  const [formIdea, setFormIdea] = useState("");
  const ideas = useSelector(selectThoughts);

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
    }else{
      setFormIdea("");
      return;
    }
  };

  const handleChange = (e) => {
    setFormIdea(e.target.value);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src={logo}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-xs"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-20 flex flex-col items-center h-full text-white">
          <header className="w-[80%] flex gap-4 items-center justify-end pt-20">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-white w-[48px] h-[48px]"
              >
                <path d="M19.62 11.11C19.19 7.12 15.94 4 12 4 8.95 4 6.31 5.88 5.13 8.82 2.77 9.53 1 11.85 1 14.33 1 17.45 3.44 20 6.44 20h12.22c2.39 0 4.33-2.02 4.33-4.5 0-2.14-1.45-3.94-3.38-4.39Z"></path>
              </svg>
            </div>
            <div className="text-xl font-semibold">
              <div>
                <p>64.4°</p>
              </div>
              <div>
                <p>Overcast clouds</p>
              </div>
            </div>
          </header>

          <main className="w-full flex flex-col items-center justify-center gap-10">
            <section className="w-[80%] rounded-2xl shadow-xl text-white shadow-zinc-800/50">
              <h2 className="text-4xl font-bold pl-10 pt-5 pb-4 ">
                What's on your mind today?
              </h2>
              <NewActivityForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formIdea={formIdea}
              />
            </section>

            <section className="w-[80%] rounded-2xl shadow-xl text-white shadow-zinc-800/50 px-10 flex gap-8 p-10 flex-wrap">
              <ThoughtsCards />
            </section>
          </main>

          <footer className="flex items-end text-zinc-300 h-full pb-2">
            <article className="text-center">
              <h3 className="text-xl">
                "Named must your fear be before banish you can"
              </h3>
              <p>Yoda</p>
            </article>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
