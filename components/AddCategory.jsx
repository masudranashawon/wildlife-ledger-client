"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddCategory = ({ setCategoryFormShow }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // category form submit
  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/create`,
        data
      );

      toast.success("Category added!");

      reset();

      // for showing the toast properly
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
    }
  };

  return (
    <section className="h-screen w-full fixed top-0 left-0 bg-dark/70 backdrop-blur overflow-hidden ">
      {/* category form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="block bg-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-1/3 p-10 rounded-3xl space-y-4"
      >
        {/* category Input */}
        <button
          onClick={() => setCategoryFormShow(false)}
          className="absolute top-5 right-5"
        >
          ❌
        </button>

        <div>
          <input
            type="text"
            placeholder="Category Name"
            className="bg-slate-200 w-full p-4 rounded-xl text-dark placeholder:text-dark"
            {...register("name", {
              required: "Category name is required",
              maxLength: { value: 12, message: "Max length is 12" },
              validate: (value) =>
                value.trim() !== "" ||
                "Category cannot be empty or just spaces",
            })}
          />
          {errors.name && <p className="text-red">{errors?.name?.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          className="bg-dark text-lg text-light  w-full p-3 rounded-xl"
          type="submit"
        >
          Add Category
        </button>
      </form>
    </section>
  );
};

export default AddCategory;
