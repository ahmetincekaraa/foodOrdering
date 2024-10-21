import React from "react";
import Input from "@/components/form/Input";
import Title from "./ui/Title";
import { useFormik } from 'formik';

const Rezervation = () => {

  const formik = useFormik({
    initialValues: {
      fullname: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  const inputs = [
    {
      id:1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
    },
    {
      id:2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
    },
    {
      id:3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
    },
    {
      id:4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
    },
    {
      id:5,
      name: "date",
      type: "date",
      placeholder: "Your Email Address",
    },
    
  ]

  return (
    <div className="container mx-auto py-12">
      <div className=" flex  flex-wrap-reverse items-center gap-10">
      <div className="lg:flex-1 w-full px-2">
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className="flex flex-col gap-y-3">
        {inputs.map((input)=>(
          <Input key={input.id} {...input} onChange={formik.handleChange}/>
        ))}
        
      </div>
      <button className="btn-primary mt-4">Book Now</button>
      </div>
      
      <div className="lg:flex-1 w-full ">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4323.724621989161!2d32.8304914859428!3d39.97861835885403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1729431695360!5m2!1str!2str" 
      height="455" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full"></iframe>
      </div>
      </div>
    </div>
  );
};

export default Rezervation;
