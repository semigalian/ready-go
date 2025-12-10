"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Zap, Hand, Play, Square } from "lucide-react"

type GameState = "idle" | "running"

export function ReactionTrainer() {
  const [gameState, setGameState] = useState<GameState>("idle")
  const [isSignalActive, setIsSignalActive] = useState(false)

  const [minInterval, setMinInterval] = useState(5)
  const [maxInterval, setMaxInterval] = useState(7)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Play Ready Go sound
  const playBeep = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/Ready Go.mp3')
    }
    audioRef.current.currentTime = 0
    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error)
    })
  }, [])

  const getRandomDelay = useCallback(() => {
    const minMs = minInterval * 1000
    const maxMs = maxInterval * 1000
    return Math.floor(Math.random() * (maxMs - minMs)) + minMs
  }, [minInterval, maxInterval])

  const scheduleNextBeep = useCallback(() => {
    const delay = getRandomDelay()

    timeoutRef.current = setTimeout(() => {
      playBeep()
      setIsSignalActive(true)

      setTimeout(() => {
        setIsSignalActive(false)
        scheduleNextBeep()
      }, 1000)
    }, delay)
  }, [playBeep, getRandomDelay])

  const startLoop = useCallback(() => {
    setGameState("running")
    setIsSignalActive(false)
    scheduleNextBeep()
  }, [scheduleNextBeep])

  const stopLoop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setGameState("idle")
    setIsSignalActive(false)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const getStateStyles = () => {
    if (isSignalActive) return "bg-green-600"
    if (gameState === "running") return "bg-secondary"
    return "bg-card"
  }

  const getMessage = () => {
    if (isSignalActive) return "GO!"
    if (gameState === "running") return "Get Ready..."
    return "Ready Go"
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 border-b border-border">
        <div className="flex items-center justify-start max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <Hand className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg tracking-tight">READY GO</span>
          </div>
        </div>
      </header>

      {/* Main Game Area - Removed onClick and cursor-pointer */}
      <main
        className={`flex-1 flex flex-col items-center justify-center p-6 transition-colors duration-150 select-none ${getStateStyles()}`}
      >
        <div className="text-center">
          {isSignalActive && <Zap className="w-16 h-16 mx-auto mb-4 text-white animate-pulse" />}

          <h1
            className={`text-5xl md:text-7xl font-bold tracking-tighter mb-2 ${
              isSignalActive ? "text-white" : "text-foreground"
            }`}
          >
            {getMessage()}
          </h1>

          {gameState === "idle" && (
            <p className="text-sm mt-6 text-muted-foreground">Press Start to begin continuous training</p>
          )}

          {gameState === "running" && !isSignalActive && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
            </div>
          )}
        </div>
      </main>

      {/* Controls Panel */}
      <div className="bg-card border-t border-border p-4">
        <div className="max-w-lg mx-auto">
          <div className="mb-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Min Interval</label>
                <span className="text-sm font-medium">{minInterval}s</span>
              </div>
              <Slider
                value={[minInterval]}
                onValueChange={([value]) => {
                  setMinInterval(value)
                  if (value > maxInterval) setMaxInterval(value)
                }}
                min={1}
                max={10}
                step={0.5}
                disabled={gameState === "running"}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-muted-foreground uppercase tracking-wider">Max Interval</label>
                <span className="text-sm font-medium">{maxInterval}s</span>
              </div>
              <Slider
                value={[maxInterval]}
                onValueChange={([value]) => {
                  setMaxInterval(value)
                  if (value < minInterval) setMinInterval(value)
                }}
                min={1}
                max={10}
                step={0.5}
                disabled={gameState === "running"}
                className="w-full"
              />
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Signal plays randomly between {minInterval}s - {maxInterval}s
            </p>
          </div>

          <Button
            variant={gameState === "running" ? "destructive" : "default"}
            className="w-full"
            onClick={(e) => {
              e.stopPropagation()
              if (gameState === "running") {
                stopLoop()
              } else {
                startLoop()
              }
            }}
          >
            {gameState === "running" ? (
              <>
                <Square className="w-4 h-4 mr-2" />
                Stop Training
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Start Training
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
