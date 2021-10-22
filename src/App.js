import React, { useState, useEffect } from "react";
import AppProvider from "./Context/AppProvider";
import { Route, Switch } from 'react-router-dom';

import Stopwatch from "./Components/Stopwach/Stopwatch";
import Loading from "./Components/Loading/Loading";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    showLoading();
  }, [])

  const showLoading = () => {
    setTimeout(() => { setLoading(false) }, 3000);
  }

  return (
    loading ? (
      <Loading />
    ) :
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Stopwatch } />
      </Switch>
    </AppProvider>
  )
};

export default App;
