// meldoy
export const MelodyHomeAPI =   "api/v1/melody/home" 


// articles
export const GetArticleByIdAPI = (article_id) => `api/v1/melody/article/${article_id}`


// articles home
export const GetTrendingArticlesAPI =  `api/v1/melody/article/home/trendings`
export const GetLatestArticlesAPI =  `api/v1/melody/article/home/latest`
export const GetSpotlightArticlesAPI = (spotlight_type) => `api/v1/melody/article/home/spotlight/${spotlight_type}`
export const GetVideosArticlesAPI = `api/v1/melody/article/home/videos`
export const GetPickedOneArticlesAPI = `api/v1/melody/article/home/pick_one`
export const GetCatgoriesArticlesAPI = `api/v1/melody/article/home/allCategory`
export const GetArticlesByCategoryAPI =  (cat_id) => `api/v1/melody/article/category/${cat_id}`