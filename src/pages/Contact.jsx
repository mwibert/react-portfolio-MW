import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "This field is required";
    } else if (name === "email") {
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = "Invalid email address";
      }
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    alert("Form submitted successfully!");

    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name*</label>
          <input
            style={{ display: "block", width: "100%" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email*</label>
          <input
            style={{ display: "block", width: "100%" }}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message*</label>
          <textarea
            style={{ display: "block", width: "100%", height: "100px" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message}</span>
          )}
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
