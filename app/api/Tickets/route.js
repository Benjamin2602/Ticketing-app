import Ticket from "../../models/Ticket";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    //create => mongoose function
    await Ticket.create(ticketData);

    return NextResponse.json({
      status: 200,
      message: "Ticket created successfully",
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}

//getting all the tickets

export async function GET() {
  try {
    const tickets = await Ticket.find();
    console.log(tickets);
    return NextResponse.json({
      status: 200,
      message: "Tickets fetched successfully",
      tickets,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
      status: 500,
    });
  }
}
