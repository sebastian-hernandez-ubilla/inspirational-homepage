import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { NewActivityForm } from "./components/NewActivityForm";
import { ThoughtsCards } from "./features/thoughts/ThoughtsCards";
import { addThought } from "./features/thoughts/thoughtsSlice";
import { ChangeImageButton } from "./features/images/ChangeImageButton";
import { selectImage } from "./features/images/imagesSlice";
import { Quote } from "./features/quotes/Quote";
import { WeatherStatus } from "./features/weather/WeatherStatus";

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
            <WeatherStatus/>
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
