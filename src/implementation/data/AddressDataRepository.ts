
import {AddressModel} from "../model/AddressModel";
import {DataRepository, List} from "tsmvc";

interface AddressDataRepository extends DataRepository<AddressModel> {
   getAddresses(userId : string) : Promise<List<AddressModel>>;
}
export default AddressDataRepository;
