import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
//import Userfront from "@userfront/react"
import Userfront from "@userfront/core";
import LoginForm from "../components/LoginForm";

Userfront.init("9ny854yb")

// const SignupForm = Userfront.build({
//     toolId: "rllblr",
//   });

//   const LoginForm = Userfront.build({
//     toolId: "loomoo"
//   });

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
    return (
        <>
            <h2>Home</h2>
            {/* <SignupForm /> */}
        </>
    )
}

// function Login() {
//     return (
//         <>
//             <h2>Login</h2>
//             <LoginForm />
//         </>
//     )
// }

function PasswordReset() {
  return <h2>Password Reset</h2>;
}

function Dashboard() {
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
      <div>
        <h2>Dashboard</h2>
        <pre>{userData}</pre>
        <button onClick={Userfront.logout}>Logout</button>
      </div>
    );
}

function RequireAuth({ children }) {
    let location = useLocation();
    if (!Userfront.tokens.accessToken) {
      // Redirect to the /login page
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
