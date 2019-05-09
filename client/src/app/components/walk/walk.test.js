import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from 'react-testing-library';
import Walk from '.';
const dummyWalk = {location: "boop", difficulty: "baa"};

test('Does Methods component render', () => {
  // const isRendered = render(
  //   <Walk data={dummyWalk} />
  // );
  // expect(isRendered).toBeTruthy();
  const poop = <Walk data={dummyWalk} />;
  console.log(poop);
});
