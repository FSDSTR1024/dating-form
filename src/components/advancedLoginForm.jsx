import { useForm } from "react-hook-form";
import "./basicLoginForm.css";

const AdvancedLoginForm = () => {
  const { register, handleSubmit, formState, watch, setValue, reset } =
    useForm();

  const onHandleSubmit = () => {
    setValue("captcha", true);
    console.log("onHandleSubmit");
    fetch("http://localhost:8000", {});
  };

  const showFormState = () => {
    console.log(formState);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div>
      <h2>Advanced login form</h2>
      <h3>Hola, {watch("username")}</h3>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <p>Username</p>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "El username es requerido" },
            minLength: {
              value: 3,
              message: "El username debe tener al menos 3 caracteres",
            },
          })}
        />
        {formState.errors.username && (
          <p className="error">{formState.errors.username.message}</p>
        )}
        <p>Password</p>
        <input type="password" {...register("password", { required: true })} />
        {formState.errors.password && (
          <p className="error">El password es requerido</p>
        )}
        <button type="submit">Entrar</button>
      </form>
      <button onClick={showFormState}>Show Form State</button>
      <button onClick={handleReset}>Reset</button>
      <p>{JSON.stringify(watch())}</p>
    </div>
  );
};

export default AdvancedLoginForm;
