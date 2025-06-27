export default function IronmanHeartSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#01003D]">
      <svg
        className="w-24 h-24 animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00FFFF"
          strokeWidth="4"
          strokeOpacity="0.3"
        />
        {/* Inner glowing ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#00FFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="100 50"
          strokeDashoffset="0"
          strokeOpacity="0.7"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;150;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Center core */}
        <circle cx="50" cy="50" r="25" fill="url(#glowGradient)" />
        
        {/* Arc segments */}
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(0 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(45 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(90 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(135 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(180 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(225 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(270 50 50)"
        />
        <path
          d="M50 10 L50 30"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(315 50 50)"
        />
        
        <defs>
          <radialGradient
            id="glowGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
