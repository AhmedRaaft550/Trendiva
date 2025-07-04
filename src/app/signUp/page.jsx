"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "../login/login.module.css";
import { useRouter } from "next/navigation";
import SignForm from "./SignUpForm";
import { showToast } from "@/Components/PopUp";

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobile: z
    .string()
    .min(8, { message: "Mobile number is not valid" })
    .regex(/^\d+$/, { message: "Mobile must contain only numbers" }),
  country: z.string().min(1, { message: "Country is required" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must include uppercase, lowercase, number, and special character",
      }
    ),
});

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    showToast(`Account Created Successfully, ${data.name}!`, "success");
    router.push("/login");
  };

  return (
    <SignForm data={{ styles, register, handleSubmit, errors, onSubmit }} />
  );
};

export default SignUpForm;
