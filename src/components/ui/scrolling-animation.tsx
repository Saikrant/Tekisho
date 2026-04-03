"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollingAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Adjust scroll progress relative to the section could be better, 
  // but for now we follow the provided logic.
  const animationProgress = Math.min(scrollY / 1000, 1)
  const expandRadius = animationProgress * 300

  return (
    <div className="min-h-[150vh] bg-white relative">
      <div className="h-screen flex items-center justify-center p-8 sticky top-0 overflow-hidden">
        <div className="relative">
          <div
            className={cn(
              "w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full flex items-center justify-center transition-all duration-500",
              scrollY > 300 ? "border-2 border-[#e9e9e9]" : "border-transparent"
            )}
          >
            <div
              className={cn(
                "w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full flex items-center justify-center relative transition-all duration-500",
                scrollY > 100 ? "border-2 border-blue-100" : "border-transparent"
              )}
            >
              <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-brand-blue p-0.5 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative shadow-inner">
                  
                  {/* C - Customer Centricity */}
                  <div
                    className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-10 flex items-center justify-center bg-blue-50"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(0)}px, ${expandRadius * Math.sin(0)}px)`,
                    }}
                  >
                    <div className="flex flex-col items-center">
                       <span className="text-3xl font-black text-blue-600">C</span>
                    </div>
                  </div>

                  {/* L - Leadership */}
                  <div
                    className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-10 flex items-center justify-center bg-pink-50"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(Math.PI * 0.4)}px, ${expandRadius * Math.sin(Math.PI * 0.4)}px)`,
                    }}
                  >
                     <span className="text-3xl font-black text-pink-500">L</span>
                  </div>

                  {/* A - Accountability */}
                  <div
                    className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-10 flex items-center justify-center bg-orange-50"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(Math.PI * 0.8)}px, ${expandRadius * Math.sin(Math.PI * 0.8)}px)`,
                    }}
                  >
                     <span className="text-3xl font-black text-orange-500">A</span>
                  </div>

                  {/* I - Integrity */}
                  <div
                    className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-10 flex items-center justify-center bg-green-50"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(Math.PI * 1.2)}px, ${expandRadius * Math.sin(Math.PI * 1.2)}px)`,
                    }}
                  >
                     <span className="text-3xl font-black text-green-500">I</span>
                  </div>

                  {/* M - Mindful Innovation */}
                  <div
                    className="absolute w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg transition-transform duration-300 ease-out z-10 flex items-center justify-center bg-cyan-50"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(Math.PI * 1.6)}px, ${expandRadius * Math.sin(Math.PI * 1.6)}px)`,
                    }}
                  >
                     <span className="text-3xl font-black text-cyan-500">M</span>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col items-center justify-center relative z-20 transition-opacity duration-500 px-6",
                      scrollY > 250 ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary text-center mb-1">Our CLAIM Values</h2>
                    <p className="text-text-muted text-center text-sm max-w-[200px] sm:max-w-xs">
                      The core principles driving every digital transformation journey at Tekisho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
