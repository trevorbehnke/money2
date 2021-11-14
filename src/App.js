import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
// import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

import { createCheckoutSession } from "./stripe/createCheckoutSession";
import usePremiumStatus from "./stripe/usePremiumStatus";

function App() {
  const { authIsReady, user } = useAuthContext();
  const userIsPremium = usePremiumStatus(user);

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {/* {user && <Home />} */}
              {user && (
                <div>
                  <h1>Hello, {user.displayName}</h1>
                  {!userIsPremium ? (
                    <button onClick={() => createCheckoutSession(user.uid)}>
                      Upgrade to premium!
                    </button>
                  ) : (
                    <h2>Have a cookie 🍪 Premium customer!</h2>
                  )}
                </div>
              )}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
