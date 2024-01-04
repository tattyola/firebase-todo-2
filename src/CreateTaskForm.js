import React, {useState} from 'react';
import {Timestamp, addDoc, collection} from "firebase/firestore";
import db from "./connectDB";

const CreateTaskForm = () => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(collection(db, 'tasks'), {
            title,
            completed: false,
            created: Timestamp.now()
        }).then(res => console.log(res))
            .catch(err => console.log(err))
        setTitle('')
    }

    return (
        <form className='input-group mb-3'>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='Enter task ...'
                className='form-control'
            />
            <button
                type='submit'
                className='btn btn-primary'
                onClick={handleSubmit}
            >Add task
            </button>
        </form>
    );
};

export default CreateTaskForm;
