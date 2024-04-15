import React, { useState } from "react";
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import { DeleteOutlineOutlined } from "@mui/icons-material";

const Todo = (props) => {
  //let item = props.item;

  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);
  const editItem = props.editItem;

  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  }

  const turnOffReadOnly = () => {
    setReadOnly(false);
  }

  const turnOnReadOnly = (e) => {
    if (e.key === "Enter"){
      setReadOnly(true);
    }
  }

  const deleteItem = props.deleteItem;
  const deletEventHandler = () =>{
    deleteItem(item);
  }

  const CheckboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  }

  return(
    <ListItem>
      <Checkbox checked={item.done} onChange={CheckboxEventHandler}/>
      <ListItemText>
        <InputBase
          inputProps={{"aria-label" : "naked", readOnly:readOnly}}
          onClick={turnOffReadOnly}
          onKeyDown={turnOnReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullWidth={true}
        />
      </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete Todo"
          onClick={deletEventHandler}>
            <DeleteOutlineOutlined/>
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>

  );
};

export default Todo;