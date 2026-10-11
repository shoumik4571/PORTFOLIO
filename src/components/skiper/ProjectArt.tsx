'use client';

import { motion } from 'framer-motion';

/**
 * Logical 3D emblem per project — sprout for the agri-tech build, coins +
 * rising trend for the finance agent, shield + keyhole for the security
 * toolkit. Pure SVG + framer-motion loops (no stock photos).
 */
export function ProjectArt({ id, label }: { id: string; label: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border -mx-1 bg-surface-elevated/60">
      <div className="relative aspect-video w-full">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(70% 90% at 50% 110%, rgba(0, 212, 170, 0.14), transparent 70%)' }}
          aria-hidden="true"
        />
        {id === 'krishisense-ai' && <AgriScene />}
        {id === 'buy-or-wait' && <FinanceScene />}
        {id === 'password-security-toolkit' && <SecurityScene />}
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

function AgriScene() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full" role="presentation">
      <defs>
        <linearGradient id="art-leaf" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#00d4aa" />
          <stop offset="100%" stopColor="#00e8bb" />
        </linearGradient>
      </defs>
      {/* sun */}
      <motion.circle
        cx="318" cy="52" r="24" fill="#00d4aa" opacity="0.25"
        animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0.32, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
      <circle cx="318" cy="52" r="13" fill="#00d4aa" opacity="0.85" />
      {/* field rows in perspective */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={200 - (i + 1) * 46} y1="225" x2={200 - (i + 1) * 12} y2="150"
          stroke="#2a2a2d" strokeWidth="2"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`r-${i}`}
          x1={200 + (i + 1) * 46} y1="225" x2={200 + (i + 1) * 12} y2="150"
          stroke="#2a2a2d" strokeWidth="2"
        />
      ))}
      <ellipse cx="200" cy="205" rx="150" ry="16" fill="#141416" stroke="#2a2a2d" />
      {/* sprout */}
      <motion.g
        animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'bottom center' }}
      >
        <path d="M200 205 Q200 160 200 138" stroke="#00d4aa" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M200 168 Q168 158 158 128 Q192 132 200 168 Z" fill="url(#art-leaf)" />
        <path d="M200 156 Q232 146 242 116 Q208 120 200 156 Z" fill="url(#art-leaf)" opacity="0.85" />
        <circle cx="200" cy="128" r="7" fill="#8b7cf6" />
      </motion.g>
      {/* data droplets */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`d-${i}`}
          cx={120 + i * 80} cy={96} r={3.4} fill="#8b7cf6"
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
        />
      ))}
    </svg>
  );
}

function FinanceScene() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full" role="presentation">
      {/* bars */}
      {[52, 84, 66, 108, 92, 132].map((hgt, i) => (
        <motion.rect
          key={i}
          x={56 + i * 34} y={195 - hgt} width="22" height={hgt} rx="5"
          fill={i === 5 ? '#00d4aa' : '#2a2a2d'}
          stroke={i === 5 ? '#00e8bb' : '#3a3a3e'}
          initial={{ scaleY: 0.4, opacity: 0.6 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.09, ease: [0.19, 1, 0.22, 1] }}
          style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
        />
      ))}
      {/* trend arrow */}
      <motion.path
        d="M52 150 L140 118 L196 128 L268 74 L336 56"
        stroke="#00e8bb" strokeWidth="4" fill="none" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
      />
      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="336" cy="56" r="17" fill="#141416" stroke="#00d4aa" strokeWidth="2.5" />
        <text x="336" y="63" textAnchor="middle" fontSize="17" fontWeight="700" fill="#00d4aa" fontFamily="monospace">₹</text>
      </motion.g>
      {/* coins */}
      {[0, 1].map((i) => (
        <motion.g
          key={`c-${i}`}
          animate={{ y: [0, -8, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: i * 1.1, ease: 'easeInOut' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          <ellipse cx={104 + i * 190} cy={52 + i * 8} rx="20" ry="20" fill="#141416" stroke="#8b7cf6" strokeWidth="2.5" />
          <text x={104 + i * 190} y={59 + i * 8} textAnchor="middle" fontSize="16" fontWeight="700" fill="#8b7cf6" fontFamily="monospace">$</text>
        </motion.g>
      ))}
    </svg>
  );
}

function SecurityScene() {
  return (
    <svg viewBox="0 0 400 225" className="absolute inset-0 h-full w-full" role="presentation">
      <defs>
        <linearGradient id="art-shield" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1c1f" />
          <stop offset="100%" stopColor="#141416" />
        </linearGradient>
      </defs>
      {/* orbit ring */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        <ellipse cx="200" cy="112" rx="120" ry="44" fill="none" stroke="#00d4aa" strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="6 6" />
        <circle cx="308" cy="86" r="4" fill="#8b7cf6" />
        <circle cx="96" cy="140" r="3" fill="#00d4aa" />
      </motion.g>
      {/* shield */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      >
        <path
          d="M200 42 L262 64 L262 118 Q262 168 200 192 Q138 168 138 118 L138 64 Z"
          fill="url(#art-shield)" stroke="#00d4aa" strokeWidth="2.5"
        />
        <circle cx="200" cy="106" r="13" fill="none" stroke="#8b7cf6" strokeWidth="4" />
        <rect x="196" y="114" width="8" height="20" rx="4" fill="#8b7cf6" />
      </motion.g>
      {/* binary rain */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.text
          key={`b-${i}`}
          x={56 + i * 72} y={30} textAnchor="middle" fontSize="13" fill="#3a3a3e" fontFamily="monospace"
          animate={{ y: [0, 170, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: i * 1.2, ease: 'linear' }}
        >
          {i % 2 ? '1' : '0'}
        </motion.text>
      ))}
    </svg>
  );
}
