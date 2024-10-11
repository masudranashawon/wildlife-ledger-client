"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const AddAnimal = ({ setAnimalFormShow }) => {
  let {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [categories, setCategories] = useState([]);

  // fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category); // ObjectId from dropdown
    formData.append("image", data.image[0]);

    // animal data uploading
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/animals/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      reset();

      toast.success("Animal added!");

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
      {/* animal form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="block bg-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-1/2 lg:w-1/3 p-10 rounded-3xl space-y-4"
      >
        {/* this modal close btn */}
        <button
          onClick={() => setAnimalFormShow(false)}
          className="absolute top-5 right-5"
        >
          ❌
        </button>

        <div>
          <input
            id="name"
            type="text"
            className="bg-slate-200 w-full p-4 rounded-xl text-dark placeholder:text-dark"
            placeholder="Animal Name"
            {...register("name", {
              required: "Animal name is required",
              validate: (value) =>
                value.trim() !== "" ||
                "Animal name cannot be empty or just spaces",
            })}
          />
          {errors?.name && <p className="text-red">{errors?.name?.message}</p>}
        </div>

        {/* dynamic category select from the api */}
        <div>
          <select
            id="category"
            className="text-dark bg-slate-200 w-full p-4 rounded-xl"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option key={category?._id} value={category?._id}>
                {category?.name}
              </option>
            ))}
          </select>
          {errors?.category && (
            <p className="text-red">{errors?.category?.message}</p>
          )}
        </div>

        <div>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="text-dark"
            {...register("image", { required: "Image is required" })}
          />
          {errors?.image && (
            <p className="text-red">{errors?.image?.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-dark text-lg text-light  w-full p-3 rounded-xl"
        >
          {!isSubmitting ? "Save" : "Saving.."}
        </button>
      </form>
    </section>
  );
};

export default AddAnimal;
