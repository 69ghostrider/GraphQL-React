import React from 'react'
import Header from './components/header';
import Footer from './components/footer';
import Movies from './containers/movies';
import AddMovie from './components/addMovie';

export default function App() {
  return (
    <div>
      <Header/>
      <Movies/>
      <AddMovie/>
      {/* <Footer/> */}
    </div>
  )
}
