import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import { categoryState, IToDo } from "../atoms";

function CreateCategory() {
  const setCustomcategory = useRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IToDo>();
  const handleValid = ({ newcategory }: IToDo["category"]) => {
    setCustomcategory((oldCategorys) => {
      return {
        ...oldCategorys,
        newcategory,
      };
    });
    setValue("newcategory", "");
  };
  return (
    <div>
      <hr />
      <hr />
      <h1>Add Category</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("newcategory", {
            required: "Please write a To Do",
          })}
          placeholder="Write a custom category"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateCategory;
