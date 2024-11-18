import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Register.module.scss"

// const ButtonComponent = ({ onClick }) => {
//   return <button onClick={onClick}>&#10006; </button>;
// }

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

;

const Register = ({setIsVisible}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
  <>
    
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* <div className={styles.close}>
          <ButtonComponent onClick={() => setIsVisible(false)} />
        </div> */}
        <h2 className={styles.title}>Register with</h2>
        
        <div className={styles.inputGroup}>
          <label>Name</label>
          <input {...register("name")} placeholder="Your full name" className={styles.inp} />
          <p className={styles.error}>{errors.name?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input {...register("email")} placeholder="Your email" className={styles.inp} />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="Your password" className={styles.inp}/>
          <p className={styles.error}>{errors.password?.message}</p>
        </div>

        <div className={styles.inputGroup}>
          <label>Re-enter password</label>
          <input type="password" {...register("confirmPassword")} placeholder="Your password" className={styles.inp}/>
          <p className={styles.error}>{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className={styles.button}>
          CONTINUE
        </button>
      </form>
    </div>
  </>
    
  );
};

  

export default Register;
