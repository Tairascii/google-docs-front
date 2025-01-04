import { LucideIcon } from 'lucide-react'

export interface Section {
  id: string
  label: string
  icon: LucideIcon
  onClick: () => void
  isActive?: boolean
}
