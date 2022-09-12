import React, { useEffect } from "react";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
import { handleShowToast } from "../components/Toast/Events";
import { download } from "../lib/Download";

const Home = () => {
  useEffect(() => {
    window.addEventListener("showToast", handleShowToast);
    return () => {
      window.removeEventListener("showToast", handleShowToast);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <HomeLayout
        header={
          <Header
            headerData={{
              title: "Node Starter",
            }}
          />
        }
        mainPanel={
          <div className="flex w-screen flex-col">
            <div className="p-2 md:p-4">
              <h1 className="text-8xl bg-gradient-to-r from-emerald-900 to-lime-500 bg-clip-text text-center text-3xl font-black text-transparent dark:from-lime-500 dark:to-emerald-300 md:text-6xl">
                Start A New Project
              </h1>
            </div>
            <div className="mx-auto w-full px-4 md:w-1/2 md:pt-10">
              <button
                type="submit"
                className="w-full rounded border-2 border-indigo-700 bg-indigo-700 px-4 py-2 text-white dark:border-rose-300 dark:bg-rose-300 dark:text-black  md:mt-0 md:ml-2 md:self-end"
                onClick={async () =>
                  await download({
                    owner: "ahoward2",
                    repo: "remind",
                    ref: "master",
                  })
                }
              >
                Search
              </button>
            </div>
            <Toaster position="bottom-center" />
          </div>
        }
      ></HomeLayout>
    </div>
  );
};

export default Home;
