import Head from './Head';
import Header from './Header';
import { Outlet } from "react-router-dom";

function App() {
  
  const handleClickLogout = ()=>{
    alert('Vous avez cliqué sur Logout')
  }

  return (
    <>
      <Head></Head>

      <Header
        onClickLogout={handleClickLogout}
      ></Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
