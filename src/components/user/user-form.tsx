import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface UserFormType {
  name: string;
  email: string;
  image: string;
}

interface UserFormProps {
  createUser: (data: UserFormType) => Promise<any>;
  refetch: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ createUser, refetch }) => {
  const { register, handleSubmit, reset } = useForm<UserFormType>();
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = handleSubmit(async (data) => {
    setLoading(true);
    const responseData = await createUser(data);
    if (responseData.success) {
      toast.success("Create user successfully");
      reset({ name: "", email: "", image: "" });
      refetch();
    } else {
      toast.error("Create user failed");
    }
    setLoading(false);
  });

  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
        <input
          placeholder="example@gmail.com"
          className="border border-black rounded-sm py-1 px-2"
          {...register("email", { required: true })}
        />
        <input
          placeholder="name"
          className="border border-black rounded-sm py-1 px-2"
          {...register("name", { required: true })}
        />
        <input
          placeholder="image"
          className="border border-black rounded-sm py-1 px-2"
          {...register("image", { required: true })}
        />
        <button>{!loading ? "Create" : "Loading...."}</button>
      </form>
    </div>
  );
};

export default UserForm;
