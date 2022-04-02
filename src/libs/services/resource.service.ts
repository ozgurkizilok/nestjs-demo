import { Model } from 'mongoose';
import { Audit } from 'src/models/audit';

export class ResourceService<T extends any, C extends any, U extends any> {
  constructor(protected readonly mongoModel: Model<T>) {}

  async create(model: C): Promise<T> {
    const audit = new Audit();
    audit.active = true;
    audit.createdBy = 'Admin';
    audit.createdDate = new Date();

    const createdModel = new this.mongoModel({ ...(model as object), ...audit });
    return await createdModel.save();
  }

  async findAll(): Promise<T[]> {
    return await this.mongoModel.find().exec();
  }

  async findById(id: string): Promise<T> {
    return await this.mongoModel.findById({ _id: id }).exec();
  }

  async delete(id: string): Promise<T> {
    return await this.mongoModel.findByIdAndRemove({ _id: id }).exec();
  }

  async update(id: string, dto: U): Promise<T> {
    let newModel = this.mongoModel.findOne({ _id: id }).exec();
    newModel = { ...newModel, ...(dto as object)};

    return await this.mongoModel
      .findByIdAndUpdate(id, newModel, { new: true })
      .exec();
  }
}
