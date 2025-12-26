import React from "react";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata = {
  title: "Blog ",
  description:
    "Parenting guides, child development tips, and how‑tos for using educational toys like learning boards, flash cards, and logic games.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/blog`,
    title: "Blog — Hero Kidz",
    description:
      "Guides and tips for maximizing learning with educational toys.",
    images: [
      { url: "/assets/logo.png", width: 1200, height: 630, alt: "Hero Kidz" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Hero Kidz",
    description:
      "Guides and tips for maximizing learning with educational toys.",
    images: ["/assets/logo.png"],
  },
};
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Educational Toys Matter for Early Childhood Development",
      excerpt:
        "Educational toys play a crucial role in developing cognitive skills, creativity, and problem-solving abilities in young children. Learn how learning boards and flash cards can accelerate your child's development.",
      image: "https://i.ibb.co/placeholder1.jpg",
      author: "Dr. Ayesha Rahman",
      date: "December 20, 2025",
      category: "Child Development",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Use Number Learning Boards Effectively at Home",
      excerpt:
        "Step-by-step guide for parents on using number and counting boards to teach basic math concepts. Make learning fun and engaging with these practical tips and activities.",
      image: "https://i.ibb.co/placeholder2.jpg",
      author: "Sarah Khan",
      date: "December 18, 2025",
      category: "Learning Tips",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Benefits of Flash Cards in Building Vocabulary",
      excerpt:
        "Flash cards are powerful tools for vocabulary development. Discover how animal and nature flash cards help children learn new words, improve memory, and develop language skills.",
      image: "https://i.ibb.co/placeholder3.jpg",
      author: "Fatima Ahmed",
      date: "December 15, 2025",
      category: "Language Learning",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Logic Games: Building Problem-Solving Skills Through Play",
      excerpt:
        "Logic matching games and puzzles help children develop critical thinking and analytical skills. Learn how to choose the right logic toys for different age groups.",
      image: "https://i.ibb.co/placeholder4.jpg",
      author: "Rahman Hossain",
      date: "December 12, 2025",
      category: "Skill Development",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Screen-Free Learning: Why It's Essential for Kids",
      excerpt:
        "In today's digital age, screen-free educational toys provide healthier alternatives for learning. Explore the benefits of hands-on learning tools and traditional educational toys.",
      image: "https://i.ibb.co/placeholder5.jpg",
      author: "Nadia Islam",
      date: "December 10, 2025",
      category: "Parenting",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Celebrating Learning Milestones with Your Child",
      excerpt:
        "Every learning achievement deserves celebration! Ideas for making learning milestones special, from graduation ceremonies to creative recognition methods.",
      image: "https://i.ibb.co/placeholder6.jpg",
      author: "Mariam Chowdhury",
      date: "December 8, 2025",
      category: "Parenting",
      readTime: "4 min read",
    },
  ];

  const categories = [
    "All",
    "Child Development",
    "Learning Tips",
    "Language Learning",
    "Skill Development",
    "Parenting",
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Hero Kidz Learning Blog
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Expert tips, parenting guides, and educational resources to help
            your child learn and grow through play
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6  py-2 rounded-full font-semibold transition-all ${
                index === 0 ? "btn btn-primary" : "btn btn-outline"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <figure className="relative h-56 bg-base-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Educational Content</span>
                </div>
                <div className="absolute text-white top-4 right-4 badge badge-accent badge-lg ">
                  {post.category}
                </div>
              </figure>

              {/* Content */}
              <div className="card-body">
                <h2 className="card-title text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-white w-8 rounded-full">
                        <FaUser className="text-xs" />
                      </div>
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="btn btn-primary btn-sm btn-outline gap-2"
                  >
                    Read
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-wide">
            Load More Articles
          </button>
        </div>
      </div>

      {/* Educational Resources Section */}
      <div className="bg-base-100 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="card-title justify-center">
                  Learning Boards Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide on using number and alphabet learning boards
                </p>
                <Link href="#" className="btn btn-primary btn-outline btn-sm">
                  Download PDF
                </Link>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="card-title justify-center">
                  Activities Workbook
                </h3>
                <p className="text-gray-600 mb-4">
                  Fun activities to complement your educational toys
                </p>
                <Link href="#" className="btn btn-primary btn-outline btn-sm">
                  Get Free Copy
                </Link>
              </div>
            </div>
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="card-title justify-center">Parent's Handbook</h3>
                <p className="text-gray-600 mb-4">
                  Expert tips for maximizing learning outcomes at home
                </p>
                <Link href="#" className="btn btn-primary btn-outline btn-sm">
                  Read Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Learning Tips & Updates!
          </h2>
          <p className="text-lg mb-8">
            Subscribe to receive expert parenting advice, educational tips, and
            exclusive offers on learning toys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered flex-1"
            />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
