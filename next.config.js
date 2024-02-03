/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['res.cloudinary.com']
  },
  env : {
    NEXT_PUBLIC_SEVER_BASE_URI : "http://localhost:5500"
  }
}

module.exports = nextConfig
