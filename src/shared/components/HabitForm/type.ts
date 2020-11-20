export type HabitFormProps = {
  onSubmit: (p: void) => void
  type: 'update' | 'create'
  focus?: boolean
  defaultValues?: {
    id?: string
    name: string
    duration: string
    color: string
    track: any
    time: string
    repeat: string[]
  }
}
