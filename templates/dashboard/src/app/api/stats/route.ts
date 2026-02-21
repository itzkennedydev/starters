import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { count, eq } from "drizzle-orm";

export async function GET() {
  try {
    const [totalUsers] = await db.select({ count: count() }).from(users);
    const [activeUsers] = await db
      .select({ count: count() })
      .from(users)
      .where(eq(users.active, true));

    return NextResponse.json({
      success: true,
      stats: {
        totalUsers: totalUsers.count,
        activeUsers: activeUsers.count,
        inactiveUsers: totalUsers.count - activeUsers.count,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: { code: "STATS_FETCH_FAILED", message } },
      { status: 500 }
    );
  }
}
