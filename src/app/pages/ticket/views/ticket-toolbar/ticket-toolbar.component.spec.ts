import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { TicketToolbarComponent } from "./ticket-toolbar.component";

describe("TicketToolbarComponent", () => {
  let component: TicketToolbarComponent;
  let fixture: ComponentFixture<TicketToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketToolbarComponent],
      imports: [StoreModule.forRoot([]), RouterModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("clear button disabled when no assigneed id", () => {
    const clearBtn = fixture.debugElement.query(
      By.css(".clear-btn")
    ).nativeElement;
    expect(clearBtn.hasAttribute("disabled")).toBeTruthy();
  });

  it("clear button enabled when has assigneed id", () => {
    const clearBtn = fixture.debugElement.query(
      By.css(".clear-btn")
    ).nativeElement;
    component.form.controls["assigneeId"].setValue(111);
    fixture.detectChanges();
    expect(clearBtn.hasAttribute("disabled")).toBeFalsy();
  });
});
