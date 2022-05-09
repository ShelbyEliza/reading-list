import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { useCollection } from "../hooks/useCollection";
/** Not using realtime data:
 import { useState, useEffect } from "react";
 import { db } from "../firebase/config";
 import { collection, getDocs } from "firebase/firestore";
 
 */

export default function Home() {
  const { documents: books } = useCollection("books");
  /** Not using realtime data:
  const [books, setBooks] = useState(null);

   useEffect(() => {
     const ref = collection(db, "books");
     
     getDocs(ref).then((snapshot) => {
       let results = [];
       snapshot.docs.forEach((doc) => {
         results.push({ id: doc.id, ...doc.data() });
        });
        setBooks(results);
      });
    }, []);
    * */

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
