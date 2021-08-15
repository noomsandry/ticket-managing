import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TicketCardComponent } from "./ticket-card.component";
import { By } from "@angular/platform-browser";
import { User } from "@app/shared/interfaces/user.interface";
import { Ticket } from "@app/shared/interfaces/ticket.interface";

describe("TicketCardComponent", () => {
  let component: TicketCardComponent;
  let fixture: ComponentFixture<TicketCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("card mast show ticket info", () => {
    component.ticket = <Ticket>{
      id: 1,
      assigneed: <User>{
        name: "Laurent",
      },
      description: "My Ticket",
    };

    fixture.detectChanges();
    const assigneedElement = fixture.debugElement.query(
      By.css(".assigneed-value")
    ).nativeElement;
    const descriptionElement = fixture.debugElement.query(
      By.css(".description-value")
    ).nativeElement;

    expect(assigneedElement.innerText).toContain("Laurent");
    expect(descriptionElement.innerText).toContain("My Ticket");
  });
});
