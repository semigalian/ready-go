"use client"

import { useEffect } from "react"
import { sdk } from "@farcaster/miniapp-sdk"

export function MiniAppProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the MiniApp SDK when the app is ready
    const initializeMiniApp = async () => {
      try {
        await sdk.actions.ready()
        console.log("MiniApp SDK initialized successfully")
      } catch (error) {
        console.error("Failed to initialize MiniApp SDK:", error)
      }
    }

    initializeMiniApp()
  }, [])

  return <>{children}</>
}
