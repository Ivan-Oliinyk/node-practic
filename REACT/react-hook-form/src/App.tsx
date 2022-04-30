import React from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

const App: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div>
        <h1>React hook form with typescript (-_-)</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input
            {...register("firstName", {
              required: true,
              minLength: {
                value: 2,
                message: "lenth must be more 2 characters",
              },
              maxLength: {
                value: 15,
                message: "Lenght must be at most 15 characters",
              },
            })}
          />
        </label>
        {errors?.firstName && (
          <span style={{ color: "red" }}>
            {errors?.firstName?.message || "error!"}
          </span>
        )}

        <label>
          Last Name
          <input
            {...register("lastName", {
              required: "Enter your last name!",
              minLength: {
                value: 5,
                message: "Lenght must been min 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Lenght must be at most 20 characters",
              },
            })}
          />{" "}
        </label>
        {errors?.lastName && (
          <span style={{ color: "red" }}>
            {errors?.lastName?.message || "Erorr !"}
          </span>
        )}

        <input
          type="submit"
          style={{ cursor: "pointer" }}
          disabled={!isValid}
        />
      </form>
    </>
  );
};

export default App;
