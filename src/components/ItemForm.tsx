import React from "react";
import { useForm } from "react-hook-form";
import { Item } from "../utils/storage";
import { titleValidation, subtitleValidation } from "../utils/validation";

interface ItemFormProps {
  initialData?: Item;
  onSubmit: (data: { title: string; subtitle: string }) => void;
}

interface FormValues {
  title: string;
  subtitle: string;
}

const ItemForm: React.FC<ItemFormProps> = ({ initialData, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: initialData?.title || "",
      subtitle: initialData?.subtitle || "",
    },
  });

  const submitHandler = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-4">
      <div>
        <input
          type="text"
          placeholder="Title"
          {...register("title", titleValidation)}
          className="border p-2 rounded w-full"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Subtitle"
          {...register("subtitle", subtitleValidation)}
          className="border p-2 rounded w-full"
        />
        {errors.subtitle && (
          <p className="text-red-500 text-sm mt-1">{errors.subtitle.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ItemForm;
