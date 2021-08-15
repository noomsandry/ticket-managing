import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { By } from "@angular/platform-browser";

import { ListPageComponent } from "./list-page.component";

describe("ListPageComponent", () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [StoreModule.forRoot([]), RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("delete", () => {
    const button = fixture.debugElement.query(By.css(".delete-btn"));
    console.log("BBBBB", button);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
