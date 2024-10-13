"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { CustomInput, CustomTextarea } from "@/components/CustomFormField";
import { BsHeartArrow } from "react-icons/bs";
import MouseCursorComponent from "@/components/MouseCursorComponent";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // form.reset();
        alert("Email sent successfully");
      } else {
        alert("Email not sent");
      }
    } catch (error) {
      console.error("Error send email: ", error);
      alert("An error occurred. Please try again.");
    }
  }


  return (
    <div className="relative mx-auto mt-20 h-fit w-full max-w-[2014px] items-center justify-center px-5 lg:px-10">
      <div className="flex h-[15vh] w-full items-center lg:h-[30vh]">
        <h1 className="title w-[800px]">Let's build something great</h1>
      </div>
      {/* Form */}
      <div className="flex w-full flex-col justify-between gap-[50px] lg:flex-row lg:gap-[50px] xl:gap-[150px]">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full bg-white"
            >
              <CustomInput form={form} name="username" placeholder="Name" />
              <CustomInput form={form} name="email" placeholder="Email" />
              <div className="flex w-full">
                <CustomInput form={form} name="phone" placeholder="Phone" />
                <CustomInput
                  form={form}
                  name="company"
                  placeholder="Company name"
                />
              </div>
              <CustomTextarea
                form={form}
                name="message"
                placeholder="I'm looking for..."
              />
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="flex w-full justify-between rounded-none bg-white p-10 text-[16px] text-black hover:bg-black hover:text-white"
              >
                Send
                <BsHeartArrow size={30} />
              </Button>
            </form>
          </Form>

        </div>

        {/* Contact details */}
        <div className="flex w-full flex-col gap-10 pr-0 text-[14px] xl:pr-20">
          <div className="flex w-full flex-col gap-5">
            <h4 className="text-2xl font-medium">PixelPier</h4>
            <div className="flex flex-col gap-2">
              <p>Musterstraße 123, 10115 Berlin, Germany</p>
              <div className="flex divide-x divide-black">
                <MouseCursorComponent className="px-3 pl-0">
                  <a href="tel:+6413212315465">1-800-356-8933</a>
                </MouseCursorComponent>
                <MouseCursorComponent className="px-3">
                  <a href="mailto:cx20012002@gmail.com">studio@pixelpier.com</a>
                </MouseCursorComponent>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5">
            <h4 className="text-2xl font-medium">Careers</h4>
            <div className="flex flex-col gap-2">
              <p>
                PixcelPier is always in search of great humans looking to grow.
                If you think you’re a fit, then we’ve got a seat for you.
              </p>
              <MouseCursorComponent>
                <a href="mailto:cx20012002@gmail.com">careers@pixelpier.com</a>
              </MouseCursorComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
