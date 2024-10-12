"use client";

import { useState, useEffect } from "react";
import { getRequest } from "@/lib/axiosMethods";
import Image from "next/image";

const AnimalList = ({ setAnimalFormShow, setCategoryFormShow }) => {
  const [animals, setAnimals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [catLoading, setCatLoading] = useState(false);
  const [animLoading, setAnimLoading] = useState(false);

  // fetch categories and animals on load with a reusable custom function
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCatLoading(true);
        const categoriesData = await getRequest("/api/categories");
        setCategories(categoriesData);
        setCatLoading(false);
      } catch (error) {
        setCatLoading(false);
        console.error("Error fetching categories:", error);
      }
    };

    const fetchAnimals = async () => {
      try {
        setAnimLoading(true);
        const animalsData = await getRequest("/api/animals");

        setAnimals(animalsData);
        setAnimLoading(false);
        setFilteredAnimals(animalsData);
      } catch (error) {
        setAnimLoading(false);
        console.error("Error fetching animals:", error);
      }
    };

    fetchCategories();
    fetchAnimals();
  }, []);

  // filter animals by selected category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredAnimals(animals);
    } else {
      setFilteredAnimals(
        animals?.filter((animal) => animal?.category?._id === category)
      );
    }
  };

  return (
    <section className="container">
      <h2 className="text-red text-2xl">
        {catLoading
          ? "Loading..."
          : !catLoading &&
            categories?.length < 1 &&
            "No category is available yet!"}
      </h2>

      {/* category filter btn */}
      <div className="top-bar-sec md:flex md:flex-wrap space-y-4 md:space-y-0">
        <div className="category flex flex-wrap gap-2 lg:w-3/4 md:w-1/2">
          {!catLoading &&
            categories?.length >= 1 &&
            categories?.map((category) => (
              <button
                key={category?._id}
                onClick={() => filterByCategory(category?._id)}
                className={` border rounded-full py-2 lg:px-5 px-4 font-semibold text-nowrap text-sm lg:text-base ${
                  selectedCategory === category?._id
                    ? "border-green text-green "
                    : "border-red text-red"
                }`}
              >
                {category?.name}
              </button>
            ))}
          {/* clear filter btn */}
          {categories?.length >= 1 && (
            <button onClick={() => filterByCategory("")}>Clear Filter</button>
          )}
        </div>

        {/* form modal opening btn */}
        <div className="form-open-btns md:w-1/2 lg:w-1/4 flex justify-end items-start gap-2 text-nowrap">
          <button
            onClick={() => setAnimalFormShow(true)}
            className="border rounded-full py-2 lg:px-5 px-3 font-medium text-nowrap text-sm lg:text-base"
          >
            Add Animal
          </button>
          <button
            onClick={() => setCategoryFormShow(true)}
            className="border rounded-full py-2 lg:px-5 px-3 font-medium text-nowrap text-sm lg:text-base"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* animal list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-10">
        {animLoading ? (
          "Loading..."
        ) : animals?.length < 1 ? (
          <p className="text-green w-full col-span-6">
            {"Les't start the jurney to create a animal!"}
          </p>
        ) : filteredAnimals?.length > 0 ? (
          filteredAnimals?.map((animal) => (
            <div key={animal?._id}>
              <div className="border border-gray-700 rounded-xl">
                <Image
                  src={animal?.image}
                  alt={animal?.name}
                  width={100}
                  height={100}
                  priority
                  className="w-full h-40 object-none"
                />
              </div>
              <p className="text-center mt-2 uppercase">{animal?.name}</p>
            </div>
          ))
        ) : (
          <p className="text-xl text-red w-full col-span-6">
            No animals available for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default AnimalList;
