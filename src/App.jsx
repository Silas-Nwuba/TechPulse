import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./page/HomePage";
import TechnologyPage from "./page/TechnologyPage";
import BusinessPage from "./page/BusinessPage";
// import SmartphonePage from "./page/SmartphonePage";
import GadgetPage from "./page/GadgetPage";
import ArticlePage from "./page/ArticlePage";
import LatestPostPage from "./page/LatestPostPage";
import OlderPostPage from "./page/OlderPostPage";
import ContactPage from "./page/ContactPage";
import AboutPage from "./page/AboutPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkModeProvider } from "./context/DarkModeContext";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <div>
      <>
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="technology" element={<TechnologyPage />} />
                  <Route path="business" element={<BusinessPage />} />
                  <Route path="gadget" element={<GadgetPage />} />
                  <Route path="latest" element={<LatestPostPage />} />
                  <Route path="older" element={<OlderPostPage />} />
                  <Route
                    path="/:name/article/:postId"
                    element={<ArticlePage />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </DarkModeProvider>
        </QueryClientProvider>

        <Toaster
          position="top-center"
          gutter={12}
          toastOptions={{
            error: {
              duration: 5000,
            },
            style: {
              zIndex: 30000,
            },
          }}
        />
      </>
    </div>
  );
};

export default App;
