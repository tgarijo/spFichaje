export interface IGenericService {
  save(data: object) : Promise<any>;
  update(id: number, data: object): void;
  delete(id: number): Promise<any>
  get() :  Promise<any>;
  getById(id: number): Promise<any>;

}