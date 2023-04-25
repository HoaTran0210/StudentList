import { TiDeleteOutline } from 'react-icons/ti';
import { CiEdit } from 'react-icons/ci';
export default function Student(props){
    const {student, deleteList}=props
    return(
        <div className="student">
            <span>{student.name}</span>
            <CiEdit/>
            <TiDeleteOutline  onClick={()=>deleteList(student.id)

            }/>
        </div>
    )
}