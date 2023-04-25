import { useState } from "react";
import Student from "./Student";
import FormAdd from "./FormAdd";
export default function StudentList() {

    const [list, setList] = useState([
        {
            id: 1,
            name: "Le Meo",
            isComplete: false
        },
        {
            id: 2,
            name: "Nguyen Tho",
            isComplete: false
        },
    ])

    const addList = (textname) => {
        setList([...list, { id: 3, name: textname, isComplete: false }])
    }
    const deleteList = (id) => {
        const newList = list.filter((stu) => stu.id !== id);
        setList(newList);
    }
    return (
        <div className="studentlist">
            <FormAdd addList={addList} />
            {list.map((value, index) => {
                return <Student student={value} deleteList={deleteList} key={index}/>
            })}
        </div>
    )
}