export const reDirectToRead = (article_id, category) => {
  window.location.href = `/news/article/article${category?.slice(
    0,
    2
  )}_${article_id}`;
};
