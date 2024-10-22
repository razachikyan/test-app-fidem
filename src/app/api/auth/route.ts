import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const response = NextResponse.json({
      message: "User authenticated",
      email,
    });

    response.cookies.set("user", email, { path: "/", httpOnly: true });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const cookies = req.headers.get("cookie");

  if (!cookies || !cookies.includes("user=")) {
    return NextResponse.json(
      { message: "User is not authenticated" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { message: "User is authenticated" },
    { status: 200 }
  );
}