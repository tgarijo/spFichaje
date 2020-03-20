import express, { Request, Response, response } from "express";

import { createConnection, Connection, getManager } from "typeorm";
import { Company } from "../entity/Company";

export  async function indexWelcome(req: Request, res: Response) {
    

    console.log('indexWelcome');

    return res.json('indexWelcome');
}

