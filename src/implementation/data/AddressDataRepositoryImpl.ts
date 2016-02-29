// import {ApiRepository} from "../../../../src/classes/helper/ApiRepository";
// import {AddressModel} from "../model/AddressModel";
// import {Config} from "../config/config";
//
// import AddressDataRepository from "./AddressDataRepository";
//
// export default class AddressDataRepositoryImpl extends ApiRepository<AddressModel> implements AddressDataRepository
// {
//   getUrl() : string{
//     return Config.BASEURL + '/addresses';
//   }
//
//   //How will this work by auto-generation??!
//     getAddresses(userId : string) : Promise<List<AddressModel>> {
//         return this.buildRequestAndParseAsList<AddressModel>(
//           Config.BASEURL + '/user/' + userId + '/addresses',
//           'GET',
//           new DefaultApiParser<AddressModel>(new AddressModel()),
//           null
//         )
//     }
// }
