import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "@app/shared/shared.module";

import { PageLayoutComponent } from "./page-layout.component";

describe("PageLayoutComponent", () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
