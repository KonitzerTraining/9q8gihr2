import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewComponent } from './customer-new.component';
import { CustomerService } from '../../services/customer.service';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { MockComponent, MockComponents } from 'ng-mocks';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';
import { customersMock } from '../../../../../../__mocks__/api/customer';
import { RouterModule } from '@angular/router';
import { CustomerIndexComponent } from '../../customer-index.component';
import { throwError } from 'rxjs';

describe('CustomerNewComponent', () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock()

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          {
            path: 'dashboard',
            component: MockComponent(CustomerIndexComponent)
          }
        ]),
      ],
      declarations: [
        CustomerNewComponent,
        MockComponents(ErrorBoxComponent, LoadingIndicatorComponent, CustomerFormComponent)
      ],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock }
      ],
      teardown: { destroyAfterEach: false }  // This is needed to avoid the error: 'Cannot read property 'destroy' of undefined'
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createCustomer', () => {
    it('should call customerService.postCustomer with the provided customer', () => {
      const customer = customersMock[0];
      component.createCustomer(customer);
      expect(customerServiceMock.postCustomer).toHaveBeenCalledWith(customer);
    });

    it('should thrwo an error if the customerService.postCustomer fails', () => {
      const message = 'Error';
      customerServiceMock.postCustomer.and.callFake(() => {
        return throwError(() => new Error(message));
      });

      const customer = customersMock[0];
      component.createCustomer(customer);
      expect(component.errorMessage).toBe(message);
    });
  });
});
