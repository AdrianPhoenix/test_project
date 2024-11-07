import { NextResponse } from "next/server";
import { conn } from "@/libs/mariadb"; 

export async function GET (){
    const  result = await conn.query('SELECT * from test')
    console.log(result)
    return NextResponse.json(result)
}