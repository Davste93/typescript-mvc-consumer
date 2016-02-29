import {List, Model, DataRepository} from "tsmvc";

import {UserModel} from "../model/UserModel";
import {AddressModel} from "../model/AddressModel";


interface UserDataRepository extends DataRepository<UserModel> {

}

export default UserDataRepository;
