import { IResponseData } from "./IResponseData";

export let responseData =  (data: string | null | object, error: string |null )  =>{
  let DataResponse : IResponseData = {data:data, error:error};
  return DataResponse;
}
