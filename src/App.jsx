import { useState } from "react";

function App() {
  const [formIdea, setFormIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdeas([...ideas, formIdea]);
    setFormIdea("");
  };

  const handleChange = (e) => {
    setFormIdea(e.target.value);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <img
          src="/src/assets/cabin.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-xs"
        />

        <div className="relative z-10 flex flex-col items-center h-full text-white">
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
            <section className="w-[80%] rounded-2xl shadow-xl text-white shadow-blue-300">
              <h2 className="text-4xl font-bold pl-10 pt-5 pb-4 ">
                What's on your mind today?
              </h2>
              <form onSubmit={handleSubmit} className="px-10 pb-10">
                <input
                  className="outline-none border-b-2 border-white min-w-full text-center text-2xl"
                  type="text"
                  name="idea"
                  value={formIdea}
                  onChange={handleChange}
                />
              </form>
            </section>

            <section className="w-[80%] rounded-2xl shadow-xl text-white shadow-blue-300 px-10 flex gap-8 p-10 flex-wrap">
              {ideas.map((idea, index) => {
                return (
                  <div
                    key={index}
                    className="border border-red-600 p-5 rounded-2xl bg-red-400/60 shadow-xl/30 hover:bg-blue-500/50"
                  >
                    <p>{idea}</p>
                  </div>
                );
              })}
            </section>
          </main>

          <footer className="flex items-end text-white h-full pb-2">
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
