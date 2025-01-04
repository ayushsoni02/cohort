import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const client = new PrismaClient();

app.get("/users",async (req,res)=> {
    const user = await client.user.findMany();
    res.json({
        user
    })
})

app.get("/users/:id",async (req,res)=> {
    const id = req.params.id as unknown as number;
    const user = await client.user.findFirst({
        where:{
            id:Number(1)
        },
        select:{
            todos:true,
            username:true,
            password:true
        }
    });
    res.json({
        user
    })
})

// async function createUser() {
//     await client.user.create({
//         data: {
//             username: "Ayush",
//             password: "123123",
//             age: 12,
//             city:"Sydney"
//         }
//     })
// }


// async function deleteUser() {
//     await client.user.delete({
//         where: {
//             id:1
//         }
//     })
// }


// async function UpdateUser() {
//     await client.user.update({
//         where: {
//             id:1
//         },
//         data:{
//             username:"ayush01"
//         }
//     })
// }

// UpdateUser();


// async function FindUser() {
//     const user = await client.user.findFirst({
//         where: {
//             id:1
//         },
//         include:{
//             todos: true
//         }
//     })

//     console.log(user);
// }

// FindUser();

app.listen(3000);