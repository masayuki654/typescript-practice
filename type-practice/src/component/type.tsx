import React from "react";

export type AppProps = {
    message: string; //文字列型
    count: number; //数値型
    disabled: boolean; //ブール型
    names: string[]; //文字列配列型
    something: null; //null型
    status: "waiting" | "success"; //リテラル型(その文字列通りが型)
    obj: object; //オブジェクト型
    obj2: {};
    obj3: {
        id: string;
        title: string;
    };
    objArr: {
        id: string;
        title: string;
    }[];
    dict1: {
        [key: string]: number;
    }; //key-value型の辞書
    dict2: Record<string, number>; //↑をジェネリクスでもの
    onClick: () => void; //引数なし、戻り値なし
    onChange: (id: number) => void; //引数は数値型のid、戻り値なし
    onChange2: (event: React.ChangeEvent<HTMLInputElement>) => void; //changeイベントの関数定義
    onClick2: (event: React.ChangeEvent<HTMLButtonElement>) => void; //clickイベントの関数定義
    optional?: number;
}

//関数の型宣言
const f: (foo: string) => number = func;
function func(arg: string): number {
    return Number(arg);
}

//クラスの型宣言
class Foo {
    method(): void {
        console.log("Hello, world!");
    }
}
const obj: Foo = new Foo();

//ジェネリクス
//SとTに好きな型を入れることで、いろいろな型のFoo2を作ることができる
interface Foo2<S,T> {
    foo: S;
    bar: T;
}
const obj2: Foo2<number, string> = {
    foo: 3,
    bar: "hi"
};
