import "./App.css";
import Page from "./page";
import { Analytics } from "@vercel/analytics/react";
import MetaManager from "./components/SEO/MetaManager";

function App() {
  return (
    <MetaManager>
      <Page />
      <Analytics />
    </MetaManager>
  );
}

export default App;
