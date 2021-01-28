
import React,{useContext,useState} from 'react';
import {BookContext} from "../contexts/BookContext";



const BookForm = () => {
    const {addBook}=useContext(BookContext);

    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        addBook(title,author);
        setTitle("");
        setAuthor("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} placeholder="Book Title" required
                onChange={e=>setTitle(e.target.value)}
            />
            <input type="text" value={author} placeholder="Book Author" required
                onChange={e=>setAuthor(e.target.value)}
            />
            <input type="submit" value="Add a book"/>
            
        </form>
    )
}

export default BookForm;
