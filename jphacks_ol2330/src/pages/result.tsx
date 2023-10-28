import React from 'react'; // Reactもインポートする必要があります
import { useState } from 'react';
import IndexPage from './random';

export default function Result() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header>
          <h1>ほんびより</h1>
        </header>
        <div class="content">お勧め</div>
        <div>IndexPage</div>
        <IndexPage />
      </main>
    )
  }
  
