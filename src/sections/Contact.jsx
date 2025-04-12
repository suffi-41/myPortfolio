// sections/Contact.jsx
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(2, "Must be at least 2 characters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .required("Required")
        .min(10, "Must be at least 10 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      const toastId = toast.loading("Sending your message...");
      console.log(form.current);
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          toast.update(toastId, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        },
        (error) => {
          alert(error);
          toast.update(toastId, {
            render: "Something went wrong!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      );
      resetForm();
    },
  });

  return (
    <section id="contact" className="py-20 px-4 w-full bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info / Description Section */}
          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              I’m always open to new opportunities, collaborations, or just a
              friendly chat about development, design, or tech. If you’ve got an
              idea or project in mind — let’s talk!
            </p>

            <div>
              <p className="font-semibold text-white">Email</p>
              <p className="text-blue-400">mohdbinsufiyan@gmail.com</p>
            </div>

            <div>
              <p className="font-semibold text-white">Location</p>
              <p>Hyderabad, India</p>
            </div>

            <div>
              <p className="font-semibold text-white">Available For</p>
              <p>Freelance & Full-Time Opportunities</p>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.form
            onSubmit={formik.handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            ref={form}
          >
            <div className="flex gap-2 flex-wrap">
              {formik.touched.name && formik.errors.name && (
                <fieldset className="bg-transparent backdrop-blur-lg border rounded-sm border-white/20 shadow-lg px-2">
                  <legend className="text-sm text-red-700 bg-red-200 rounded-md px-1">
                    Name
                  </legend>
                  {formik.errors.name}
                </fieldset>
              )}
              {formik.touched.email && formik.errors.email && (
                <fieldset className="bg-transparent backdrop-blur-lg border rounded-sm border-white/20 shadow-lg px-2">
                  <legend className="text-sm text-red-700 bg-red-200 rounded-md px-1">
                    Email
                  </legend>
                  {formik.errors.email}
                </fieldset>
              )}
              {formik.touched.message && formik.errors.message && (
                <fieldset className="bg-transparent backdrop-blur-lg border rounded-sm border-white/20 shadow-lg px-2">
                  <legend className="text-sm text-red-700 bg-red-200 rounded-md px-1">
                    Message
                  </legend>
                  {formik.errors.message}
                </fieldset>
              )}
            </div>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700/50 rounded-lg text-white placeholder-gray-400"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700/50 rounded-lg text-white placeholder-gray-400"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-gray-700/50 rounded-lg text-white placeholder-gray-400"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            <motion.button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
