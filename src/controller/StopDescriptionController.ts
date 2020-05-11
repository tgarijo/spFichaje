import { Request, Response } from "express";
import { StopDescriptionService } from "../Service/StopDescriptionService";
import { responseData } from "../utils/responseData";
import { Stopdescription } from "../entity/StopDescription";

export class StopDescriptionController {
  // save
  public async save(req: Request, res: Response) {
    const stopDescription: Stopdescription = req.body;

    try {
      const result = await new StopDescriptionService(Stopdescription).save(
        stopDescription
      );
      return res.status(201).json(responseData(result, null)).send();
    } catch (error) {
      return res.status(500).json(responseData(null, error)).send();
    }
  }

  // delete
  public async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const result = await new StopDescriptionService(
        StopDescriptionService
      ).delete(id);
      return res.status(201).json(responseData(result, null)).send();
    } catch (error) {
      return res.status(500).json(responseData(null, error)).send();
    }
  }

  // update
  public async update(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const data: StopDescriptionService = req.body as StopDescriptionService;

    try {
      const result = await new StopDescriptionService(
        StopDescriptionService
      ).update(id, data);
      return res.status(201).json(responseData(result, null)).send();
    } catch (error) {
      return res.status(500).json(responseData(null, error)).send();
    }
  }

  // getById
  public async getById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const result = await new StopDescriptionService(
        StopDescriptionService
      ).getById(id);
      return res.status(201).json(responseData(result, null)).send();
    } catch (error) {
      return res.status(500).json(responseData(null, error)).send();
    }
  }

  // getAll
  public async get(req: Request, res: Response) {
    try {
      const result = await new StopDescriptionService(
        Stopdescription
      ).get();
      return res.status(200).json(responseData(result, null)).send();
    } catch (error) {
      return res.status(500).json(responseData(null, error)).send();
    }
  }
}
