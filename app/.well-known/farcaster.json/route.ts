export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || "https://traingo.xyz"
  
  return Response.json({
    "accountAssociation": {
      "header": "",
      "payload": "",
      "signature": ""
    },
    "miniapp": {
      "version": "1",
      "name": "Ready Go",
      "homeUrl": URL,
      "iconUrl": `${URL}/icon.svg`,
      "splashImageUrl": `${URL}/splash-image.png`,
      "splashBackgroundColor": "#1a1a1a",
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "Train Your Reaction Speed",
      "description": "A reaction training app for armwrestling athletes. Improve your start time with randomized audio signals and customizable intervals.",
      "screenshotUrls": [
        `${URL}/screenshot1.png`,
        `${URL}/screenshot2.png`,
        `${URL}/screenshot3.png`
      ],
      "primaryCategory": "sports",
      "tags": ["reaction", "training", "armwrestling", "sports", "fitness"],
      "heroImageUrl": `${URL}/hero-image.png`,
      "tagline": "React Faster, Win More",
      "ogTitle": "Ready Go - Armwrestling Reaction Trainer",
      "ogDescription": "Train your reaction speed for armwrestling with randomized audio signals.",
      "ogImageUrl": `${URL}/og-image.png`,
      "noindex": false
    }
  })
}
