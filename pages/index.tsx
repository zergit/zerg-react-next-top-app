//import Image from 'next/image';
import React from 'react';
import { Button, Htag } from '../components';


export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
    </>
  );
}
