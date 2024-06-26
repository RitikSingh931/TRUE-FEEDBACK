'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';
import Home from '@/app/page';
import Navbar from './Navbar';

import { useRouter } from 'next/navigation';

function Container() {
  const { data: session } = useSession();
   const user : User = session?.user;
   const router=useRouter()

  return (
    
      
    <div className="h-full flex flex-col">
        {!session ? (
          <Home />
        ) : (

          
          <Navbar />
        )}
        </div>
      
  );
}

export default Container;