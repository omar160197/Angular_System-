import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CustomerListComponent", () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: MyService, useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myService = TestBed.inject(MyService);
  });

  describe('method1', () => {
    it('should ...', () => {
      expect(component).toBeTruthy();
    });

    it.todo('should ...');
  });
})