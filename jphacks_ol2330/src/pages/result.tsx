import Header from './components/header.tsx';
import React from 'react';
import { useState } from 'react';
import IndexPage from './random';

export default function Result() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div class="content">お勧め</div>
        <div>IndexPage</div>
        <IndexPage />
      </main>
    )
  }
