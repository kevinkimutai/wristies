import React from "react";

const Banner = () => {
  return (
    <header
      className=" h-[80vh] flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(138,7,7, 1) 20%,rgba(138,7,7, .8) 50%,rgba(138,7,7, .4) 90%,rgba(138,7,7, 0)), url('https://images.unsplash.com/photo-1612177343582-665b93b34403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80')",
      }}
    >
      <form className="flex items-center justify-center flex-col">
        <h1 className="text-2xl text-white mb-16 font-semibold ">
          BIGGEST COLLECTION OF WATCHES
        </h1>
        <div>
          <input
            className="rounded-md mr-3 min-w-[20rem] py-2 px-4"
            type="text"
            placeholder="Search your favourite watch"
          />
          <button className="bg-slate-600 p-2 rounded-md text-white">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Banner;
