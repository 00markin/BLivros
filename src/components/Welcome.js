import React from 'react';
import { Link } from 'react-router-dom';
import firebase from './Db';

const Welcome = () => {
  const getAllbooks = () => {
    const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  db.collection('books').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  }
  getAllbooks();
  return (
  <div className="welcome-page">
    <h1>
      <i className="fas fa-book-open" />
      Catálogo de livros!
    </h1>
    <Link to="/query" className="main-page-link">
      <i className="fas fa-search" />
      Procure um livro pelo título ou autor.
    </Link>
  </div>
);
}

export default Welcome;
