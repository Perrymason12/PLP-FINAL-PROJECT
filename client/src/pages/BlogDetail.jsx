import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogs } from '../assets/data'

const slugify = (s) =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const BlogDetail = () => {
  const { slug } = useParams()
  const blog = blogs.find((b) => slugify(b.title) === slug)

  if (!blog) {
    return (
      <div className='max-padd-container py-16 pt-28 bg-primary'>
        <p>Blog not found. <Link to="/blog" className='text-secondary'>Back to blog list</Link></p>
      </div>
    )
  }

  return (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
      <div className='bg-white p-6 rounded-lg'>
        <h1 className='h3 mb-4'>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className='w-full h-64 object-cover rounded mb-4' />
        <p className='text-base'>{blog.description}</p>
        <div className='mt-4'>
          <Link to="/blog" className='text-secondary'>Back to blog list</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
