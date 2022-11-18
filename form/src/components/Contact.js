import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <h2 className="--text-center">Contact us</h2>
        <form className="--form-control--card">
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Contact;
