
import React,{createContext,useState} from 'react';
import { v1 as uuidv1 } from 'uuid';



export const BookContext=createContext();


const BookContextProvider = (props) => {
    const [books,setBooks]=useState([
        {title:"Road To Mecca", author:"Muhammad Asad", id:1},
        {title:"Islam and Secularism", author:"Syed Muhammad", id:2},
        {title:"Weapons of mass instruction", author:"John Taylor", id:3},
        {title:"The Divine Reality", author:"Hamza Tzortzis",id:4}
        ]);

    const addBook=(title,author)=>{
        setBooks([...books,{title,author, id:uuidv1() }])
    };

    const removeBook=id=>{
        setBooks(books.filter(book=>book.id!==id))
    }

    return (
        <BookContext.Provider value={{ books,addBook,removeBook }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
