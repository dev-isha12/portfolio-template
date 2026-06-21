import { EyeDropperIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const quickColors = [
    '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#ec4899',
    '#f43f5e', '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6', '#0ea5e9', '#64748b', '#ffffff'
]

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

const hexToRgb = (hex) => {
    const value = hex.replace('#', '')
    return {
        r: parseInt(value.slice(0, 2), 16),
        g: parseInt(value.slice(2, 4), 16),
        b: parseInt(value.slice(4, 6), 16)
    }
}

const rgbToHex = ({ r, g, b }) => (
    `#${[r, g, b]
        .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0'))
        .join('')}`
)

const rgbToHsv = ({ r, g, b }) => {
    const red = r / 255
    const green = g / 255
    const blue = b / 255
    const max = Math.max(red, green, blue)
    const min = Math.min(red, green, blue)
    const delta = max - min
    let h = 0

    if (delta) {
        if (max === red) h = 60 * (((green - blue) / delta) % 6)
        if (max === green) h = 60 * ((blue - red) / delta + 2)
        if (max === blue) h = 60 * ((red - green) / delta + 4)
    }

    return {
        h: h < 0 ? h + 360 : h,
        s: max === 0 ? 0 : (delta / max) * 100,
        v: max * 100
    }
}

const hsvToRgb = ({ h, s, v }) => {
    const saturation = s / 100
    const value = v / 100
    const chroma = value * saturation
    const section = h / 60
    const x = chroma * (1 - Math.abs((section % 2) - 1))
    const match = value - chroma
    let rgb

    if (section < 1) rgb = [chroma, x, 0]
    else if (section < 2) rgb = [x, chroma, 0]
    else if (section < 3) rgb = [0, chroma, x]
    else if (section < 4) rgb = [0, x, chroma]
    else if (section < 5) rgb = [x, 0, chroma]
    else rgb = [chroma, 0, x]

    return {
        r: Math.round((rgb[0] + match) * 255),
        g: Math.round((rgb[1] + match) * 255),
        b: Math.round((rgb[2] + match) * 255)
    }
}

const lightenColor = (hex, amount = 0.28) => {
    const { r, g, b } = hexToRgb(hex)
    return rgbToHex({
        r: r + (255 - r) * amount,
        g: g + (255 - g) * amount,
        b: b + (255 - b) * amount
    })
}

const getInitialColor = () => {
    try {
        const savedTheme = JSON.parse(window.localStorage.getItem('portfolio-theme'))
        return savedTheme?.primary || '#3b82f6'
    } catch {
        return '#3b82f6'
    }
}

const applyTheme = (primary) => {
    const { r, g, b } = hexToRgb(primary)
    const root = document.documentElement

    root.style.setProperty('--theme-primary', primary)
    root.style.setProperty('--theme-secondary', lightenColor(primary))
    root.style.setProperty('--theme-rgb', `${r}, ${g}, ${b}`)
}

const ThemePalette = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [color, setColor] = useState(getInitialColor)
    const [hsv, setHsv] = useState(() => rgbToHsv(hexToRgb(getInitialColor())))
    const [isDragging, setIsDragging] = useState(false)
    const rgb = hexToRgb(color)
    const hueColor = rgbToHex(hsvToRgb({ h: hsv.h, s: 100, v: 100 }))

    useEffect(() => {
        applyTheme(color)
        window.localStorage.setItem('portfolio-theme', JSON.stringify({
            name: 'Custom',
            primary: color,
            secondary: lightenColor(color)
        }))
    }, [color])

    const updateFromHsv = (nextHsv) => {
        setHsv(nextHsv)
        setColor(rgbToHex(hsvToRgb(nextHsv)))
    }

    const updateSaturation = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        updateFromHsv({
            ...hsv,
            s: clamp(((event.clientX - bounds.left) / bounds.width) * 100, 0, 100),
            v: clamp(100 - ((event.clientY - bounds.top) / bounds.height) * 100, 0, 100)
        })
    }

    const selectColor = (nextColor) => {
        setColor(nextColor)
        setHsv(rgbToHsv(hexToRgb(nextColor)))
    }

    const updateRgb = (channel, value) => {
        const nextRgb = { ...rgb, [channel]: clamp(Number(value) || 0, 0, 255) }
        selectColor(rgbToHex(nextRgb))
    }

    const useEyeDropper = async () => {
        if (!window.EyeDropper) return

        try {
            const result = await new window.EyeDropper().open()
            selectColor(result.sRGBHex)
        } catch {
            // The picker was cancelled.
        }
    }

    return (
        <div className='fixed top-5 left-5 z-[100]'>
            <motion.button
                type='button'
                aria-label='Open color palette'
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className='group relative w-14 h-14 rounded-full text-white flex items-center justify-center border-[3px] border-white/80 shadow-[0_0_24px_rgba(0,0,0,0.35)]'
                style={{
                    background: isOpen
                        ? 'linear-gradient(135deg, #111827, #374151)'
                        : 'conic-gradient(#ef4444, #f59e0b, #eab308, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #ef4444)'
                }}
            >
                <span className='absolute inset-[7px] rounded-full bg-gray-900/90 shadow-inner' />
                {isOpen
                    ? <XMarkIcon className='w-6 h-6 relative z-10' />
                    : <EyeDropperIcon className='w-7 h-7 relative z-10' />
                }
                <span className='absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 -translate-x-1 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-white/10'>
                    Change color
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className='absolute left-0 mt-3 w-[340px] overflow-hidden rounded-xl bg-white border border-gray-300 shadow-2xl'
                    >
                        <div className='bg-gray-900 px-4 py-3 flex items-center justify-between'>
                            <div>
                                <h2 className='text-white font-semibold'>Website color</h2>
                                <p className='text-gray-400 text-xs'>Choose any color you like</p>
                            </div>
                            <span className='text-gray-300 text-sm font-mono uppercase'>{color}</span>
                        </div>

                        <div className='p-4'>
                            <div
                                role='slider'
                                tabIndex={0}
                                aria-label='Color saturation and brightness'
                                aria-valuetext={color}
                                onPointerDown={(event) => {
                                    setIsDragging(true)
                                    event.currentTarget.setPointerCapture(event.pointerId)
                                    updateSaturation(event)
                                }}
                                onPointerMove={(event) => {
                                    if (isDragging) updateSaturation(event)
                                }}
                                onPointerUp={(event) => {
                                    setIsDragging(false)
                                    event.currentTarget.releasePointerCapture(event.pointerId)
                                }}
                                className='relative h-52 w-full cursor-crosshair overflow-hidden border border-gray-300'
                                style={{ backgroundColor: hueColor }}
                            >
                                <div className='absolute inset-0 bg-gradient-to-r from-white to-transparent' />
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
                                <span
                                    className='absolute w-6 h-6 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgba(0,0,0,0.7)] -translate-x-1/2 -translate-y-1/2'
                                    style={{ left: `${hsv.s}%`, top: `${100 - hsv.v}%` }}
                                />
                            </div>

                            <div className='flex items-center gap-4 py-4'>
                                <button
                                    type='button'
                                    onClick={useEyeDropper}
                                    disabled={!window.EyeDropper}
                                    aria-label='Pick a color from the screen'
                                    className='text-gray-900 disabled:text-gray-300'
                                >
                                    <EyeDropperIcon className='w-8 h-8' />
                                </button>

                                <span
                                    className='w-14 h-14 shrink-0 rounded-full border-2 border-gray-400'
                                    style={{ backgroundColor: color }}
                                />

                                <input
                                    type='range'
                                    min='0'
                                    max='360'
                                    value={Math.round(hsv.h)}
                                    onChange={(event) => updateFromHsv({
                                        ...hsv,
                                        h: Number(event.target.value)
                                    })}
                                    aria-label='Hue'
                                    className='hue-slider flex-1'
                                />
                            </div>

                            <div className='grid grid-cols-3 gap-3'>
                                {['r', 'g', 'b'].map((channel) => (
                                    <label key={channel} className='text-center'>
                                        <input
                                            type='number'
                                            min='0'
                                            max='255'
                                            value={rgb[channel]}
                                            onChange={(event) => updateRgb(channel, event.target.value)}
                                            className='w-full rounded-md border border-gray-300 px-2 py-2 text-center text-xl text-gray-900 outline-none focus:border-gray-700'
                                        />
                                        <span className='block mt-2 text-gray-900 font-medium uppercase'>
                                            {channel}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <div className='mt-4 pt-4 border-t border-gray-200'>
                                <p className='text-gray-500 text-xs mb-3'>Quick colors</p>
                                <div className='grid grid-cols-9 gap-2'>
                                    {quickColors.map((quickColor) => (
                                        <button
                                            key={quickColor}
                                            type='button'
                                            aria-label={`Use color ${quickColor}`}
                                            onClick={() => selectColor(quickColor)}
                                            className='w-7 h-7 rounded-full border border-gray-300 hover:scale-125 transition-transform'
                                            style={{ backgroundColor: quickColor }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ThemePalette
