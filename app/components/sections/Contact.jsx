"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 lg:px-16 py-14">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or media inquiries? Reach out to our
            editorial team. We are here to assist you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600 text-sm">
                      editorial@dgnews.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office</h4>
                    <p className="text-gray-600 text-sm">
                      2nd Floor, Media Tower, New Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-red-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Working Hours
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday : 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}

            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Our Location
              </h2>
              <div className="w-full h-56 rounded-md overflow-hidden">
                <iframe
                  title="DG News Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.90003057595!2d77.24107815739723!3d23.19932387082249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1771321089312!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
