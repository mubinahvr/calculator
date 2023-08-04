import {
  StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image,
  ScrollView, Alert, Pressable
} from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [result, setResult] = useState('');

  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [opr, setopr] = useState('')

  const ClearAll = () => {
    setResult('');
    setnum1('');
    setnum2('');
    setopr('')
  }
  const Percent = () => {
    setResult(num1 / 100);
    setnum1('')
    setnum2('')
  }
  const  Changesgn=()=>{
  
 if(num1>0){
  let val="-"+num1
  setResult(val)
 }
 if(result[0] === '-'){
  
let new1=result.slice(1);
setResult(new1)


 }

   
  }
  const DATA = [

    {
      id: '12',
      title: 'AC',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-white',
      textstle: "text-black text-3xl font-semibold"
    },
    {
      id: '13',
      title: '±',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-white',
      textstle: "text-black text-3xl font-semibold"
    },
    {
      id: '13',
      title: '%',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-white',
      textstle: "text-black text-3xl font-semibold"
    },
    {
      id: '1',
      title: '7',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '2',
      title: '8',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '3',
      title: '9',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '4',
      title: '4',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '5',
      title: '5',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '6',
      title: '6',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '7',
      title: '1',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '8',
      title: '2',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '9',
      title: '3',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '10',
      title: '0',
      contentstyle: 'm-2 w-44 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },
    {
      id: '11',
      title: '.',
      contentstyle: 'm-2 w-20 rounded-full h-20 justify-items-center items-center flex justify-center self-center content-center bg-slate-700',
      textstle: "text-white text-3xl font-semibold"
    },

  ];



  let operatorList: string[] = ['÷', 'X', '-', '+', '='];

  function calculation(num1: number, num2: number, opr: string) {
    let finalresult = 0
 
    switch (opr) {
      case '+':
        finalresult = num1 + num2;
        setnum1('')
        setnum2('')
        break;
      case '-':
        finalresult = num1 - num2;
        setnum1('')
        setnum2('')
        break;
      case 'X':
        finalresult = num1 * num2;
        setnum1('')
        setnum2('')
        break;
      case '÷':
        finalresult = num1 / num2;
        setnum1('')
        setnum2('')
        break;

    }
    return finalresult;
  }
  return (

    <View className="bg-black h-100 flex h-full ">
      <View className="p-2 m-10 h-40">
        <Text className="text-white text-6xl absolute bottom-0 right-0 h-16 ">{result ? result : 0}</Text>
      </View><View className="flex flex-row ">
        <View className="w-3/4 relative ">


          <FlatList

            numColumns={3}
            data={DATA}
            renderItem={({ item }) =>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    switch (item.title) {
                      case "AC":
                        ClearAll();

                        break;
                      case "%":
                        Percent();
                        break;
                        case "±":
                        Changesgn();
                        break;
                      default:
                        let res = ''
                        if (num1 !== "" && opr !== "") {
                          res = num2 + item.title
                          setnum2(res)
                        }
                        else {
                          res = num1 + item.title
                          setnum1(res);
                        }
                        setResult(res)
                        break;
                    }

                  }}
                  className={item.contentstyle}>
                  <Text className={item.textstle}>{item.title}</Text>
                </TouchableOpacity>
              </View>

            } />



        </View>

        <View className="w-1/4 justify-start flex justify-items-start">

          <View >
            <FlatList
              data={operatorList}
              renderItem={({ item }) =>
                <View>
                  <TouchableOpacity onPress={() => {
                    switch (item) {
                      case '=':

                        setResult(calculation(parseFloat(num1), parseFloat(num2), opr)?.toString())
                        break;
                    }
                    setopr(item)
                  }}
                    className="m-2 w-20 rounded-full h-20  items-center  justify-center bg-orange-400">
                    <Text className="text-white text-4xl" >{item}</Text>
                  </TouchableOpacity>
                </View>
              } />
          </View>

        </View>


      </View></View>


  )
}

export default App

const styles = StyleSheet.create({})