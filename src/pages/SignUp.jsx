import React from "react";
import AuthLayout from "../assets/components/Layouts/AuthLayout";
import FormSignUp from "../assets/components/Fragments/FormSignUp";

function SignUp() {
  return (
    <AuthLayout>
      <FormSignUp />
    </AuthLayout>
  );
}

export default SignUp;