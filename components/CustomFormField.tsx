import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface FormFieldWrapperProps {
  form: UseFormReturn<any>;
  name: string;
  placeholder: string;
}

export function CustomInput({
  form,
  name,
  placeholder,
}: FormFieldWrapperProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="w-full rounded-none border-0 border-b-[1px] border-black/10 px-5 py-8 shadow-none placeholder:text-[16px] focus-visible:border-black focus-visible:ring-0"
            />
          </FormControl>
          <FormMessage className="px-5 py-2" />
        </FormItem>
      )}
    />
  );
}

export function CustomTextarea({
  form,
  name,
  placeholder,
}: FormFieldWrapperProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="w-full rounded-none border-0 border-b-[1px] border-black/10 px-5 py-8 shadow-none placeholder:text-[16px] focus-visible:border-black focus-visible:ring-0"
              rows={4}
            />
          </FormControl>
          <FormMessage className="px-5 py-2" />
        </FormItem>
      )}
    />
  );
}
