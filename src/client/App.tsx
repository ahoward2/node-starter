import React, { Suspense } from "react";
import {
  ReactLocation,
  Router,
  Outlet,
  Navigate,
} from "@tanstack/react-location";
import { QueryClientProvider, QueryClient } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";
import Loading from "./components/Loading/Loading";
const Home = React.lazy(() => import("./pages/home"));
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LocationGenerics } from "./interfaces/location.interface";

const location = new ReactLocation<LocationGenerics>();
const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router
          location={location}
          routes={[
            {
              path: "/",
              element: async () => (
                <Suspense
                  fallback={
                    <Loading /> /* Loads so fast making this is a little janky */
                  }
                >
                  <Home></Home>
                </Suspense>
              ),
            },
            {
              element: <Navigate to="/" />,
            },
          ]}
        >
          <Outlet />
          {process.env.NODE_ENV === "development" && (
            // <ReactQueryDevtools initialIsOpen={false} />
            <ReactLocationDevtools initialIsOpen={false} />
          )}
        </Router>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default App;
