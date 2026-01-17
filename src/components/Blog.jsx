import React from "react";
import styled from "styled-components";
import { FaPenNib, FaClock, FaTags, FaBookOpen } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      title: "How to Secure Your PDFs in 2025",
      excerpt:
        "Learn the best practices to protect your sensitive PDF documents using modern encryption and access controls.",
      date: "July 10, 2025",
      category: "Security",
    },
    {
      title: "Top 5 Free Tools to Merge PDFs Online",
      excerpt:
        "A roundup of the most efficient and user-friendly tools to combine your PDF files hassle-free.",
      date: "July 5, 2025",
      category: "Productivity",
    },
    {
      title: "The Rise of AI in Document Processing",
      excerpt:
        "Explore how AI is transforming how we convert, compress, and understand digital documents.",
      date: "June 30, 2025",
      category: "Technology",
    },
  ];

  return (
    <BlogContainer>
      <HeroSection>
        <HeroContent>
          <h1>Insights & Updates</h1>
          <p>Explore our latest articles, tips, and product updates</p>
        </HeroContent>
      </HeroSection>

      <ContentWrapper>
        <Intro>
          <p>
            The <strong>PDFLIKE Blog</strong> is your resource for document
            security, productivity tips, product updates, and thought leadership
            in digital transformation.
          </p>
        </Intro>

        <BlogGrid>
          {posts.map((post, index) => (
            <BlogCard key={index}>
              <h3>{post.title}</h3>
              <Excerpt>{post.excerpt}</Excerpt>
              <Meta>
                <span>
                  <FaClock /> {post.date}
                </span>
                <span>
                  <FaTags /> {post.category}
                </span>
              </Meta>
              <ReadMore href="#">
                Read More <FaBookOpen />
              </ReadMore>
            </BlogCard>
          ))}
        </BlogGrid>

        <CTASection>
          <h2>Want to stay updated?</h2>
          <p>
            Subscribe to our newsletter to get our latest blog posts in your
            inbox.
          </p>
          <SubscribeButton href="mailto:subscribe@yourcompany.com">
            <FaPenNib /> Subscribe Now
          </SubscribeButton>
        </CTASection>
      </ContentWrapper>
    </BlogContainer>
  );
};

const BlogContainer = styled.div`
  color: #2d3748;
  font-family: "Inter", sans-serif;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #2c5282, #2a4365);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    opacity: 0.95;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Intro = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;

  p {
    font-size: 1.1rem;
    color: #4a5568;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const BlogCard = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;

  h3 {
    color: #2b6cb0;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const Excerpt = styled.p`
  font-size: 0.95rem;
  color: #4a5568;
  margin-bottom: 1.25rem;
`;

const Meta = styled.div`
  font-size: 0.85rem;
  color: #718096;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.4rem;
  }
`;

const ReadMore = styled.a`
  color: #3182ce;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;

const CTASection = styled.div`
  text-align: center;
  background: #f7fafc;
  padding: 3rem 2rem;
  border-radius: 10px;

  h2 {
    color: #2b6cb0;
    margin-bottom: 1rem;
  }

  p {
    color: #4a5568;
    margin-bottom: 2rem;
  }
`;

const SubscribeButton = styled.a`
  background: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2c5282;
  }
`;

export default Blog;
