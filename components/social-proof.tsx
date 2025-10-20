import Image from "next/image"

const logos = [
  { name: "Google", src: "/google.png" },
  { name: "WordPress", src: "/wordpress.png" },
  { name: "Zoom", src: "/zoom.png" },
  { name: "OpenAI", src: "/openai.png" },
  { name: "Facebook", src: "/facebook.png" },
  { name: "Stripe", src: "/stripe.png" },
  { name: "Twilio", src: "/twilio.png" },
  { name: "PayPal", src: "/paypal.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Slack", src: "/slack.png" },
]

export default function SocialProof() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="marquee">
          <ul className="marquee-track">
            {logos.concat(logos).map((logo, index) => {
              const sizeClass =
                logo.name === "Stripe" ? "logo-img--lg" :
                logo.name === "Facebook" || logo.name === "Zoom" ? "logo-img--sm" :
                ""
              return (
                <li key={`${logo.name}-${index}`} className="px-8 md:px-12 inline-flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className={`logo-img object-contain ${sizeClass}`}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
