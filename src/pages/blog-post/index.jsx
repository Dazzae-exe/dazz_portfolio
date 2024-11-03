import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { ScrollRestoration } from "react-router-dom";
import { PortfolioProvider } from "../../context";
import { IconLoader } from "@tabler/icons-react";

export default function BlogPost() {
  const { loadTimeout, loading } = React.useContext(PortfolioProvider);
  const location = useLocation();
  const blogPost = BLOG_POSTS.find(
    (post) => post.id === location.pathname.split("/").pop()
  );
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <ScrollRestoration />
      {blogPost === undefined ? (
        <div>
          <Link
            to="/"
            className={`${buttonVariants({ variant: "ghost" })} mb-8`}
          >
            <IconArrowLeft className="mr-2 h-4 w-4" />
            Return
          </Link>
          <h1>No se encontro el post, regresa a la página principal.</h1>
        </div>
      ) : (
        <>
          {!loading ? (
            <>
              <Link
                to="/"
                className={`${buttonVariants({ variant: "ghost" })} mb-8`}
              >
                <IconArrowLeft className="mr-2 h-4 w-4" />
                Return
              </Link>
              <article className="prose prose-stone dark:prose-invert">
                <h1 className="mb-4">{blogPost?.title}</h1>
                <p className="text-lg mb-6">{blogPost?.description}</p>
                <img
                  src={blogPost?.images}
                  alt="Minimalist web design example"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h2 className="mb-4">{blogPost?.subtitle}</h2>
                <p className="mb-6">{blogPost?.description}</p>

                <h3>Tecnologias utilizadas</h3>
                <ul className="list-disc pl-6 mb-6">
                  {blogPost?.listContent?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <p className="mb-6">{blogPost?.content}</p>
              </article>
            </>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
              <IconLoader className="animate-spin text-primary" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
