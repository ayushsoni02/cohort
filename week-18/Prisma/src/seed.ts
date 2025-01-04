import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyData(){
    await client.user.create({
        data:{
            username:"ayush232",
            password:"123321",
            city:"Delhi",
            age:20,
            todos:{
                create:{
                    description:"go to gym",
                    title:"go to gym",
                    done : true
                }
            }
        }
    })
}

createDummyData();