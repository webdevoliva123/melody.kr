/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    domains : ['res.cloudinary.com']
  },
  env : {
    NEXT_PUBLIC_SEVER_BASE_URI : "https://melodykr-server.vercel.app",
    NEXT_PUBLIC_OAUTH_CLIENT_ID : "858494856410-nsfa9fru0s5m7eocr31kmtr0ut397f6f.apps.googleusercontent.com",
    NEXT_PUBLIC_OAUTH_CLIENT_SECRET_KEY : "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"
  }
}

module.exports = nextConfig
