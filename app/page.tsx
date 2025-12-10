import { ReactionTrainer } from "@/components/reaction-trainer"
import { MiniAppProvider } from "@/components/miniapp-provider"

export default function Home() {
  return (
    <MiniAppProvider>
      <ReactionTrainer />
    </MiniAppProvider>
  )
}
