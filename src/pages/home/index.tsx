import React, {useEffect, useState} from 'react';

import Modal from '../../component/modal';

import './home.css';

const Home=(props:any)=> {
const [university, setUniversity]=useState<any>([])
const [selectedData, setSelectedData]=useState<any>({})
const [isOpen, setIsOpen]=useState<boolean>(false)

const datas = (['number','name','web_pages'])
const headers = ['No', 'Nama Universitas', 'Website']
const username = localStorage.getItem('user')

useEffect(()=>{
    fetch('http://universities.hipolabs.com/search?country=Indonesia').then(
        (res)=>{
            return res.json();
        }
    ).then(
        (resJson)=>{
            setUniversity(resJson);
        }
    )
},[])


const onSelectRow =(item:any, index:number)=>{
    const dataToSave = {
        no:index,
        name:item.name,
        website:item.web_pages
    }
    setSelectedData(dataToSave)
    setIsOpen(true)
}

const onCloseModal =()=>{
    setIsOpen(false)
}


  return (
    <div className="container">
        <p className='title'>
            Welcome, {username}
        </p>

        {university.length!==0?
            <div className='table'>
                <table >
                    <thead>
                        <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        </tr>
                    </thead>

                    <tbody>
                    {university.map((row:any, rowIndex:number) => (
                        <tr key={rowIndex} onClick={()=>onSelectRow(row,rowIndex+1)}>
                            {datas.map((item: any, index) => {
                                return item==='number'?
                            (
                                <td key={item}>{rowIndex+1}</td>
                            ):(
                                <td key={item}>{row[item]}</td>
                            )
                        })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        :
            <p>Loading...</p>
        }

       {isOpen && <Modal 
        onClose={onCloseModal} 
        data={selectedData}/>}

    </div>
  );
}

export default Home;
