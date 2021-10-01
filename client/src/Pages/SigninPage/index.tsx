import { useState } from "react";
import FormInput from "../../Components/FormInput";
import { useHistory } from "react-router-dom";
import "./style.scss";
import imageBg from "../../assets/images/logo.png";
import axios from "axios";

interface IUser {
  email: string;
  password: string;
}

const Signin = () => {
  const [user, setUser] = useState<IUser>({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = async () => {
    // if (user.email === "" && user.password === "") {
    //   alert("Таны нэр эсвэл имэйл хоосон байна.");
    //   return;
    // }
    const userData = await axios.post(
      "http://localhost:8000/signup",
      {
        email: "admin",
        password: "1234pass",
        username: "ukasan",
      },
      {
        headers: { "content-type": "application/json" },
      }
    );
    console.log("login: ", userData.data);
    // history.push("/timeline");
  };

  const gotoSignUp = () => {
    console.log("Goto SignUp Page.");
    history.push("/signup");
  };

  return (
    <div className={"container"}>
      <div className={"container__left"}>
        <div>
          <img src={imageBg} alt="backgroundImage" />
        </div>
      </div>
      <div className={"container__right"}>
        <FormInput
          name="email"
          placeholder="Email"
          type="text"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          placeholder="Password"
          type="password"
          handleChange={handleChange}
        />

        <button onClick={signIn}>Sign in</button>

        <button onClick={gotoSignUp}>Create account</button>
      </div>
    </div>
  );
};

export default Signin;
