
import {AddressModel} from "../model/AddressModel";
import {Config} from "../config/config";
import {ApiRepository, DefaultApiParser, List, Model} from  "tsmvc";
import AddressDataRepository from "./AddressDataRepository";

export default class AddressDataRepositoryImpl extends ApiRepository<AddressModel> implements AddressDataRepository
{
  getUrl() : string{
    return Config.BASEURL + '/addresses';
  }

  getAddresses(userId : string) : Promise<List<AddressModel>> {
      return this.buildRequestAndParseAsModelList(
        Config.BASEURL + '/user/' + userId + '/addresses',
        'GET',
        null
      );
  }
}
