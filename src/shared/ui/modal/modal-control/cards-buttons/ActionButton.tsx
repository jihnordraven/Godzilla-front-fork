import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

type ActionButtonPropType = {
  title: string
  onClick: () => void
}

export const ActionButton = ({ title, onClick }: ActionButtonPropType) => {
  return (
    <Button variant="primary" onClick={onClick}>
      <Typography variant="subtitle2">{title}</Typography>
    </Button>
  )
}
