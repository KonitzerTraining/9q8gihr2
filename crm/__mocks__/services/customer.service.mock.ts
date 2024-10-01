import { of } from "rxjs";
import { customersMock } from "../api/customer";

export const createCustomerServiceMock = () => {

    const customerServiceMock = jasmine.createSpyObj(
        'CustomerService', 
        ['getAll', 'deleteById', 'getById', 'postCustomer', 'putCustomer']);  
    
        customerServiceMock.getAll.and.returnValue(of([]));
        customerServiceMock.deleteById.and.returnValue(of({}));
        customerServiceMock.getById.and.returnValue(of(customersMock[0]));
        customerServiceMock.postCustomer.and.returnValue(of(customersMock[0]));
        customerServiceMock.putCustomer.and.returnValue(of(customersMock[0]));
    
    return customerServiceMock;
}