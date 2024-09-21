"use client";

import { useState } from "react";
import AddAnimal from "@/components/AddAnimal";
import AddCategory from "@/components/AddCategory";
import AnimalList from "@/components/AnimalList";

const HomePage = () => {
  const [animalFormShow, setAnimalFormShow] = useState(false);
  const [categoryFormShow, setCategoryFormShow] = useState(false);

  return (
    <div className="home-page">
      {/* category modal */}
      <div
        className={categoryFormShow ? "block " : "hidden duration-300 z-100"}
      >
        <AddCategory setCategoryFormShow={setCategoryFormShow} />
      </div>

      {/* animal modal */}
      <div className={animalFormShow ? "block " : "hidden duration-300 z-100"}>
        <AddAnimal setAnimalFormShow={setAnimalFormShow} />
      </div>

      {/* animal list */}
      <AnimalList
        setAnimalFormShow={setAnimalFormShow}
        setCategoryFormShow={setCategoryFormShow}
      />
    </div>
  );
};

export default HomePage;
