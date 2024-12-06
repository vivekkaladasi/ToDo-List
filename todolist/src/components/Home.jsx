// import React, { useEffect, useState } from "react";
// import { Create } from "./Create.jsx";
// import axios from "axios";
// import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
// import { BsFillTrashFill } from "react-icons/bs";

// export const Home = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/get")
//       .then((result) => setTodos(result.data))
//       .catch((error) => console.log(error));

//   });

//   const handleEdit =( id) =>{
//     axios
//     .put('http://localhost:3000/update/'+id)
//     .then((result) => {
//       location.reload
//     })
//     .catch((error) => console.log(error));
  
//   }

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:3000/delete/' + id)
//       .then((result) => {
//         location.reload(); 
//       })
//       .catch((error) => {
//         console.error("Error deleting the task:", error);
//       });
//   };
//   }
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <Create />

//       {todos.length === 0 ? (
//         <div>
//           {" "}
//           <h2>No Record</h2>
//         </div>
//       ) : (
//         todos.map((todo) => (
//           <div className="task">
//             <div className="checkbox"  onClick={() =>handleEdit(todo._id)}>
//             {todo.done ? <BsFillCheckCircleFill></BsFillCheckCircleFill> :
//               <BsCircleFill className="icon" />
//             }
             
//               <p className={todo.done ? "line_through" : " " }>{todo.task}</p>
//             </div>
//             <div>
//               <span>
//                 <BsFillTrashFill className="icon" onClick={() =>handleDelete(todo._id)}/>
//               </span>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { Create } from "./Create.jsx";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.log(error));
  }, []); // Added dependency array to prevent infinite requests

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((error) => {
        console.error("Error deleting the task:", error);
      });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Create />

      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="task" key={todo._id}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

