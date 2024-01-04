import React, {useEffect, useState} from 'react';
import {addDoc, collection, Timestamp, doc, getDoc, updateDoc} from "firebase/firestore";
import db from "./connectDB";

const EditTaskForm = (props) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        if(!props.id) return;
        getDoc(doc(db, 'tasks', props.id))
            .then(doc => setTitle(doc.data().title))
            .catch(err => console.log(err))
    }, [props.id]);
    const handleSubmit = (e) => {
        e.preventDefault()
        updateDoc(doc(db, 'tasks', props.id), {title})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        props.onCancel();
        setTitle('');
    }

    const handleCancel = () => {
        props.onCancel();
        setTitle('');
    }

    if(!title || !props.id) return null;

    return (
        <form>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='enter task ...'
            />
            <button
                type='submit' onClick={handleSubmit}>Save
            </button>
            <button
                type='submit' onClick={handleCancel}>Cancel
            </button>
        </form>
    );
};

export default EditTaskForm;
