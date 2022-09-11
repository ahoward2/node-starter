import React, { useEffect } from "react";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Header from "../components/Header/Header";
import { Message } from "../components/Message/Message";
import { Toaster } from "react-hot-toast";
import { handleShowToast } from "../components/Toast/Events";

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
              <Message
                title={"Message title"}
                content={
                  "Here will be some forms and buttons to start new Node.js projects."
                }
              ></Message>
            </div>
            <Toaster position="bottom-center" />
          </div>
        }
      ></HomeLayout>
    </div>
  );
};

export default Home;
