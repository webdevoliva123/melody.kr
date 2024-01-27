import melodyapi from "@/apis/_axios";
import { GetArticleAuthorByIdAPI, GetArticleByIdAPI } from "@/apis/_list";
import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Author from "@/components/k-news/author/Author";
import AuthorNotFound from "@/components/k-news/author/AuthorNotFound";
import Popular_cover from "@/components/k-news/categories/Popular_cover";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const [author, setAuthor] = useState({});
  const [articles, setArticles] = useState([]);
  const [loadArticleLength, setLoadArticleLength] = useState(10);
  const [contentLoading,setContentLoading] = useState(true)
  const [articleLoading,setArticleLoading] = useState(false)
  const [authorNotFoundData,setAuthorNotFoundData] = useState({})

  const getArticles = async (articles) => {
    setArticleLoading(true)
    let tempArticles = [];
    await Promise.all(
      articles?.map(async (article, idx) => {
        if (idx < loadArticleLength) {
          try {
            const findArticles = await melodyapi.get(
              GetArticleByIdAPI(article?.article_id)
            );
            if (findArticles?.data?.success) {
              tempArticles = [...tempArticles, findArticles?.data?.data];
            }
          } catch (error) {
            console.log(error?.message);
          }
        }
      })
    );
    setArticles(tempArticles);
    setArticleLoading(false)
  };

  const getAuthor = async (auhtor_id) => {
    setContentLoading(true)
    try {
      const response = await melodyapi(
        GetArticleAuthorByIdAPI(auhtor_id?.split("_")[1])
      );
      setAuthor(response?.data?.data);
      getArticles(response?.data?.data?.articles);
    } catch (err) {
      setAuthor(null)
      console.log(err);
      setAuthorNotFoundData(err?.response?.data)
    }
    setContentLoading(false)
  };

  useEffect(() => {
    if (router.query.authorId) {
      getAuthor(router.query.authorId);
    }
  }, [router]);

  useEffect(() => {
    if (loadArticleLength <= author?.articles?.length) {
      getArticles(author?.articles);
    }
  }, [loadArticleLength]);

  const loadMoreArticlesLength = () => {
    setLoadArticleLength(loadArticleLength + 5);
  };

  return (
    <div>
      <Head>
        <title>{author?.name || "Loading..."} | Melody.kr</title>
      </Head>
      <div className="w-full grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5">
        {/* Left Section */}
        {author ? (
          <div>
            <Author
              author={author}
              articles={articles}
              setloadMoreArticlesLength={loadMoreArticlesLength}
              contentLoading={contentLoading}
              articleLoading={articleLoading}
              loadArticleLength={loadArticleLength}
            />
          </div>
        ) : <AuthorNotFound data={authorNotFoundData} />}
        {/* right section */}
        <div className="w-full">
          <div className="mb-6">
            <Popular_cover  />
          </div>
          <div className="my-6">
            <MelodyCategores title={"Explore Other Section"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
