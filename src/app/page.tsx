"use client"

import SideBar from '@/components/Sidebar';
import React, { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  return (
      <>
        <div className="absolute w-full bg-blue-500 min-h-75"></div>
        <SideBar />
      </>
  );
}
