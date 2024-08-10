import React, { useEffect, useState } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const baseURL = "https://jsonplaceholder.typicode.com/users";



export default function Login() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get(baseURL).then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);

    return (
      <div style={{width: "95%", margin: "auto", padding: 52}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">UserName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {post.map((item, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {item?.name}
              </TableCell>
              <TableCell align="right">{item?.username}</TableCell>
              <TableCell align="right">{item?.email}</TableCell>
              <TableCell align="right">{item?.address["city"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
      </div>
    );
}
