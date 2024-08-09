import React from 'react';
import Navbar from './components/Navbar';
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower 
        mouseOptions={{
          backgroundColor: "White", 
          zIndex: 999,
          followSpeed: 1.7,
          // scale: 5,
        }}>
      <Navbar />
      <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "pink",
          zIndex: 999,
          followSpeed: 1.7,
          // scale: 5,
        }}>
      <Services/>
      <Banner />
      </UpdateFollower>
    </main>
  );
}

export default App;
