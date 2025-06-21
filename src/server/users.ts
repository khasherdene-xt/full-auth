"use server";
import { auth } from "@/lib/auth";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      status: 200,
      message: "Signed in successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error)?.message || "Something went wrong",
    };
  }
};

export const signUp = async ({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username,
      },
    });
    return {
      status: 201,
      message: "Signed up successfully",
    };
  } catch (error) {
    return {
      status: 500,
      message: (error as Error)?.message || "Something went wrong",
    };
  }
};
