import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const app = express();

// ✅ Correct Stripe initialization (capital "S" in Stripe)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ Use CORS to allow your frontend
app.use(cors({ origin: process.env.CLIENT_URL }));

// ✅ Parse JSON body
app.use(express.json());
console.log(
  "Stripe Key Loaded:",
  process.env.STRIPE_SECRET_KEY ? "✅ Yes" : "❌ No"
);

// ✅ Checkout Session API
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { product } = req.body;

    // ✅ Correct property name: "unit_amount" (not "unit_ammount")
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.image],
            },
            unit_amount: product.price * 100, // convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Use numeric port and console log message
app.listen(5000, () => {
  console.log("🔥 Server running on port 5000");
});
