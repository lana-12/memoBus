import Head from './Head';
import Header from './Header';
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>
      <Head></Head>

      <Header
      ></Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
