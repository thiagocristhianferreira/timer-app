import { useState, useEffect } from "react";

import Stopwatch from "./Components/Stopwach/Stopwatch";
import Loading from "./Components/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <Stopwatch />;
};

export default App;
