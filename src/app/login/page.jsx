"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "./loginForm";
import { useRouter } from "next/navigation";
import { showToast } from "@/Components/PopUp";

const validationSchema = z.object({
  username: z.string().min(3, { message: "Username is not correct" }),
  password: z.string().min(8, { message: "Password is not correct" }),
});

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(validationSchema),
  });

  const handleForm = async (data) => {
    setUsername(data.username);
    localStorage.setItem("username", data.username);
    setIsLoggedIn(true);
    showToast(`Welcome back, ${data.username}!`, "success");

    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <LoginForm
      formProps={{
        isLoggedIn,
        username,
        register,
        handleSubmit,
        handleForm,
        errors,
      }}
    />
  );
};

export default Login;
