"use server";

import { UserFormType } from "@/components/user/user-form";
import prisma from "@/shared/db";

export const createUser = async (data: UserFormType) => {
  try {
    const newUser = await prisma.user.create({ data });
    return { data: newUser, message: null, success: true };
  } catch (error: any) {
    return { data: null, message: error.message, success: false };
  }
};

export const listUser = async () => {
  try {
    const users = await prisma.user.findMany();
    return { data: [...users], message: null, success: true };
  } catch (error: any) {
    return { data: [], message: null, success: false };
  }
};
