import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;

  beforeEach(async () => {

    customerServiceMock = createCustomerServiceMock()

    await TestBed.configureTestingModule({
      declarations: [ 
        CustomerListComponent,
        MockComponents(ErrorBoxComponent, LoadingIndicatorComponent)
      ],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
