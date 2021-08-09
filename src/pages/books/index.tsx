import { GetStaticProps } from "next";
import { IBook } from "@types";
import styles from "./Books.module.css";
import { bookApi } from "@lib/apis";
import NavigationCard from "@components/navigation-card";

type BooksProps = {
  books: IBook[] | null;
  error: boolean;
};

const BookList = ({ books, error }: BooksProps) => {
  if (error)
    return <div>Failed to load books. Please try again after sometime</div>;

  return (
    <div className={styles.container}>
      <h2>To know more about book click on Book</h2>
      <div className={styles.grid}>
        {books?.map(({ title, _id }) => (
          <NavigationCard
            key={_id}
            name={title}
            href={`/books/${encodeURIComponent(_id)}`}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { books, error } = await bookApi.getBooks();
  return {
    props: { books, error },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 10, // In seconds
  };
};

export default BookList;
