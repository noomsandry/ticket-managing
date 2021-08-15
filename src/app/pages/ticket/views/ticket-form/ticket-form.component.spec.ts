import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { TicketFormComponent } from "./ticket-form.component";

describe("TicketFormComponent", () => {
  let component: TicketFormComponent;
  let fixture: ComponentFixture<TicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketFormComponent],
      imports: [
        StoreModule.forRoot([]),
        RouterModule.forRoot([]),
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
