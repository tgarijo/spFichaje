

import { getManager, Repository } from 'typeorm';

import { IEntity } from '../entity/IEntity'

export abstract class connectManager {

    repository: Repository<any>;
    
    public getConnectManager (entity: IEntity){

        return getManager().getRepository(entity);
    }
}