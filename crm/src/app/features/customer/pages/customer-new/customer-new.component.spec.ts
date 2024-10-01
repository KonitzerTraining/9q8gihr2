import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewComponent } from './customer-new.component';
import { CustomerService } from '../../services/customer.service';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { MockComponents } from 'ng-mocks';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';

describe('CustomerNewComponent', () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock()
    
    await TestBed.configureTestingModule({
      declarations: [
        CustomerNewComponent,
        MockComponents(ErrorBoxComponent, LoadingIndicatorComponent, CustomerFormComponent)
      ],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
