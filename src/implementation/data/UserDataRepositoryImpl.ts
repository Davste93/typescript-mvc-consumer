import {Config} from "../config/config";
import {ApiRepository, List, Model} from  "tsmvc";

import {UserModel} from "../model/UserModel";
import UserDataRepository from "./UserDataRepository";
import {AddressModel} from "../model/AddressModel";

export default class UserDataRepositoryImpl extends ApiRepository<UserModel> implements UserDataRepository
{

  getUrl() : string{
    return Config.BASEURL + '/users';
  }





}
