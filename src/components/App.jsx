import Head from './Head';
import Header from './Header';
import React, { useEffect } from 'react';
import NavLogin from './NavLogin';

function App() {

  const handleClickTitle = (e) => {
    console.log(e)
    alert("J'ai cliqué sur le titre");
  }

  return (
    <>
      <Head></Head>

      <Header
        onClickTitleNemo={handleClickTitle}
      ></Header>

    </>
  );
}

export default App;
