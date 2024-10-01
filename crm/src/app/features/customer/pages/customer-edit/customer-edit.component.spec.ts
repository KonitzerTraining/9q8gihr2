import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditComponent } from './customer-edit.component';
import { CustomerService } from '../../services/customer.service';
import { MockComponents } from 'ng-mocks';
import { ErrorBoxComponent } from '../../../../core/components/error-box/error-box.component';
import { LoadingIndicatorComponent } from '../../../../core/components/loading-indicator/loading-indicator.component';
import { CustomerFormComponent } from '../../forms/customer-form/customer-form.component';
import { createCustomerServiceMock } from '../../../../../../__mocks__/services/customer.service.mock';
import { RouterModule } from '@angular/router';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;
  let customerServiceMock: jasmine.SpyObj<CustomerService>;
  
  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock()
    
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        CustomerEditComponent,
        MockComponents(ErrorBoxComponent, LoadingIndicatorComponent, CustomerFormComponent)
      ],
      providers: [
        { provide: CustomerService, useValue: customerServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
