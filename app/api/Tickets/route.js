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
