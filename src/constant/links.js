// header links

export const defaultLinks = [
  {
    id: "kNews",
    name: "News",
    subCategory: false,
    url : '/news'
  },
  {
    id: "blogs",
    name: "Blogs",
    subCategory: false,
    url : '/'
  },
  {
    id: "music",
    name: "Music",
    subCategory: true,
    url : '/'
  },
  {
    id: "kprofile",
    name: "Profile",
    subCategory: true,
    url : '/'
  },
  {
    id: "shopping",
    name: "Shopping",
    subCategory: true,
    url : '/'
  },
  {
    id: "mfamily",
    name: "Malody Family",
    subCategory: false,
    url : '/'
  },
];

export const k_NewsLinks = [
  {
    id: "k_newsVideo",
    name: "Videos",
    subCategory: false,
    url : '/news/categories/video'
  },
  {
    id: "k_newsStyle",
    name: "Style",
    subCategory: false,
    url : '/news/categories/style'
  },
  {
    id: "k_newsTV/FILM",
    name: "Drama",
    subCategory: false,
    url : '/news/categories/film'
  },
  {
    id: "k_newsMusic",
    name: "Music",
    subCategory: false,
    url : '/news/categories/music'
  },
  {
    id: "k_newsFeatures",
    name: "Features",
    subCategory: false,
    url : '/news/categories/features'
  },
];

export const sibarLinks = [
  {
    name : 'News',
    url :'/news',
    subcategory : [
      {
       
        name: "Videos",
        url : '/news/categories/video'
      },
      {
        name: "Style",
        url : '/news/categories/style'
      },
      {
        name: "Drama",
        url : '/news/categories/film'
      },
      {
        name: "Music",
        url : '/news/categories/music'
      },
      {
        name: "Features",
        url : '/news/categories/features'
      },
    ]
  },
  {
    
    name: "Blogs",
    url : '/',
    subcategory : null
  },
  {
    name: "Music",
    url : '/',
    subcategory : null
  },
  {
    name: "Profile",
    url : '/',
    subcategory : null
  },
  {
    name: "Shopping",
    url : '/',
    subcategory : null
  },
  {
    name: "Malody Family",
    url : '/',
    subcategory : null
  },
]
