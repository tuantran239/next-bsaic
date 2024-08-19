"use client";

import React, { useEffect, useState } from "react";
import UserForm from "./user-form";
import { Toaster } from "react-hot-toast";
import { createUser, listUser } from "@/action/user";

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  createdAt: Date;
}

const User = () => {
  const [refetch, setRefetch] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const listUsers = async () => {
      const users = await listUser();
      setUsers(users.data);
    };

    listUsers();
  }, [refetch]);

  return (
    <div className="mx-auto container">
      <Toaster />
      <UserForm
        createUser={createUser}
        refetch={() => setRefetch(Math.random() * 1000)}
      />
      {users.length}
    </div>
  );
};

export default User;
