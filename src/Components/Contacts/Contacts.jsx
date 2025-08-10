import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

// Import React Icons
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa';

const Contacts = () => {
  const formRef = useRef();

  const handleSend = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_rre95kr',
        'template_juv4ays',
        formRef.current,
        'Isjt5g5ca2pVg_-WT'
      )
      .then(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message has been sent!',
            showConfirmButton: false,
            timer: 1500,
          });
          formRef.current.reset();
        },
        error => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed to send message. Please try again.',
            showConfirmButton: false,
            timer: 1500,
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contacts" className="py-6 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-orange-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-xl w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-orange-600">Get in Touch</h3>
            <p>I’m always open to new projects and collaborations.</p>

            <div className="space-y-4 ">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-600 text-2xl" />
                <a href="mailto:mdimu29@gmail.com" className="hover:underline">
                  mdimu29@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-600 text-2xl" />
                <a href="tel:+8801401519086" className="hover:underline">
                  +880 1401519086
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-600 text-2xl" />
                <p>Narail, Dhaka, Bangladesh</p>
              </div>
              {/* New additions */}
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-orange-600 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/md-imu-63138b283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  My_Linkedin
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-orange-600 text-2xl" />
                <a
                  href="https://github.com/mdimu29ail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  My_GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSend}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-xl w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-bold text-orange-600">
              Send a Message
            </h3>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full h-28"
              required
            ></textarea>

            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-white w-full"
            >
              🚀 Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
