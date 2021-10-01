import { useState } from "react";
import FormInput from "../../Components/FormInput";
import css from "./style.module.css";
import imageBg from "../../assets/images/logo.png";

interface IUser {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
}

function Signup() {
  const [user, setUser] = useState<IUser>({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const signIn = () => {
    if (user.lastname === "" || user.firstname === "" || user.email === "") {
      alert("Таны овог, нэр эсвэл имэйл хоосон байна.");
      return;
    }
    alert(
      `Таны овог: ${user.lastname}, 
            нэр: ${user.firstname}, 
            имэйл:${user.email} байна.`
    );

    // sign(email, password);
  };

  return (
    <div className={css.container}>
      <div className={css.container__left}>
        <div className={css.logo}>
          <img className={css.image} src={imageBg} alt="backgroundImage" />
        </div>
      </div>
      <div className={css.container__right}>
        <div className="form">
          <FormInput
            name="lastname"
            placeholder="Lastname"
            type="text"
            handleChange={handleChange}
          />
          <FormInput
            name="firstname"
            placeholder="Firstname"
            type="text"
            handleChange={handleChange}
          />
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
          <div>
            <button className={css.button} onClick={signIn}>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
