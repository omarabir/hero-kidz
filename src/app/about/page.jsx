import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
export const metadata = {
  title: "About",
  description:
    "Learn more about Hero Kidz, our mission, values, and commitment to providing quality educational toys for children.",
};
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Hero Kidz
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering children's learning journey through quality educational
            toys since 2024
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Hero Kidz, we believe that every child deserves access to
              quality educational toys that inspire learning, creativity, and
              growth. Our mission is to provide parents and educators with
              carefully curated learning tools that make education fun,
              engaging, and effective for children of all ages.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaGraduationCap size={40} />
                </div>
                <h3 className="card-title">Educational Excellence</h3>
                <p className="text-gray-600">
                  Every product is designed to enhance cognitive development and
                  learning outcomes
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaShieldAlt size={40} />
                </div>
                <h3 className="card-title">Safety First</h3>
                <p className="text-gray-600">
                  All toys are made from non-toxic, child-safe materials meeting
                  international standards
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaHeart size={40} />
                </div>
                <h3 className="card-title">Quality & Care</h3>
                <p className="text-gray-600">
                  We carefully select products that are durable, engaging, and
                  truly beneficial for children
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaUsers size={40} />
                </div>
                <h3 className="card-title">Community Focus</h3>
                <p className="text-gray-600">
                  Supporting parents and educators with resources and guidance
                  for child development
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaTrophy size={40} />
                </div>
                <h3 className="card-title">Affordable Excellence</h3>
                <p className="text-gray-600">
                  Premium quality educational toys at prices every family can
                  afford
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body items-center text-center">
                <div className="bg-primary text-white p-4 rounded-full mb-4">
                  <FaStar size={40} />
                </div>
                <h3 className="card-title">Innovation</h3>
                <p className="text-gray-600">
                  Continuously updating our collection with the latest in
                  educational toy design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hero Kidz was founded with a simple but powerful vision: to make
                quality educational toys accessible to every child in Bangladesh
                and beyond. We recognized that many parents struggle to find
                toys that are both fun and genuinely educational.
              </p>
              <p>
                Starting with a small collection of learning boards and flash
                cards, we've grown to become a trusted name in educational toys.
                Our team carefully researches and tests each product to ensure
                it meets our high standards for quality, safety, and educational
                value.
              </p>
              <p>
                Today, Hero Kidz serves thousands of families, schools, and
                educational institutions across the country. We're proud to be
                part of countless children's learning journeys, helping them
                develop the skills they need for a bright future.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="h-96 bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <p className="text-xl font-semibold text-gray-700">
                    Inspiring Young Minds
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg">Educational Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Partner Schools</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8★</div>
              <div className="text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl">📚 Learning Boards</h3>
                <p className="text-gray-600">
                  Number counting boards, alphabet learning tools, and
                  interactive educational boards for early learning.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl">🎴 Flash Cards</h3>
                <p className="text-gray-600">
                  Animal, nature, vocabulary, and concept flash cards to enhance
                  memory and recognition skills.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl">🧩 Logic Games</h3>
                <p className="text-gray-600">
                  Matching games, puzzles, and problem-solving toys that develop
                  critical thinking abilities.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-xl">🎓 Educational Sets</h3>
                <p className="text-gray-600">
                  Complete learning kits combining multiple tools for
                  comprehensive skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card bg-primary text-white shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Hero Kidz Family
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Give your child the gift of learning through play. Explore our
              collection of educational toys today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn btn-secondary btn-lg">
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline btn-lg text-white hover:bg-white hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
