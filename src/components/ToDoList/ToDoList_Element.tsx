import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
type Props = {
    name:string;
    desc:string;
    onDeleteClick:()=>void;
}


const ToDoListElement = ({name, desc, onDeleteClick}:Props) => {

    //const name = props.name;

    return (
        <div style={{display:'flex',flexDirection:'column', gap:'1em',justifyContent:'center'}}>
            <div>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                    value={name}
                />
            </div>

            <div>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                    value={desc}
                />
            </div>

            <div>
                <Button
                    sx={{width:'220px'}}
                    variant="contained"
                    onClick={()=>onDeleteClick()}
                >Удалить
                </Button>

            </div>
        </div>
    );
};

export default ToDoListElement;