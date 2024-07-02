import { useContext, useState } from "react";
import Logo from "../Logo";
import { AuthenticationContext } from "../../AuthenticationContext";
import LoginBackground from "./LoginBackground";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  username: string;
  password: string;
}

const initialFormState: LoginFormState = {
  username: "",
  password: "",
};

interface LoginResponse {
  id: string;
  username: string;
  accessToken: { token: string; roles: [string] };
}

/**
 * TODO:
 *
 * Implement Authentication Logic:
 * a. In the handleLogin function, send an HTTP POST request to '/api/login' with the username and password.
 * b. On success, extract and store the authentication token in React Context
 */
const Login = () => {
  const [formData, setFormData] = useState<LoginFormState>(initialFormState);
  const { setToken } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, password } = formData;

    const data = await fetch(`http://localhost:8080/api/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json() as Promise<LoginResponse>;
      }
    });

    const accessToken = data?.accessToken.token;
    if (!accessToken) return;

    setToken(accessToken);
    navigate("/carbon-credits");
  };

  return (
    <section className="flex min-h-screen">
      <div className="hidden lg:block lg:w-3/5 overflow-hidden relative">
        <LoginBackground />
      </div>

      <div className="flex flex-col min-h-screen lg:w-2/5 w-full">
        <div className="flex-grow flex flex-col justify-center items-center w-full p-6">
          <div className="mb-8">
            <Logo />
          </div>
          <form onSubmit={handleLogin} className="space-y-3">
            <input
              id="username"
              name="username"
              placeholder="Email Address"
              value={formData.username}
              onChange={handleChange}
              required
              className="border-gray-300 bg-gray-100 focus:border-orange-500 focus:outline-none w-full p-3 rounded-md"
            />
            <input
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border-gray-300 bg-gray-100 focus:border-orange-500 focus:outline-none w-full p-3 rounded-md"
            />

            <button
              className="bg-orange-500 transition-all hover:bg-orange-600 w-full p-3 rounded-md text-white font-bold text-lg"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Login;
