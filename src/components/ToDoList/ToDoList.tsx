import React, {useState} from 'react';

type ListElement = {
    name:string,
    desc:string
}
const ToDoList = () => {
    const[name,setName] = useState('')
    const[desc,setDesc] = useState('')

    const[list,setList] = useState<ListElement[]>([])

    const AddElementInList = () =>{
        setList([...list,{
            name:name,
            desc:desc
        }])
        setName("")
        setDesc("")
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />

            <input
                type="text"
                value={desc}
                onChange={(e)=>setDesc(e.target.value)}
            />

            <button
                onClick={()=>AddElementInList()}

            >
                Добавить в список
            </button>

            {
                list.map((el,i)=><div key = {i}>
                    <div>
                        {el.name}
                    </div>

                    <div>
                        {el.desc}
                    </div>
                </div>)
            }
        </div>
    );
};

export default ToDoList;