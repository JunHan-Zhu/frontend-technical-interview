import { useContext, useState } from "react";
import Logo from "./Logo";
import { AuthenticationContext } from "../AuthenticationContext";

interface LoginFormState {
    username: string;
    password: string;
}

const initialFormState: LoginFormState = {
    username: "",
    password: "",
};

interface LoginResponse {
    id: string,
    username: string,
    accessToken: {token: string, roles: [string]}
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
    const {setToken} = useContext(AuthenticationContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {username, password} = formData;

        const data = await fetch(`http://localhost:8080/api/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }, 
            )
        })
        .then(res => {if(res.status === 200){
            return res.json() as Promise<LoginResponse>
        } 
        })

        const myToken = data?.accessToken.token;

        if(myToken){
            setToken(myToken);
        }
    };

    return (
        <section className="flex justify-center items-center min-h-dvh">
            <div className="min-w-[500px] flex flex-col justify-center items-center">
                <Logo />
                <h3 className="text-3xl font-bold text-center my-5">Sign in to your account</h3>
                <form onSubmit={handleLogin} className="space-y-3">
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        className="bg-teal-500 transition-all hover:bg-teal-600 w-full p-3 rounded-md text-white font-bold text-lg"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
