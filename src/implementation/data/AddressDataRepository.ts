
import {DataRepository, List} from "tsmvc";
import {AddressModel} from "../model/AddressModel";

interface AddressDataRepository extends DataRepository<AddressModel> {
   getAddresses(userId : string) : Promise<List<AddressModel>>;
}
export default AddressDataRepository;
