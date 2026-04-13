import "./App.css";
import Page from "./page";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Page />
      <Analytics />
    </>
  );
}

export default App;
