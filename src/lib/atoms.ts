import { create } from 'zustand'

interface AppState {
  animeImage: string
  hamburgerMenuOpen: boolean
  setAnimeImage: (value: string) => void
  setHamburgerMenuOpen: (value: boolean | ((prev: boolean) => boolean)) => void
}

export const useStore = create<AppState>((set) => ({
  animeImage: '/images/Kaori.jpg',
  hamburgerMenuOpen: false,
  setAnimeImage: (value: string) => set({ animeImage: value }),
  setHamburgerMenuOpen: (value: boolean | ((prev: boolean) => boolean)) =>
    set((state) => ({
      hamburgerMenuOpen:
        typeof value === 'function' ? value(state.hamburgerMenuOpen) : value,
    })),
}))

// Backward compatibility exports
export const useAnimeImage = () => {
  const animeImage = useStore((state) => state.animeImage)
  const setAnimeImage = useStore((state) => state.setAnimeImage)
  return [animeImage, setAnimeImage] as const
}

export const useHamburgerMenu = () => {
  const hamburgerMenuOpen = useStore((state) => state.hamburgerMenuOpen)
  const setHamburgerMenuOpen = useStore((state) => state.setHamburgerMenuOpen)
  return [hamburgerMenuOpen, setHamburgerMenuOpen] as const
}
