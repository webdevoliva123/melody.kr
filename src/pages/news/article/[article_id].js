import melodyapi from "@/apis/_axios";
import { GetArticleByIdAPI } from "@/apis/_list";
import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import Article from "@/components/k-news/article.js/Article";
import Popular_cover from "@/components/k-news/categories/Popular_cover";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect }  from "react";

const Article_Data = () => {
  const router = useRouter()
  const [article,setArticle] = useState(null)
  const [loading,setLoading] = useState(true)

  const getArticleById = async () => {
    setLoading(true)
   try {

    const articleById = await melodyapi.get(GetArticleByIdAPI(router?.query?.article_id?.split('_')[1]))
    setArticle(articleById?.data?.data)
    setLoading(false)
    return 
   } catch (error) {
      console.log(error);
      setLoading(false)
      return
   }
  }

  useEffect(() => {
    if(router.query.article_id){
      getArticleById()
    }
  },[router.query.article_id])
  
  return (
    <>
      <Head>
        <title>
        { loading ? 'Loading Melody Article' : article?.title ? article?.title : '404 Article Not Found'} | Melody.kr
        </title>
      </Head>
      <div className="w-full grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5">
        {/* Left Section */}
        <div>
          <Article loading={loading} data={article} />
        </div>
        {/* right section */}
        <div className="w-full">
          <div className="mb-6">
            <Popular_cover />
          </div>
          <div className="my-6">
              <MelodyCategores title={"Explore Other Section"} />
            </div>
        </div>
      </div>
    </>
  );
};

export default Article_Data;
