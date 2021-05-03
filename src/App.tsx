import React from 'react';
import logo from './logo.svg';
import './App.css';

const name: string = "hello";
let num = 2;
let bool = true;
let array = [true,false,true];

interface NAME {
  first: string;
  last: string | null;
}
let nameObj : NAME = {
  first: "M",
  last: "N"
};

const func1 = (x:number,y:number) => {
  return x + y;
}
// IntersectionTypes
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 21,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};
//Union Types
let value: boolean | number;
value = true;
value = 2;

let arrUni: (number | string)[];
arrUni = [0,1,"test"];

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "h3llo";

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};

// keyof
type KEYS = {
  primary: string;
  secondary: string;
}
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "SOCCER",
  baseball: "Baseball",
}
let keySports: keyof typeof SPORTS;
keySports = "soccer";

// enum
 enum OS {
   Windows,
   Mac,
   Linux,
 }

 interface PC {
   id: number,
   OSType: OS;
 }
 const PC1:PC = {
    id: 1,
    OSType: OS.Windows,
 }
 const PC2:PC = {
  id: 2,
  OSType: OS.Mac,
}
// 型の互換性
const comp1 = "test";
let comp2:string = comp1;

// Generics  ジェネリックス
// 型を動的に変更出来る
interface GEN<T>{
  item: T;
}
const gen0: GEN<string> = { item: "hello"}
const gen1: GEN<number> = { item: 2 };

interface GEN1<T extends string | number>{
  item: T;
}
const gen2: GEN<string> = { item: "hello" };
const gen3: GEN<number> = { item: 2 };

function funcGen<T>(props: T){
  return {item: props}
}
const gen4 = funcGen("test");
const gen5 = funcGen<string | null>(null);

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
