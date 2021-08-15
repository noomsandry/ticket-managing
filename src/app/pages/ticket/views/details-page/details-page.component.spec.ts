import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { DetailsPageComponent } from "./details-page.component";

describe("DetailsPageComponent", () => {
  let component: DetailsPageComponent;
  let fixture: ComponentFixture<DetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPageComponent],
      imports: [StoreModule.forRoot([]), RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
