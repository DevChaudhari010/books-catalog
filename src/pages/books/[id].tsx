import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { IBook } from "@types";
import styles from "./Books.module.css";
import { bookApi } from "@lib/apis";

type BookProps = {
  book: IBook | null;
  error: boolean;
};

const BookDetails = ({ book, error }: BookProps) => {
  if (error) {
    return (
      <div>Failed to load book Details. Please try again after sometime</div>
    );
  }

  const { title, year, description } = book || {};
  return (
    <div className={styles.container}>
      {/* adding meta tag to improve SEO   */}
      <Head>
        <title>{`${title} || ${process.env.NEXT_PUBLIC_APPLICATION_NAME} Catalog`}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
      </Head>
      <h2>{title}</h2>
      <span>{year}</span>
      <p>{description}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookId = (params?.id as string) || "";
  const { book, error } = await bookApi.getBookDetails(bookId);

  if (!book) {
    return {
      notFound: true,
    };
  }
  return { props: { book, error } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on Books
  const { books } = await bookApi.getBooks();
  const paths =
    books?.map((book) => ({
      params: { id: book._id.toString() },
    })) || [];

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};

export default BookDetails;
