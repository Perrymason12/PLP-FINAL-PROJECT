import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../assets/data'

const slugify = (s) =>
  s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const Blog = () => {
  return (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
      <h2 className='h4 mb-6'>Blog</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((b, i) => (
          <article key={i} className='bg-white p-4 rounded-lg'>
            <img src={b.image} alt={b.title} className='w-full h-40 object-cover rounded-md mb-3' />
            <h3 className='h5'>{b.title}</h3>
            <p className='text-sm text-gray-600 line-clamp-2'>{b.description}</p>
            <Link to={`/blog/${slugify(b.title)}`} className='text-secondary mt-2 inline-block'>Read more</Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog
