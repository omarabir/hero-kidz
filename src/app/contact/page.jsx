import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Hero Kidz for inquiries, support, and more information about our educational toys.",
};
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our educational toys? We're here to help your
            child's learning journey!
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXX-XXXXXX"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option disabled selected>
                      Select a subject
                    </option>
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Educational Guidance</option>
                    <option>Bulk Order</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <FaPhone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-600">+880 1XXX-XXXXXX</p>
                      <p className="text-gray-600">+880 1XXX-XXXXXX</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600">info@herokidz.com</p>
                      <p className="text-gray-600">support@herokidz.com</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Address</h3>
                      <p className="text-gray-600">
                        123 Learning Street
                        <br />
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Business Hours</h3>
                      <p className="text-gray-600">
                        Saturday - Thursday: 9:00 AM - 8:00 PM
                        <br />
                        Friday: 2:00 PM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Follow Us</h2>
                <div className="flex gap-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    className="btn btn-circle btn-outline btn-primary"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    className="btn btn-circle btn-outline btn-primary"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    className="btn btn-circle btn-outline btn-primary"
                  >
                    <FaXTwitter size={24} />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    className="btn btn-circle btn-outline btn-primary"
                  >
                    <FaYoutube size={24} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Quick Links</h2>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/products"
                    className="btn btn-ghost justify-start"
                  >
                    Browse Products
                  </Link>
                  <Link href="/blog" className="btn btn-ghost justify-start">
                    Learning Resources
                  </Link>
                  <Link href="/about" className="btn btn-ghost justify-start">
                    About Hero Kidz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Visit Our Store
          </h2>
          <div className="card shadow-xl overflow-hidden">
            <div className="h-96 bg-base-300 flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt
                  className="mx-auto text-primary mb-4"
                  size={48}
                />
                <p className="text-xl font-semibold">Store Location Map</p>
                <p className="text-gray-600 mt-2">
                  Visit us at 123 Learning Street, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Do you offer bulk discounts for schools?
              </div>
              <div className="collapse-content">
                <p>
                  Yes! We offer special pricing for schools, daycare centers,
                  and educational institutions. Please contact us for a custom
                  quote.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What is your return policy?
              </div>
              <div className="collapse-content">
                <p>
                  We accept returns within 7 days of delivery for unopened
                  products. Educational toys must be in original packaging to
                  qualify for return.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Do you ship nationwide?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, we deliver all across Bangladesh. Shipping typically
                  takes 2-5 business days depending on your location.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 shadow">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Can you help me choose the right toy for my child's age?
              </div>
              <div className="collapse-content">
                <p>
                  Absolutely! Our team can provide personalized recommendations
                  based on your child's age and learning needs. Contact us via
                  phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
