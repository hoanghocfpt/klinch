import { connectToDatabase } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
export async function POST(request) {

    const { email } = await request.json()
    console.log(email);
    try {
        await connectToDatabase();

        // Check nếu email đã có
        const existing = await Waitlist.findOne({ email });
        if (existing) {
        return new Response(JSON.stringify({ message: "You’re already on the waitlist!" }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        }

        // Lưu email vào DB
        await Waitlist.create({ email });

        return new Response(JSON.stringify({ message: "Thanks! You're on the waitlist." }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error("Error saving email:", err);
        return new Response(JSON.stringify({ message: "Server error." }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
