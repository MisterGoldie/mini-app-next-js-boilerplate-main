'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const MenuBoard = dynamic(() => import('../components/MenuBoard'), { ssr: false })

export default function HowToPlay() {
  const router = useRouter()
  const [isMuted, setIsMuted] = useState(false)

  const handleStartGame = (difficulty: 'easy' | 'medium' | 'hard', piece: 'pumpkin' | 'scarygary') => {
    router.push(`/game?difficulty=${difficulty}&piece=${piece}&muted=${isMuted}`)
  }

  const handleGoBack = () => {
    router.push('/')
  }

  const toggleMute = () => {
    setIsMuted(prev => !prev)
  }

  return (
    <main className="h-[100svh] bg-black text-white overflow-hidden">
      <MenuBoard 
        onStartGame={(difficulty, piece) => handleStartGame(difficulty, piece as 'pumpkin' | 'scarygary')}
        onGoBack={handleGoBack}
        isMuted={isMuted}
        toggleMute={toggleMute} handleBackButton={function (): void {
          throw new Error('Function not implemented.')
        } } playHalloweenMusic={function (): void {
          throw new Error('Function not implemented.')
        } } stopHalloweenMusic={function (): void {
          throw new Error('Function not implemented.')
        } }      />
    </main>
  )
}