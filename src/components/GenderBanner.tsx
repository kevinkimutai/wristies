import React from "react";

const GenderBanner = () => {
  return (
    <section className="flex justify-center items-center mb-8">
      <div
        className="w-1/2 flex justify-center items-center bg-cover bg-center h-[25rem]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(138,7,7, .8) 20%,rgba(138,7,7, .6) 50%,rgba(138,7,7, .4) 90%,rgba(138,7,7, .2)), url(https://images.unsplash.com/photo-1603394151492-5e9b974b090b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80)",
        }}
      >
        <h2 className="text-white font-semibold text-xl">MEN'S WATCHES</h2>
      </div>
      <div
        className="w-1/2 flex justify-center items-center bg-cover bg-center h-[25rem]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0, .8) 20%,rgba(0,0,0, .6) 50%,rgba(0,0,0, .6) ), url(https://images.unsplash.com/photo-1660032109199-3867a5fe8476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)",
        }}
      >
        <h2 className="text-white font-semibold text-xl">FEMALE WATCHES</h2>
      </div>
    </section>
  );
};

export default GenderBanner;
